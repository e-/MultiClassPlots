#!/usr/bin/env python

import os.path
import json
import numpy as np
import pandas as pd



def csv_to_databuffers(filename, x, y, category, width=512, height=None,
                       xmin=None, ymin=None, xmax=None, ymax=None):
    root, ext = os.path.splitext(filename)
    if ext != '.csv':
        raise ValueError('Expected a .csv file, got ({}) {}'.format(ext, filename))

    df = pd.read_csv(filename, usecols=[x, y, category])
    df[category] = df[category].astype("category")
    description = {'source': {"filename": filename, "type": "csv"}}

    if xmin is None:
        xmin = df[x].min()
    if ymin is None:
        ymin = df[y].min()
    if xmax is None:
        xmax = df[x].max()
    if ymax is None:
        ymax = df[y].max()
    xy_range = [[float(xmin), float(xmax)], [float(ymin), float(ymax)]]
    if ymax == ymin or xmax == xmin:
        raise ValueError('Invalid bounds: {}'.format(xy_range))
    if height is None:
        ratio = (ymax - ymin) / (xmax - xmin)
        height = int(width * ratio)
    bins = (width, height)
    print('Range: %s, bins: %s'%(xy_range, bins))
    histograms = {}
    counts = {}
    cat_column = df[category]
    values = cat_column.cat.categories

    for i, cat in enumerate(values):
        df_cat = df.loc[cat_column == cat, [x, y]]
        (histo, xedges, yedges) = np.histogram2d(df_cat[x], df_cat[y],
                                                 normed=False,
                                                 bins=bins, range=xy_range)
        if isinstance(bins, list):
            if (xedges != bins[0]).any():
                print('X Edges differ: %s'%xedges)
                bins = [xedges, yedges]
            if (yedges != bins[1]).any():
                print('Y Edges differ: %s'%yedges)
                bins = [xedges, yedges]
        else:
            bins = [xedges, yedges]
        if isinstance(cat, str):
            key = cat
        else:
            key = i+1
        histograms[key] = histo
        counts[key] = len(df_cat) + counts.get(key, 0)

    description['encoding'] = {
        "x": {"field": x,
              "type": "quantitative",
              "bin": {
                  "maxbins": width
                  },
              "aggregate": "count",
              "scale": {
                  "domain": xy_range[0],
                  "range": [0, width]
                  }
             },
        "y": {"field": y,
              "type": "quantitative",
              "bin": {
                  "maxbins": height
                  },
              "aggregate": "count",
              "scale": {
                  "domain": xy_range[1],
                  "range": [0, height]
                  }
             },
        "z": {"field": category,
              "type": "nominal", # or ordinal
              "scale": {
                  "domain": list(histograms.keys())
                  }
             }
        }

    print('Writing files')
    count = 0
    buffers = []
    for (key, histo) in histograms.items():
        histo = histo.T
        hmin = np.min(histo)
        hmax = np.max(histo)
        outfile = root + '_cat_%s.json'%key
        with open(outfile, 'w') as outf:
            json.dump(histo.tolist(), outf)
        data = {'url': outfile,
                'count': counts[key],
                'value': key,
                'range': [int(hmin), int(hmax)]}
        buffers.append(data)
        count += counts[key]
    description['buffers'] = buffers
    description['source']['rows'] = count
    with open(root + '_data.json', 'w') as outf:
        json.dump(description, outf, indent=2)


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Compute heatmap from csv')
    parser.add_argument('infile',
                        help='Input csv file')
    parser.add_argument('x', help='x column name')
    parser.add_argument('y', help='y column name')
    parser.add_argument('category', help='category column name')
    parser.add_argument('--width', type=int, default=512, nargs='?',
                        help='width of the binned image')
    parser.add_argument('--height', type=int, default=None, nargs='?',
                        help='height of the binned image')
    parser.add_argument('--xmin', type=float, default=None, nargs='?',
                        help='xmin of bbox')
    parser.add_argument('--ymin', type=float, default=None, nargs='?',
                        help='ymin of bbox')
    parser.add_argument('--xmax', type=float, default=None, nargs='?',
                        help='xmax of bbox')
    parser.add_argument('--ymax', type=float, default=None, nargs='?',
                        help='ymax of bbox')
    args = parser.parse_args()
    print('args: %s'%args)
    csv_to_databuffers(args.infile, args.x, args.y, args.category,
                       width=args.width, height=args.height,
                       xmin=args.xmin, xmax=args.xmax, ymin=args.ymin, ymax=args.ymax)
