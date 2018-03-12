import Point from './point';
import DataBuffer from './data-buffer';
import Mask from './mask';
import Color from './color';

export enum TileAggregation {
    Min,
    Mean,
    Sum,
    Max
}

export default class Tile extends Point {
    dataValues:number[] = [];
    id:number = -1

    constructor(x:number, y:number, public mask:Mask) {
      super(x, y);
    }

    aggregateOne(buffer:DataBuffer, op:TileAggregation = TileAggregation.Mean): number {
      let val = 0;
      let cnt = 0;

      for(let r = Math.ceil(this.y); r < this.y + this.mask.height; r++) {
        if(r >= buffer.height) break;
        if (!buffer.values[r]) continue;
        for(let c = Math.ceil(this.x); c < this.x + this.mask.width; c++) {
          if(c >= buffer.width) break;
          if(cnt == 0)
            val = buffer.values[r][c];
          else {
            let current = buffer.values[r][c];
            switch(op) {
              case TileAggregation.Min:
                val = Math.min(val, current);
                break;
              case TileAggregation.Mean:
              case TileAggregation.Sum:
                val += current;
                break;
              case TileAggregation.Max:
                val = Math.max(val, current);
                break;
            }
          }
          cnt ++;
        }
      }

      if(op === TileAggregation.Mean && cnt > 0) {
        val /= cnt;
      }

      return val;
    }

    aggregate(buffers:DataBuffer[], op:TileAggregation = TileAggregation.Mean):number[] {
        return buffers.map(buffer => this.aggregateOne(buffer, op));
    }

    makeHatchPattern(colors: Color[], hatchProp:boolean, hatchMul:number, hatchAng:number): HTMLCanvasElement{
      let hatchCanvas = <HTMLCanvasElement>document.createElement('canvas');
      hatchCanvas.width  = this.mask.width;
      hatchCanvas.height = this.mask.height;

      let ctx    = hatchCanvas.getContext("2d")!;

      ctx.save();
      ctx.drawImage(this.mask.maskCanvas, 0, 0);
      ctx.globalCompositeOperation="source-atop";
      ctx.translate(hatchCanvas.width/2, hatchCanvas.height/2);
      ctx.rotate(hatchAng);

      let sum = 0;
      for (let val of this.dataValues)
        sum+=val;

      let acc = 0;
      for (let j:number=0; j<this.dataValues.length; j++){
        ctx.strokeStyle = "#"+colors[j].toHexa();
        if(hatchProp){
          ctx.lineWidth=hatchMul*this.dataValues.length*this.dataValues[j]/sum;
        } else{
          ctx.lineWidth=hatchMul;
        }
        acc += ctx.lineWidth/2;
        for (let i:number=acc-hatchCanvas.width*Math.sqrt(2); i<hatchCanvas.width*Math.sqrt(2); i+=this.dataValues.length*hatchMul){
          ctx.beginPath();
          ctx.moveTo(i, -hatchCanvas.height*Math.sqrt(2));
          ctx.lineTo(i,  hatchCanvas.height*Math.sqrt(2));
          ctx.stroke();
        //ctx.fillRect(i, 0, 2, hatchCanvas.height);
        }
        acc += ctx.lineWidth/2;
      }
      ctx.restore();
      let pixels = ctx.getImageData(0, 0, hatchCanvas.width, hatchCanvas.height)!;
      /*if (this.id==2){
        console.log(Math.min(hatchCanvas.width, hatchCanvas.height));
        for (let i=0; i<Math.min(hatchCanvas.width, hatchCanvas.height); i++)
          console.log(i+" => "+pixels.data[i*4+i*4*hatchCanvas.width+0]+"-"+
                               pixels.data[i*4+i*4*hatchCanvas.width+1]+"-"+
                               pixels.data[i*4+i*4*hatchCanvas.width+2]+"-"+
                               pixels.data[i*4+i*4*hatchCanvas.width+3]+"");
      }*/
      return hatchCanvas;
    }
  }
