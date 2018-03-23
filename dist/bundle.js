var MCP =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function positive(x) { return x > 0; }
exports.positive = positive;
function create2D(width, height, value) {
    let arr = new Array(height);
    for (let i = 0; i < height; ++i)
        arr[i] = new Array(width).fill(value);
    return arr;
}
exports.create2D = create2D;
function asum(values) {
    let n = values.length;
    var i = -1, value, sum = NaN;
    while (++i < n) {
        if ((value = values[i]) != null && value >= value) {
            sum = value;
            while (++i < n) {
                if ((value = values[i]) != null && value >= value) {
                    sum += value;
                }
            }
        }
    }
    return sum;
}
exports.asum = asum;
function amax(values) {
    let n = values.length;
    var i = -1, value, max = NaN;
    while (++i < n) {
        if ((value = values[i]) != null && value >= value) {
            max = value;
            while (++i < n) {
                if ((value = values[i]) != null && value > max) {
                    max = value;
                }
            }
        }
    }
    return max;
}
exports.amax = amax;
function amin(values) {
    let n = values.length;
    var i = -1, value, min = NaN;
    while (++i < n) {
        if ((value = values[i]) != null && value >= value) {
            min = value;
            while (++i < n) {
                if ((value = values[i]) != null && min > value) {
                    min = value;
                }
            }
        }
    }
    return min;
}
exports.amin = amin;
function arange(start, end, step) {
    var n = start;
    if (end == undefined) {
        end = start;
        start = 0;
    }
    else
        n = end - start;
    if (step == undefined)
        step = 1;
    else
        n = n / step;
    n = Math.floor(n);
    let array = new Array(n);
    for (let i = 0; i < n; i++) {
        array[i] = start;
        start += step;
    }
    return array;
}
exports.arange = arange;
let cache = {};
function get(url) {
    if (cache[url]) {
        return Promise.resolve(cache[url]);
    }
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                cache[url] = this.response;
                resolve(this.response);
            }
            else {
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
exports.get = get;
var largest_rect_in_poly_1 = __webpack_require__(12);
exports.largeRectInPoly = largest_rect_in_poly_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(r = 1, g = 1, b = 1, a = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    set(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    clamp() {
        return new Color(Math.min(Math.max(this.r, 0), 1), Math.min(Math.max(this.g, 0), 1), Math.min(Math.max(this.b, 0), 1), Math.min(Math.max(this.a, 0), 1));
    }
    clone() {
        return new Color(this.r, this.g, this.b, this.a);
    }
    darken(v) {
        return new Color(this.r * v, this.g * v, this.b * v, this.a);
    }
    whiten(v) {
        return new Color(this.r + (1 - v) * (1 - this.r), this.g + (1 - v) * (1 - this.g), this.b + (1 - v) * (1 - this.b), this.a);
    }
    dissolve(v) {
        return new Color(this.r * v, this.g * v, this.b * v, this.a * v);
    }
    toString() {
        return "" + this.r + " " + this.g + " " + this.b + " " + this.a;
    }
    hex(prefix = '#') {
        let hex = prefix;
        if (Math.floor(255 * this.r) < 16)
            hex = hex + "0" + Math.floor(255 * this.r).toString(16);
        else
            hex = hex + Math.floor(255 * this.r).toString(16);
        if (Math.floor(255 * this.g) < 16)
            hex = hex + "0" + Math.floor(255 * this.g).toString(16);
        else
            hex = hex + Math.floor(255 * this.g).toString(16);
        if (Math.floor(255 * this.b) < 16)
            hex = hex + "0" + Math.floor(255 * this.b).toString(16);
        else
            hex = hex + Math.floor(255 * this.b).toString(16);
        return hex;
    }
    cssDepremultiply() {
        let a = this.a;
        if (a == 0)
            return "rgba(0,0,0,0)";
        let r = this.r / a, g = this.g / a, b = this.b / a;
        return "rgba(" +
            Math.floor(255 * r) + "," +
            Math.floor(255 * g) + "," +
            Math.floor(255 * b) + "," +
            Math.round(100 * a) / 100 + ")";
    }
    css() {
        let a = this.a;
        /*if (a == 0)
            return "rgba(0,0,0,0)";*/
        let r = this.r, g = this.g, b = this.b;
        return "rgba(" +
            Math.floor(255 * r) + "," +
            Math.floor(255 * g) + "," +
            Math.floor(255 * b) + "," +
            Math.round(100 * a) / 100 + ")";
    }
    add(c) {
        return new Color(this.r + c.r, this.g + c.g, this.b + c.b, this.a + c.a);
    }
    darker() {
        return new Color(this.r / 2, this.g / 2, this.b / 2, this.a);
    }
    totTransparent() {
        return new Color(this.r, this.g, this.b, 0.0);
    }
    brighter() {
        return new Color(1 - (1 - this.r) / 2, 1 - (1 - this.g) / 2, 1 - (1 - this.b) / 2, this.a);
    }
    static compose(a, fa, b, fb) {
        return new Color(a.r * fa + b.r * fb, a.g * fa + b.g * fb, a.b * fa + b.b * fb, a.a * fa + b.a * fb);
    }
    static interpolate(a, b, r) {
        return Color.compose(a, 1 - r, b, r);
    }
    static byName(name) {
        name = name.toLowerCase();
        if (name in Color.ColorByName)
            return Color.ColorByName[name];
        return Color.None;
    }
    ;
}
Color.None = new Color(0, 0, 0, 0);
Color.White = new Color(1, 1, 1, 1);
Color.Black = new Color(0, 0, 0, 1);
Color.Blue = new Color(31 / 255, 120 / 255, 180 / 255, 1); // Blue
Color.Orange = new Color(255 / 255, 127 / 255, 0 / 255, 1); // orange
Color.Green = new Color(51 / 255, 160 / 255, 44 / 255, 1); // green
Color.Red = new Color(211 / 255, 39 / 255, 40 / 255, 1);
Color.Purple = new Color(148 / 255, 103 / 255, 189 / 255, 1);
Color.Brown = new Color(140 / 255, 86 / 255, 75 / 255, 1);
Color.Pink = new Color(227 / 255, 119 / 255, 194 / 255, 1);
Color.Gray = new Color(127 / 255, 127 / 255, 127 / 255, 1);
Color.Yellow = new Color(188 / 255, 189 / 255, 34 / 255, 1);
Color.Skyblue = new Color(23 / 255, 190 / 255, 207 / 255, 1);
Color.Transparent = new Color(0, 0, 0, 0);
Color.ColorByName = {
    "None": Color.None,
    "white": Color.White,
    "Black": Color.Black,
    "blue": Color.Blue,
    "orange": Color.Orange,
    "green": Color.Green,
    "red": Color.Red,
    "purple": Color.Purple,
    "brown": Color.Brown,
    "pink": Color.Pink,
    "gray": Color.Gray,
    "yellow": Color.Yellow,
    "skyblue": Color.Skyblue
};
Color.Category10 = [Color.Blue, Color.Orange, Color.Green, Color.Red, Color.Purple, Color.Brown, Color.Pink, Color.Gray, Color.Yellow, Color.Skyblue];
Color.Category10a = [Color.Blue, Color.Red, Color.Green, Color.Orange, Color.Purple, Color.Brown, Color.Pink, Color.Gray, Color.Yellow, Color.Skyblue];
Color.Category10b = [Color.Red, Color.Yellow, Color.Blue, Color.Orange, Color.Purple, Color.Green, Color.Pink, Color.Gray, Color.Yellow, Color.Skyblue];
exports.default = Color;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = __importDefault(__webpack_require__(7));
const rect_1 = __importDefault(__webpack_require__(22));
const util = __importStar(__webpack_require__(0));
var TileAggregation;
(function (TileAggregation) {
    TileAggregation[TileAggregation["Min"] = 0] = "Min";
    TileAggregation[TileAggregation["Mean"] = 1] = "Mean";
    TileAggregation[TileAggregation["Sum"] = 2] = "Sum";
    TileAggregation[TileAggregation["Max"] = 3] = "Max";
})(TileAggregation = exports.TileAggregation || (exports.TileAggregation = {}));
class Tile extends point_1.default {
    constructor(x, y, mask, center = new point_1.default(x + mask.width / 2, y + mask.height / 2)) {
        super(x, y);
        this.mask = mask;
        this.center = center;
        this.dataValues = [];
    }
    area() { return this.mask.area(); }
    rowcounts() { return this.mask.rowcounts(); }
    maxValue() { return util.amax(this.dataValues); }
    sumValue() { return util.asum(this.dataValues); }
    aggregateOne(buffer, op = TileAggregation.Mean) {
        let val = 0;
        let cnt = 0;
        let r0 = Math.ceil(this.y);
        let c0 = Math.ceil(this.x);
        let rmax = Math.min(this.y + this.mask.height, buffer.height);
        let cmax = Math.min(this.x + this.mask.width, buffer.width);
        for (let r = r0; r < rmax; r++) {
            let row = buffer.values[r];
            let mrow = this.mask.mask[r - r0];
            for (let c = c0; c < cmax; c++) {
                if (mrow[c - c0] == 0)
                    continue;
                if (cnt == 0)
                    val = row[c];
                else {
                    let current = row[c];
                    switch (op) {
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
                cnt++;
            }
        }
        if (op === TileAggregation.Mean && cnt > 0) {
            val /= cnt;
        }
        return val;
    }
    aggregate(buffers, op = TileAggregation.Mean) {
        // Just one thing to aggregate ? let's return it
        if (this.mask.height == 1 && this.mask.width == 1)
            return buffers.map(buffer => buffer.values[Math.ceil(this.y)][Math.ceil(this.x)]);
        else
            return buffers.map(buffer => this.aggregateOne(buffer, op));
    }
    getRectAtCenter() {
        if (this.mask && this.mask.path != undefined) {
            let poly = this.mask.path.pts;
            let center = util.largeRectInPoly(poly, {
                angle: 0,
                aspectRatio: 1
            });
            if (!center) {
                return null;
            }
            let p = center[0];
            return new rect_1.default(new point_1.default(p.cx - p.width / 2, p.cy - p.height / 2), new point_1.default(p.cx + p.width / 2, p.cy + p.height / 2));
        }
        return new rect_1.default(new point_1.default(this.x, this.y), new point_1.default(this.x + this.mask.width, this.y + this.mask.height));
    }
}
exports.default = Tile;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(24);
const rn = __importStar(__webpack_require__(8));
class Mask {
    constructor(width, height, default_value = 1, buffer, offset = 0) {
        this.width = width;
        this.height = height;
        if (buffer === undefined)
            buffer = new ArrayBuffer(width * height);
        this.mask = Array(height);
        for (let i = 0; i < height; i++) {
            this.mask[i] = new Uint8ClampedArray(buffer, i * width + offset, width);
            if (default_value != undefined)
                this.mask[i].fill(default_value);
        }
    }
    rowcounts() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        let rowcounts = this.mask.map(row => row.reduce(reducer));
        for (let i = 1; i < rowcounts.length; i++)
            rowcounts[i] += rowcounts[i - 1];
        return rowcounts;
    }
    area() {
        let rc = this.rowcounts();
        return rc[rc.length - 1];
    }
    randomPoint(rowcounts) {
        if (rowcounts === undefined)
            rowcounts = this.rowcounts();
        let rand = rn.create('JaeminFredPierreJean-Daniel');
        var pos = rand(rowcounts[rowcounts.length - 1]);
        var r = 0;
        while (rowcounts[r] < pos)
            r++;
        if (r > 0)
            pos -= rowcounts[r - 1];
        let row = this.mask[r];
        for (let c = 0; c < this.width; c++) {
            if (row[c])
                pos--;
            if (pos == 0)
                return [r, c];
        }
        throw new Error('Random point not found as expected');
    }
    //[jdf] For linearize and buffer to work, we need to store the offset in the class
    //buffer() { return this.mask[0].buffer; }
    // linearize():number[] {
    //     // Fool the type system of TS that prevents returning the Float32Array directly
    //     return <number[]><any>new Uint8ClampedArray(this.buffer(), this.width*this.height,
    //                                                 this.offset);
    // }
    getCanvas() {
        if (this.maskCanvas == undefined) {
            this.maskCanvas = document.createElement('canvas');
            this.maskCanvas.width = this.width;
            this.maskCanvas.height = this.height;
        }
        return this.maskCanvas;
    }
    getPath() {
        if (this.path === undefined)
            this.path = new path_1.Path();
        return this.path;
    }
    copyFrom(ctx) {
        let imageData = ctx.getImageData(0, 0, this.width, this.height);
        var i = 0;
        for (let r = 0; r < imageData.height; r++) {
            let row = this.mask[r];
            for (let c = 0; c < imageData.width; c++) {
                if (imageData.data[i] > 0) {
                    row[c] = 1;
                }
                i += 4;
            }
        }
    }
    copyTo(ctx) {
        let imageData = ctx.getImageData(0, 0, this.width, this.height);
        var i = 0;
        for (let r = 0; r < imageData.height; r++) {
            let row = this.mask[r];
            for (let c = 0; c < imageData.width; c++) {
                if (row[c] > 0) {
                    imageData.data[i] = 255;
                }
                i += 4;
            }
        }
    }
}
exports.default = Mask;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(__webpack_require__(0));
const data_buffer_1 = __importDefault(__webpack_require__(14));
class GeoSpec {
    constructor(projection = "mercator", latitudes, longitudes, proj4) {
        this.projection = projection;
        this.latitudes = latitudes;
        this.longitudes = longitudes;
        this.proj4 = proj4;
    }
}
exports.GeoSpec = GeoSpec;
class DataSpec {
    constructor(specs) {
        this.specs = specs;
        this.geo = new GeoSpec();
        this.parseSource();
        this.parseEncoding();
        this.parseProjection();
        this.parseBuffers();
    }
    parseSource() {
        if ('source' in this.specs)
            this.source = this.specs.source;
    }
    parseProjection() {
        let geo = this.geo;
        if ('projection' in this.specs) {
            let projection = this.specs.projection;
            if (projection.type)
                geo.projection = projection.type;
            let encoding = this.encoding;
            if (encoding.x != undefined &&
                encoding.x.scale != undefined &&
                encoding.x.scale.domain != undefined)
                geo.latitudes = encoding.x.scale.domain;
            if (encoding.y != undefined &&
                encoding.y.scale != undefined &&
                encoding.y.scale.domain != undefined)
                geo.longitudes = encoding.y.scale.domain;
        }
    }
    parseEncoding() {
        this.encoding = this.specs.encoding;
    }
    parseBuffers() {
        this.buffers = this.specs.buffers;
    }
    load(base = '') {
        let requests = [];
        this.buffers.forEach((buffer) => {
            if (!buffer.data) {
                let promise = util.get(base + buffer.url).then((data) => {
                    //console.log('Loaded '+buffer.url);
                    buffer.data = JSON.parse(data);
                });
                requests.push(promise);
            }
        });
        return Promise.all(requests);
    }
}
exports.DataSpec = DataSpec;
class ComposeSpec {
    constructor(options) {
        this.mix = "mean";
        this.mixing = "additive";
        this.size = 8;
        this.widthprop = "none";
        this.colprop = false;
        if (options)
            Object.assign(this, options);
    }
}
exports.ComposeSpec = ComposeSpec;
class GlyphSpec {
    constructor(options) {
        this.width = 32;
        this.height = 32;
        this.factor = 8;
        if (options)
            Object.assign(this, options);
    }
}
exports.GlyphSpec = GlyphSpec;
class RebinSpec {
    constructor(options) {
        this.type = "none";
        if (options)
            Object.assign(this, options);
    }
}
exports.RebinSpec = RebinSpec;
class RescaleSpec {
    constructor(options) {
        this.type = "linear";
        this.level = 32; // for equidepth
        if (options)
            Object.assign(this, options);
    }
}
exports.RescaleSpec = RescaleSpec;
class ContourSpec {
    constructor(options) {
        this.stroke = 0;
        this.lineWidth = 1;
        this.colProp = true;
        this.fill = 0; // percentile over which we fill
        this.blur = 2;
        if (options)
            Object.assign(this, options);
    }
}
exports.ContourSpec = ContourSpec;
class LegendSpec {
    constructor(options) {
        this.format = ".2s";
        this.fontSize = "11px";
        this.fontFamily = "sans-serif";
        this.rowHeight = 15;
        this.gutter = 5;
        this.labelWidth = 80;
        this.colorMapWidth = 120;
        this.padding = 5;
        this.tickFontSize = "10px";
        this.markers = 3;
        // multiplicative circles
        this.size = 150;
        // bars
        this.width = 50;
        this.height = 50;
        if (options)
            Object.assign(this, options);
    }
}
exports.LegendSpec = LegendSpec;
class Configuration {
    constructor(specs) {
        this.specs = specs;
        this.blur = 0;
        this.width = -1;
        this.height = -1;
        this.bufferNames = [];
        this.legend = new LegendSpec();
        if (typeof this.specs === 'string') {
            this.specs = JSON.parse(this.specs);
        }
        this.parseDescription();
        this.parseBackground();
        this.parseData();
        this.parseSmooth();
        this.parseDerivedBuffers();
        this.parseReencoding();
        this.parseRebin();
        this.parseCompose();
        this.parseRescale();
        this.parseContour();
        this.parseLegend();
    }
    parseDescription() {
        if ('description' in this.specs)
            this.description = this.specs.description;
    }
    parseBackground() {
        if ('background' in this.specs)
            this.background = this.specs.background;
    }
    parseData() {
        this.data = this.specs.data;
    }
    parseSmooth() {
        if ('smooth' in this.specs) {
            if (this.specs.smooth.radius)
                this.blur = this.specs.smooth.radius;
        }
    }
    parseContour() {
        if ('contour' in this.specs) {
            this.contour = new ContourSpec(this.specs.contour);
        }
    }
    parseDerivedBuffers() {
    }
    parseReencoding() {
        this.reencoding = this.specs.reencoding;
    }
    parseRebin() {
        if (this.specs.rebin)
            this.rebin = new RebinSpec(this.specs.rebin);
    }
    parseCompose() {
        if (this.specs.compose) {
            this.compose = new ComposeSpec(this.specs.compose);
            if (this.specs.compose.glyphSpec) {
                this.compose.glyphSpec = new GlyphSpec(this.specs.compose.glyphSpec);
            }
        }
    }
    parseRescale() {
        if (this.specs.rescale)
            this.rescale = new RescaleSpec(this.specs.rescale);
    }
    validate() {
        if (!this.data)
            return false;
        let widths = new Map(), heights = new Map();
        let data = this.data.dataSpec;
        if (!data ||
            !data.encoding ||
            !data.encoding.x ||
            !data.encoding.y ||
            !data.buffers)
            return false;
        let x_enc = data.encoding.x, y_enc = data.encoding.y;
        let x = undefined, y = undefined;
        if (x_enc) {
            if (x_enc.bin && 'maxbins' in x_enc.bin && x_enc.bin.maxbins)
                widths.set('maxbins', x_enc.bin.maxbins);
            if (x_enc.scale && x_enc.scale.range &&
                x_enc.scale.range instanceof Array && x_enc.scale.range.length > 1)
                widths.set('range', x_enc.scale.range[1]);
        }
        if (y_enc) {
            if (y_enc.bin && 'maxbins' in y_enc.bin && y_enc.bin.maxbins)
                heights.set('maxbins', y_enc.bin.maxbins);
            if (y_enc.scale && y_enc.scale.range &&
                y_enc.scale.range instanceof Array && y_enc.scale.range.length > 1)
                heights.set('range', y_enc.scale.range[1]);
        }
        let error = '';
        this.bufferNames = [];
        data.buffers.forEach((buffer, i) => {
            if (buffer.value)
                this.bufferNames.push(buffer.value);
            else
                this.bufferNames.push("" + i);
            if (buffer.data instanceof Array) {
                heights.set(buffer.value, buffer.data.length);
                widths.set(buffer.value, buffer.data[0].length);
            }
            else {
                error = 'invalid buffer ' + buffer.value;
            }
        });
        widths.forEach((width, k) => {
            if (this.width == -1)
                this.width = width;
            else if (this.width != width) {
                console.log('Inconsistent widths for ' + k + ' :' + width + ' instead of ' + this.width);
                error = k;
            }
        });
        heights.forEach((height, k) => {
            if (this.height == -1)
                this.height = height;
            else if (this.height != height) {
                console.log('Inconsistent heights for ' + k + ' :' + height + ' instead of ' + this.height);
                error = k;
            }
        });
        if (error != '')
            return false;
        return true;
    }
    loadTopojson(base = '') {
        if (this.rebin &&
            this.rebin.url != undefined && this.rebin.topojson == undefined) {
            return util
                .get(base + this.rebin.url)
                .then(response => {
                console.log('Loaded topojson at ' + (base + this.rebin.url));
                this.rebin.topojson = JSON.parse(response);
                return this;
            })
                .catch((reason) => {
                console.log('Cannot load topojson at ' + (base + this.rebin.url) + ': ' + reason);
                return this;
            });
        }
        return Promise.resolve(this);
    }
    // load data from the server if this.data contains url
    load(base = '') {
        if (!this.data.dataSpec && this.data.url) {
            return util
                .get(base + this.data.url)
                .then(response => {
                console.log('Loaded configuration data at ' + (base + this.data.url));
                let dataSpec = new DataSpec(JSON.parse(response));
                this.data.dataSpec = dataSpec;
                return dataSpec
                    .load(base)
                    .then(() => {
                    return this.loadTopojson(base);
                });
            })
                .catch((reason) => {
                console.log('Cannot load topojson at ' + (base + this.rebin.url) + ': ' + reason);
                return this;
            });
        }
        return this.loadTopojson(base).then(() => { return this; });
    }
    getBuffers() {
        let data = this.data;
        if (!data ||
            !data.dataSpec ||
            !data.dataSpec.buffers)
            return [];
        let buffers = data.dataSpec.buffers;
        let dataBuffers = data.dataSpec.buffers.map((bufferSpec) => new data_buffer_1.default(bufferSpec.value, this.width, this.height, bufferSpec.data));
        return dataBuffers;
    }
    getLabels() {
        if (!this.reencoding
            || !this.reencoding.label
            || !this.reencoding.label.scale
            || !this.reencoding.label.scale.range)
            return undefined;
        return this.reencoding.label.scale.range;
    }
    getColors() {
        if (!this.reencoding
            || !this.reencoding.color
            || !this.reencoding.color.scale
            || !this.reencoding.color.scale.range)
            return [];
        return this.reencoding.color.scale.range;
    }
    getGeo() {
        let geo = this.data.dataSpec.geo;
        if (this.specs.rebin != undefined &&
            this.specs.rebin.proj4 != undefined)
            geo.proj4 = this.specs.rebin.proj4;
        return geo;
    }
    parseLegend() {
        if (this.specs.legend === false)
            this.legend = false;
        else if (this.specs.legend)
            this.legend = new LegendSpec(this.specs.legend);
    }
}
exports.Configuration = Configuration;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(__webpack_require__(1));
const tdigest_1 = __webpack_require__(19);
const util_1 = __webpack_require__(0);
class LinearScale {
    constructor(domain, range, clamp = true) {
        this.domain = domain;
        this.range = range;
        this.scale = (this.range[1] - this.range[0]) / (this.domain[1] - this.domain[0]);
        this.min = util_1.amin(this.range);
        this.max = util_1.amax(this.range);
    }
    clamp(value) {
        if (value < this.min)
            return this.min;
        if (value > this.max)
            return this.max;
        return value;
    }
    map(value) {
        let ret = (value - this.domain[0]) * this.scale + this.range[0];
        if (this.clamp)
            return this.clamp(ret);
        return ret;
    }
    invmap(value) {
        let dmin = util_1.amin(this.domain), dmax = util_1.amax(this.domain);
        if (value <= dmin)
            return this.scale > 0 ? this.min : this.max;
        if (value >= dmax)
            return this.scale > 0 ? this.max : this.min;
        return (value - this.range[0]) / this.scale + this.domain[0];
    }
}
exports.LinearScale = LinearScale;
class LogScale {
    constructor(domain, range, base = Math.E) {
        this.domain = domain;
        this.range = range;
        this.base = base;
        this.logBase = Math.log(base);
        this.internalScale = new LinearScale([Math.log(domain[0]) / this.logBase, Math.log(domain[1]) / this.logBase], range);
    }
    map(value) {
        if (value === 0)
            return NaN;
        return this.internalScale.map(Math.log(value) / this.logBase);
    }
    invmap(value) {
        return this.internalScale.invmap(Math.exp(value * this.logBase));
    }
}
exports.LogScale = LogScale;
class RootScale {
    constructor(domain, range, degree = 2) {
        this.domain = domain;
        this.range = range;
        this.degree = degree;
        this.internalScale = new LinearScale([Math.pow(domain[0], 1 / degree), Math.pow(domain[1], 1 / degree)], range);
    }
    map(value) {
        return this.internalScale.map(Math.pow(value, 1 / this.degree));
    }
    invmap(value) {
        return this.internalScale.invmap(Math.pow(value, this.degree));
    }
}
exports.RootScale = RootScale;
class SquareRootScale extends RootScale {
    constructor(domain, range) {
        super(domain, range, 2);
        this.domain = domain;
        this.range = range;
    }
}
exports.SquareRootScale = SquareRootScale;
class CubicRootScale extends RootScale {
    constructor(domain, range) {
        super(domain, range, 3);
        this.domain = domain;
        this.range = range;
    }
}
exports.CubicRootScale = CubicRootScale;
class EquiDepthScale {
    constructor(domain, range, level = 32) {
        this.domain = domain;
        this.range = range;
        this.level = level;
        this.bounds = [];
        this.digest = new tdigest_1.Digest();
        this.addPoints(domain); // initialize with something
    }
    addPoints(points) { this.digest.push(points.filter(util_1.positive)); }
    addPoint(point) {
        if (util_1.positive(point))
            this.digest.push(point);
    }
    computeBounds() {
        this.digest.compress();
        let n = this.level; //-1;
        this.bounds = this.digest.percentile(util_1.arange(n).map(i => ((i + 1) / n)));
    }
    getBounds() {
        if (this.bounds.length == 0) {
            this.computeBounds();
        }
        return this.bounds;
    }
    map(value) {
        if (value < this.domain[0] || value > this.domain[1])
            return NaN;
        // linear search is faster than binary search for that simple case
        // https://hannes.muehleisen.org/damon2017-simd-imprints.pdf
        let min = this.range[0];
        if (value == 0)
            return min; // shortcut
        let n = this.level - 1, w = this.range[1] - min;
        this.getBounds();
        for (let i = 0; i < n; i++)
            if (value < this.bounds[i])
                return min + w / n * i;
        return min + w;
    }
    invmap(value) {
        if (value <= this.domain[0])
            return this.range[0];
        if (value >= this.domain[1])
            return this.range[1];
        this.getBounds();
        let v = (value - this.domain[0]) * (this.level = 1) / (this.domain[1] - this.domain[0]), i = Math.floor(v), r = v - i;
        return this.bounds[i] * (1 - r) + this.bounds[i + 1] * r;
    }
}
exports.EquiDepthScale = EquiDepthScale;
class ColorScale {
    // An interpolator maps a domain value to [0, 1]
    constructor(colorRange, interpolator, outOfRangeColor) {
        this.colorRange = colorRange;
        this.interpolator = interpolator;
        this.outOfRangeColor = outOfRangeColor;
    }
    map(value) {
        if (isNaN(value) && !this.outOfRangeColor)
            return this.outOfRangeColor;
        return color_1.default.interpolate(this.colorRange[0], this.colorRange[1], this.interpolator.map(value));
    }
}
exports.ColorScale = ColorScale;
class LinearColorScale extends ColorScale {
    constructor(domain, colorRange) {
        super(colorRange, new LinearScale(domain, [0, 1]));
        this.domain = domain;
        this.colorRange = colorRange;
    }
}
exports.LinearColorScale = LinearColorScale;
class LogColorScale extends ColorScale {
    constructor(domain, colorRange, base = Math.E) {
        super(colorRange, new LogScale(domain, [0, 1], base));
        this.domain = domain;
        this.colorRange = colorRange;
        this.base = base;
    }
}
exports.LogColorScale = LogColorScale;
class SquareRootColorScale extends ColorScale {
    constructor(domain, colorRange) {
        super(colorRange, new SquareRootScale(domain, [0, 1]));
        this.domain = domain;
        this.colorRange = colorRange;
    }
}
exports.SquareRootColorScale = SquareRootColorScale;
class CubicRootColorScale extends ColorScale {
    constructor(domain, colorRange) {
        super(colorRange, new CubicRootScale(domain, [0, 1]));
        this.domain = domain;
        this.colorRange = colorRange;
    }
}
exports.CubicRootColorScale = CubicRootColorScale;
class EquiDepthColorScale extends ColorScale {
    constructor(domain, colorRange, level = 32) {
        super(colorRange, new EquiDepthScale(domain, [0, 1], level));
        this.domain = domain;
        this.colorRange = colorRange;
        this.level = level;
    }
    scale() { return this.interpolator; }
}
exports.EquiDepthColorScale = EquiDepthColorScale;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    round() {
        return new Point(Math.round(this.x), Math.round(this.y));
    }
}
exports.default = Point;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("random-seed");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(__webpack_require__(1));
const vega_extractor_1 = __importDefault(__webpack_require__(27));
const util = __importStar(__webpack_require__(0));
class Composer {
    static max(buffers, values) {
        let best = values[0];
        let bestIndex = 0;
        values.forEach((value, i) => {
            if (value > best) {
                best = value;
                bestIndex = i;
            }
        });
        return buffers[bestIndex].colorScale.map(best);
    }
    static min(buffers, values) {
        let best = values[0];
        let bestIndex = 0;
        values.forEach((value, i) => {
            if (value < best) {
                best = value;
                bestIndex = i;
            }
        });
        return buffers[bestIndex].colorScale.map(best);
    }
    static mean(buffers, values) {
        let sum = 0;
        let ret = new color_1.default(0, 0, 0, 0);
        values.forEach((value, i) => {
            sum += value;
            ret = ret.add(buffers[i].colorScale.map(value).dissolve(value));
        });
        if (sum > 0)
            ret = ret.dissolve(1 / sum); // TODO: is this correct?
        return ret;
    }
    static additiveMix(buffers, values) {
        let sum = 0;
        let ret = new color_1.default(0, 0, 0, 1);
        values.forEach((value, i) => {
            ret = ret.add(buffers[i].colorScale.map(value));
        });
        ret = ret.clamp();
        return ret;
    }
    static multiplicativeMix(buffers, values) {
        let ret = new color_1.default(1, 1, 1, 1);
        values.forEach((value, i) => {
            let color = buffers[i].colorScale.map(value);
            ret = new color_1.default(ret.r * color.r, ret.g * color.g, ret.b * color.b, ret.a * color.a);
        });
        return ret;
    }
    static none(buffers, values) {
        return color_1.default.None;
    }
    static one(buffer, value) {
        return buffer.colorScale.map(value);
    }
    static bars(buffers, values, options = { 'y.scale.domain': [0, 1], 'y.scale.type': 'linear', 'y.scale.base': 10 }) {
        let data = buffers.map((buffer, i) => {
            return { name: buffer.originalDataBuffer.name, value: values[i] };
        });
        let spec = {
            $schema: "https://vega.github.io/schema/vega-lite/v2.0.json",
            data: {
                values: data
            },
            mark: "bar",
            encoding: {
                x: {
                    field: "name",
                    type: "ordinal",
                    legend: false,
                    axis: false
                },
                color: {
                    field: "name",
                    type: "ordinal",
                    scale: {
                        domain: data.map(d => d.name),
                        range: data.map((d, i) => buffers[i].color.css())
                        // will use a fully opaque color, since we use the length encoding
                    },
                    legend: false
                },
                y: {
                    field: "value",
                    type: "quantitative",
                    scale: {
                        domain: options['y.scale.domain'],
                        type: options['y.scale.type'],
                        base: options['y.scale.base']
                    },
                    lgend: false,
                    axis: false
                }
            },
            config: {
                group: {
                    strokeWidth: 0
                }
            },
            width: options.width || 30,
            height: options.height ? options.height : 30,
            padding: 0
        };
        return vega_extractor_1.default(spec);
    }
    static punchcard(buffers, values, options = { 'z.scale.domain': [0, 1], 'z.scale.type': 'linear', 'z.scale.base': 10, factor: 8 }) {
        let n = buffers.length;
        let cols = options.cols || Math.ceil(Math.sqrt(n));
        let width = options.width || 30;
        let height = options.height || 30;
        let names = buffers.map(b => b.originalDataBuffer.name);
        let colors = buffers.map(b => (b.color || color_1.default.Blue).css());
        let factor = options.factor || 8;
        // TODO: I am really not sure why this magic number is required to
        // determine the size of full circles. It seems that this number changes
        // depending on the size of a tile and the number of circles in a tile.
        let data = buffers.map((buffer, i) => {
            return {
                name: buffer.originalDataBuffer.name,
                value: values[i],
                row: Math.floor(i / cols),
                col: i % cols,
            };
        });
        // (1, 1, 16)
        // (2, 4, 8)
        // (3, 9, 4)
        // (4, 16, 2)
        // n = 4;
        // cols = 2;
        // names = util.arange(n).map(d => d.toString());
        // colors = new Array(n).fill(Color.Blue.css());
        // data = util.arange(n).map(i => {
        //     return {
        //         name: i.toString(),
        //         value: options["z.scale.domain"][1],
        //         row: Math.floor(i / cols),
        //         col: i % cols
        //     }
        // });
        let rows = Math.ceil(n / cols);
        let spec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v2.0.json",
            data: {
                values: data
            },
            mark: "circle",
            encoding: {
                x: {
                    field: "col",
                    type: "ordinal",
                    axis: false,
                    legend: false,
                    scale: {
                        type: 'point',
                        domain: util.arange(cols),
                        padding: 0.5
                    }
                },
                y: {
                    field: "row",
                    type: "ordinal",
                    axis: false,
                    legend: false,
                    scale: {
                        type: 'point',
                        domain: util.arange(rows),
                        padding: 0.5
                    }
                },
                size: {
                    field: "value",
                    type: "quantitative",
                    scale: {
                        domain: options["z.scale.domain"],
                        type: options["z.scale.type"],
                        range: [0, Math.min(width, height) * factor]
                    },
                    legend: false
                },
                color: {
                    field: "name",
                    type: "ordinal",
                    scale: {
                        domain: names,
                        range: colors
                    },
                    legend: false
                }
            },
            autosize: "none",
            config: {
                mark: {
                    opacity: 1
                },
                group: {
                    strokeWidth: 0,
                    stroke: "transparent"
                },
            },
            width: width,
            height: height,
            padding: 0
        };
        return vega_extractor_1.default(spec);
    }
    static hatch(tile, buffers, dataValues, thickness, widthprop, colprop = false) {
        let hatchCanvas = document.createElement('canvas');
        hatchCanvas.width = tile.mask.width;
        hatchCanvas.height = tile.mask.height;
        let ctx = hatchCanvas.getContext("2d");
        ctx.drawImage(tile.mask.getCanvas(), 0, 0);
        ctx.globalCompositeOperation = "source-atop";
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        let sorted = [];
        let diag = Math.sqrt(hatchCanvas.width * hatchCanvas.width + hatchCanvas.height * hatchCanvas.height);
        let sum = 0;
        dataValues.forEach((value, i) => {
            sum += value;
            sorted.push({
                index: i,
                value: value
            });
        });
        sorted.sort(function (a, b) { return b.value - a.value; });
        let acc = 0;
        sorted.forEach(d => {
            let dataValue = d.value;
            let i = d.index;
            let buffer = buffers[i];
            ctx.save();
            ctx.translate(hatchCanvas.width / 2, hatchCanvas.height / 2);
            ctx.rotate(buffer.angle);
            ctx.strokeStyle = buffer.colorScale.map(dataValue).css();
            if (colprop) {
                //if (j==0) console.log(tile.dataValues[obj.index]+" = >"+buffers[obj.index].colorScale.map(tile.dataValues[obj.index]).css())
                ctx.strokeStyle = buffer.colorScale.map(dataValue).css();
            }
            else
                ctx.strokeStyle = color_1.default.Category10[i].css();
            if (typeof widthprop === "string" && widthprop == "none") {
                ctx.lineWidth = thickness;
            }
            else if (typeof widthprop === "string" && widthprop == "percent") {
                ctx.lineWidth = thickness * tile.dataValues.length * dataValue / sum;
            }
            else if (typeof widthprop === "number") {
                ctx.lineWidth = thickness * tile.dataValues.length * dataValue / widthprop;
            }
            acc += ctx.lineWidth / 2;
            let tx = tile.x + hatchCanvas.width / 2 - diag;
            for (let i = acc - diag - (tx % (tile.dataValues.length * thickness)); i < diag; i += tile.dataValues.length * thickness) {
                ctx.beginPath();
                ctx.moveTo(i, -diag);
                ctx.lineTo(i, diag);
                ctx.stroke();
                //ctx.fillRect(i, 0, 2, hatchCanvas.height);
            }
            acc += ctx.lineWidth / 2;
            ctx.restore();
        });
        return hatchCanvas;
    }
}
exports.default = Composer;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vega-embed");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = __webpack_require__(5);
const interp_1 = __importDefault(__webpack_require__(17));
class MCP {
    create_configuration(json) {
        return new parser_1.Configuration(json);
    }
    create_interp(conf) {
        return new interp_1.default(conf);
    }
}
exports.MCP = MCP;
;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
Original code: https://github.com/socialtables/largest-rect-in-poly/blob/master/index.js

Three modification:
1) Ported to TypeScript
2) Bumped to d3v4
3) Used Simplify-ts instead of Simplify-js

*/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const simplify_ts_1 = __webpack_require__(13);
const d3 = __importStar(__webpack_require__(2));
function squaredDist(a, b) {
    var deltax, deltay;
    deltax = b[0] - a[0];
    deltay = b[1] - a[1];
    return deltax * deltax + deltay * deltay;
}
;
function rayIntersectsSegment(p, p1, p2) {
    var a, b, mAB, mAP, ref;
    ref = (p1[1] < p2[1]) ? [p1, p2] : [p2, p1];
    a = ref[0];
    b = ref[1];
    if (p[1] === b[1] || p[1] === a[1]) {
        p[1] += Number.MIN_VALUE;
    }
    if (p[1] > b[1] || p[1] < a[1]) {
        return false;
    }
    else if (p[0] > a[0] && p[0] > b[0]) {
        return false;
    }
    else if (p[0] < a[0] && p[0] < b[0]) {
        return true;
    }
    else {
        mAB = (b[1] - a[1]) / (b[0] - a[0]);
        mAP = (p[1] - a[1]) / (p[0] - a[0]);
        return mAP > mAB;
    }
}
;
function pointInPoly(p, poly) {
    var a, b, c, i, n;
    i = -1;
    n = poly.length;
    b = poly[n - 1];
    c = 0;
    while (++i < n) {
        a = b;
        b = poly[i];
        if (rayIntersectsSegment(p, a, b)) {
            c++;
        }
    }
    return c % 2 !== 0;
}
;
function pointInSegmentBox(p, p1, q1) {
    var eps, px, py;
    eps = 1e-9;
    px = p[0];
    py = p[1];
    if (px < Math.min(p1[0], q1[0]) - eps || px > Math.max(p1[0], q1[0]) + eps || py < Math.min(p1[1], q1[1]) - eps || py > Math.max(p1[1], q1[1]) + eps) {
        return false;
    }
    return true;
}
;
function lineIntersection(p1, q1, p2, q2) {
    var cross1, cross2, denom, dx1, dx2, dy1, dy2, eps, px, py;
    eps = 1e-9;
    dx1 = p1[0] - q1[0];
    dy1 = p1[1] - q1[1];
    dx2 = p2[0] - q2[0];
    dy2 = p2[1] - q2[1];
    denom = dx1 * dy2 - dy1 * dx2;
    if (Math.abs(denom) < eps) {
        return [NaN, NaN];
    }
    cross1 = p1[0] * q1[1] - p1[1] * q1[0];
    cross2 = p2[0] * q2[1] - p2[1] * q2[0];
    px = (cross1 * dx2 - cross2 * dx1) / denom;
    py = (cross1 * dy2 - cross2 * dy1) / denom;
    return [px, py];
}
;
function segmentsIntersect(p1, q1, p2, q2) {
    let p;
    p = lineIntersection(p1, q1, p2, q2);
    if (isNaN(p[0])) {
        return false;
    }
    return pointInSegmentBox(p, p1, q1) && pointInSegmentBox(p, p2, q2);
}
;
function polyInsidePoly(polyA, polyB) {
    var aA, aB, bA, bB, iA, iB, nA, nB;
    iA = -1;
    nA = polyA.length;
    nB = polyB.length;
    bA = polyA[nA - 1];
    while (++iA < nA) {
        aA = bA;
        bA = polyA[iA];
        iB = -1;
        bB = polyB[nB - 1];
        while (++iB < nB) {
            aB = bB;
            bB = polyB[iB];
            if (segmentsIntersect(aA, bA, aB, bB)) {
                return false;
            }
        }
    }
    return pointInPoly(polyA[0], polyB);
}
;
function rotatePoint(p, alpha, origin) {
    var cosAlpha, sinAlpha, xshifted, yshifted;
    if (origin == null) {
        origin = [0, 0];
    }
    xshifted = p[0] - origin[0];
    yshifted = p[1] - origin[1];
    cosAlpha = Math.cos(alpha);
    sinAlpha = Math.sin(alpha);
    return [cosAlpha * xshifted - sinAlpha * yshifted + origin[0], sinAlpha * xshifted + cosAlpha * yshifted + origin[1]];
}
;
function rotatePoly(poly, alpha, origin) {
    var j, len, point, results;
    results = [];
    for (j = 0, len = poly.length; j < len; j++) {
        point = poly[j];
        results.push(rotatePoint(point, alpha, origin));
    }
    return results;
}
;
function intersectPoints(poly, origin, alpha) {
    var a, b, closestPointLeft, closestPointRight, eps, i, idx, minSqDistLeft, minSqDistRight, n, p, sqDist, x0, y0;
    eps = 1e-9;
    origin = [origin[0] + eps * Math.cos(alpha), origin[1] + eps * Math.sin(alpha)];
    x0 = origin[0];
    y0 = origin[1];
    let shiftedOrigin = [x0 + Math.cos(alpha), y0 + Math.sin(alpha)];
    idx = 0;
    if (Math.abs(shiftedOrigin[0] - x0) < eps) {
        idx = 1;
    }
    i = -1;
    n = poly.length;
    b = poly[n - 1];
    minSqDistLeft = Number.MAX_VALUE;
    minSqDistRight = Number.MAX_VALUE;
    closestPointLeft = null;
    closestPointRight = null;
    while (++i < n) {
        a = b;
        b = poly[i];
        p = lineIntersection(origin, shiftedOrigin, a, b);
        if ((p != null) && pointInSegmentBox(p, a, b)) {
            sqDist = squaredDist(origin, p);
            if (p[idx] < origin[idx]) {
                if (sqDist < minSqDistLeft) {
                    minSqDistLeft = sqDist;
                    closestPointLeft = p;
                }
            }
            else if (p[idx] > origin[idx]) {
                if (sqDist < minSqDistRight) {
                    minSqDistRight = sqDist;
                    closestPointRight = p;
                }
            }
        }
    }
    return [closestPointLeft, closestPointRight];
}
;
/**
 Return the largest rectangle inside the given polygon.
 @param poly Array of x, y coordinates describing a polygon, in the order in which those points should be drawn.
 @param options Object describing options, including:
 angle Specifies the rotation of the polygon. An angle of zero means that
 the longer side of the polygon (the width) will be aligned with the x axis.
 An angle of +90 and/or -90 means that the longer side of the polygon (the width)
 will be aligned with the y axis. The parameter angle can be
 - a number between -90 and +90 specifying the angle of rotation of the polygon.
 - a string which is parsed to a number
 - an array of numbers, specifying the possible rotations of the polygon
 - unspecified, which means the polygon can have any possible angle
 aspectRatio The ratio between the width and the height of the rectangle,
 i.e. width/height. The parameter aspectRatio can be
 - a number
 - a string which is parsed to a number
 - an array of numbers, specifying the possible aspectRatios of the polygon
 maxAspectRatio Maximum aspect ratio (width/height). Default is 15.
 This should be used if the aspectRatio is not provided.
 nTries The number of randomly drawn points inside the polygon which
 the algorithm explores as possible center points of the maximal rectangle.
 Default value is 20.
 minWidth The minimum width of the rectangle. Default is 0.
 minHeight The minimum height of the rectangle. Default is 0.
 tolerance The simplification tolerance factor. Should be between 0 and 1.
 Default is 0.02. Larger tolerance corresponds to more extensive simplification.
 origin The center point of the rectangle. If specified, the rectangle is
 fixed at that point, otherwise the algorithm optimizes across all possible points.
 The parameter origin can be
 - a two dimensional array specifying the x and y coordinate of the origin
 - an array of two dimensional arrays specifying the the possible center points
 of the maximal rectangle.
 @return [rect, area, events] Array of result data, including:
 rect Object describing the result rectangle, including:
 cx Center X coordinate of the result rectangle
 cy Center Y coordinate of the result rectangle
 width Width of the result rectangle
 height Height of the result rectangle
 angle Angle of the rectangle's axis, in degrees
 area Total area of the result rectangle
 events Array of events that occurred while finding the rectangle
 */
function largestRectInPoly(poly, options = {}) {
    let aRatio, aRatios, angle, angleRad, angleStep, angles, area, aspectRatioStep, aspectRatios, bBox, boxHeight, boxWidth, centroid, events, height, i, insidePoly, j, k, l, left, len, len1, len2, len3, m, maxArea, maxAspectRatio, maxHeight, maxRect, maxWidth, maxx, maxy, minAspectRatio, minSqDistH, minSqDistW, minx, miny, modifOrigins, origOrigin, origin, origins, p, p1H, p1W, p2H, p2W, rectPoly, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, right, rndPoint, rndX, rndY, tempPoly, tolerance, width, widthStep, x0, y0;
    if (poly.length < 3) {
        return null;
    }
    // Copy polygon and add initial point to the end of it
    events = [];
    aspectRatioStep = 0.5;
    angleStep = 5;
    if (options == null) {
        options = {};
    }
    if (options.maxAspectRatio == null) {
        options.maxAspectRatio = 15;
    }
    if (options.minWidth == null) {
        options.minWidth = 0;
    }
    if (options.minHeight == null) {
        options.minHeight = 0;
    }
    if (options.tolerance == null) {
        options.tolerance = 0.02;
    }
    if (options.nTries == null) {
        options.nTries = 20;
    }
    if (options.angle != null) {
        if (options.angle instanceof Array) {
            angles = options.angle;
        }
        else if (typeof options.angle === 'number') {
            angles = [options.angle];
        }
        else if (typeof options.angle === 'string' && !isNaN(options.angle)) {
            angles = [Number(options.angle)];
        }
    }
    if (angles == null) {
        angles = d3.range(-90, 90 + angleStep, angleStep);
    }
    if (options.aspectRatio != null) {
        if (options.aspectRatio instanceof Array) {
            aspectRatios = options.aspectRatio;
        }
        else if (typeof options.aspectRatio === 'number') {
            aspectRatios = [options.aspectRatio];
        }
        else if (typeof options.aspectRatio === 'string' && !isNaN(options.aspectRatio)) {
            aspectRatios = [Number(options.aspectRatio)];
        }
    }
    if (options.origin != null) {
        if (options.origin instanceof Array) {
            if (options.origin[0] instanceof Array) {
                origins = options.origin;
            }
            else {
                origins = [options.origin];
            }
        }
    }
    area = Math.abs(d3.polygonArea(poly));
    if (area === 0) {
        return null;
    }
    ref = d3.extent(poly, function (d) {
        return d[0];
    });
    minx = ref[0];
    maxx = ref[1];
    ref1 = d3.extent(poly, function (d) {
        return d[1];
    });
    miny = ref1[0];
    maxy = ref1[1];
    tolerance = Math.min(maxx - minx, maxy - miny) * options.tolerance;
    tempPoly = (function () {
        var j, len, results;
        results = [];
        for (j = 0, len = poly.length; j < len; j++) {
            p = poly[j];
            results.push({
                x: p[0],
                y: p[1]
            });
        }
        return results;
    })();
    if (tolerance > 0) {
        tempPoly = simplify_ts_1.Simplify(tempPoly, tolerance);
        poly = (function () {
            var j, len, results;
            results = [];
            for (j = 0, len = tempPoly.length; j < len; j++) {
                p = tempPoly[j];
                results.push([p.x, p.y]);
            }
            return results;
        })();
    }
    if (options.vdebug) {
        events.push({
            type: 'simplify',
            poly: poly
        });
    }
    ref2 = d3.extent(poly, function (d) {
        return d[0];
    }), minx = ref2[0], maxx = ref2[1];
    ref3 = d3.extent(poly, function (d) {
        return d[1];
    }), miny = ref3[0], maxy = ref3[1];
    bBox = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];
    ref4 = [maxx - minx, maxy - miny], boxWidth = ref4[0], boxHeight = ref4[1];
    widthStep = Math.min(boxWidth, boxHeight) / 50;
    if (origins == null) {
        origins = [];
        centroid = d3.polygonCentroid(poly);
        if (pointInPoly(centroid, poly)) {
            origins.push(centroid);
        }
        while (origins.length < options.nTries) {
            rndX = Math.random() * boxWidth + minx;
            rndY = Math.random() * boxHeight + miny;
            rndPoint = [rndX, rndY];
            if (pointInPoly(rndPoint, poly)) {
                origins.push(rndPoint);
            }
        }
    }
    if (options.vdebug) {
        events.push({
            type: 'origins',
            points: origins
        });
    }
    maxArea = 0;
    maxRect = null;
    for (j = 0, len = angles.length; j < len; j++) {
        angle = angles[j];
        angleRad = -angle * Math.PI / 180;
        if (options.vdebug) {
            events.push({
                type: 'angle',
                angle: angle
            });
        }
        for (i = k = 0, len1 = origins.length; k < len1; i = ++k) {
            origOrigin = origins[i];
            ref5 = intersectPoints(poly, origOrigin, angleRad), p1W = ref5[0], p2W = ref5[1];
            ref6 = intersectPoints(poly, origOrigin, angleRad + Math.PI / 2), p1H = ref6[0], p2H = ref6[1];
            modifOrigins = [];
            if ((p1W != null) && (p2W != null)) {
                modifOrigins.push([(p1W[0] + p2W[0]) / 2, (p1W[1] + p2W[1]) / 2]);
            }
            if ((p1H != null) && (p2H != null)) {
                modifOrigins.push([(p1H[0] + p2H[0]) / 2, (p1H[1] + p2H[1]) / 2]);
            }
            if (options.vdebug) {
                events.push({
                    type: 'modifOrigin',
                    idx: i,
                    p1W: p1W,
                    p2W: p2W,
                    p1H: p1H,
                    p2H: p2H,
                    modifOrigins: modifOrigins
                });
            }
            for (l = 0, len2 = modifOrigins.length; l < len2; l++) {
                origin = modifOrigins[l];
                if (options.vdebug) {
                    events.push({
                        type: 'origin',
                        cx: origin[0],
                        cy: origin[1]
                    });
                }
                ref7 = intersectPoints(poly, origin, angleRad), p1W = ref7[0], p2W = ref7[1];
                if (p1W === null || p2W === null) {
                    continue;
                }
                minSqDistW = Math.min(squaredDist(origin, p1W), squaredDist(origin, p2W));
                maxWidth = 2 * Math.sqrt(minSqDistW);
                ref8 = intersectPoints(poly, origin, angleRad + Math.PI / 2), p1H = ref8[0], p2H = ref8[1];
                if (p1H === null || p2H === null) {
                    continue;
                }
                minSqDistH = Math.min(squaredDist(origin, p1H), squaredDist(origin, p2H));
                maxHeight = 2 * Math.sqrt(minSqDistH);
                if (maxWidth * maxHeight < maxArea) {
                    continue;
                }
                if (aspectRatios != null) {
                    aRatios = aspectRatios;
                }
                else {
                    minAspectRatio = Math.max(1, options.minWidth / maxHeight, maxArea / (maxHeight * maxHeight));
                    maxAspectRatio = Math.min(options.maxAspectRatio, maxWidth / options.minHeight, (maxWidth * maxWidth) / maxArea);
                    aRatios = d3.range(minAspectRatio, maxAspectRatio + aspectRatioStep, aspectRatioStep);
                }
                for (m = 0, len3 = aRatios.length; m < len3; m++) {
                    aRatio = aRatios[m];
                    left = Math.max(options.minWidth, Math.sqrt(maxArea * aRatio));
                    right = Math.min(maxWidth, maxHeight * aRatio);
                    if (right * maxHeight < maxArea) {
                        continue;
                    }
                    if ((right - left) >= widthStep) {
                        if (options.vdebug) {
                            events.push({
                                type: 'aRatio',
                                aRatio: aRatio
                            });
                        }
                    }
                    while ((right - left) >= widthStep) {
                        width = (left + right) / 2;
                        height = width / aRatio;
                        x0 = origin[0], y0 = origin[1];
                        rectPoly = [[x0 - width / 2, y0 - height / 2], [x0 + width / 2, y0 - height / 2], [x0 + width / 2, y0 + height / 2], [x0 - width / 2, y0 + height / 2]];
                        rectPoly = rotatePoly(rectPoly, angleRad, origin);
                        if (polyInsidePoly(rectPoly, poly)) {
                            insidePoly = true;
                            maxArea = width * height;
                            maxRect = {
                                cx: x0,
                                cy: y0,
                                width: width,
                                height: height,
                                angle: angle
                            };
                            left = width;
                        }
                        else {
                            insidePoly = false;
                            right = width;
                        }
                        if (options.vdebug) {
                            events.push({
                                type: 'rectangle',
                                cx: x0,
                                cy: y0,
                                width: width,
                                height: height,
                                areaFraction: (width * height) / area,
                                angle: angle,
                                insidePoly: insidePoly
                            });
                        }
                    }
                }
            }
        }
    }
    return [maxRect, maxArea, events];
}
exports.default = largestRectInPoly;
;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("simplify-ts");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(__webpack_require__(0));
const gaussian_blur_1 = __importDefault(__webpack_require__(15));
const d3 = __importStar(__webpack_require__(16));
class DataBuffer {
    constructor(name, width, height, values) {
        this.name = name;
        this.width = width;
        this.height = height;
        // = util.create2D<number>(width, height, 0)) {
        let buffer = new ArrayBuffer(width * height * 4); // sizeof float32
        this.values = Array(height);
        for (let i = 0; i < height; i++) {
            this.values[i] = new Float32Array(buffer, i * width * 4, width);
            if (values)
                this.values[i].set(values[i]);
        }
    }
    buffer() { return this.values[0].buffer; }
    linearize() {
        // return Array.prototype.concat.apply(this.values[0],
        //                                     this.values.slice(1));
        //return Array.prototype.slice.call(new Float32Array(this.values[0].buffer));
        // Fool the type system of TS that prevents returning the Float32Array directly
        return new Float32Array(this.buffer());
    }
    min() {
        let mymin = util.amin;
        return util.amin(this.linearize());
    }
    max() {
        let mymax = util.amax;
        return util.amax(this.linearize());
    }
    rescale(scale) {
        let arr = this.linearize();
        for (let i = 0; i < arr.length; i++)
            arr[i] *= scale;
    }
    blur(radius = 3) {
        if (radius == 0)
            return this;
        // Linearize the array
        let source = this.linearize(), dest = new DataBuffer(this.name, this.width, this.height), target = new Float32Array(dest.buffer());
        gaussian_blur_1.default(source, target, this.width, this.height, radius);
        return dest;
    }
    contours(thresholds, blur = 1) {
        let contours = d3.contours().size([this.width, this.height]);
        var values = this.linearize();
        if (blur != 0) {
            let target = new Float32Array(this.width * this.height);
            gaussian_blur_1.default(values, target, this.width, this.height, blur);
            values = target;
        }
        if (thresholds != undefined)
            contours.thresholds(thresholds);
        return contours(values);
    }
    makeContour(contourNumber = 12) {
        if (contourNumber == 0)
            return this;
        let mini = this.min(), maxi = this.max(), bandsize = (maxi - mini) / contourNumber, ids = new DataBuffer(this.name, this.width, this.height);
        // compute ids first
        for (let y = 0; y < this.height; y++) {
            let src = this.values[y], dst = ids.values[y];
            for (let x = 0; x < this.width; x++)
                dst[x] = Math.floor((src[x] - mini) / bandsize);
        }
        let ndb = new DataBuffer(this.name, this.width, this.height);
        for (let y = 0; y < this.height - 1; y++) {
            let dst = ndb.values[y], src = this.values[y], ids0 = ids.values[y], ids1 = ids.values[y + 1];
            for (let x = 0; x < this.width - 1; x++) {
                if (ids0[x] != ids1[x] || ids0[x] != ids0[x + 1])
                    dst[x] = src[x];
            }
        }
        return ndb;
    }
}
exports.default = DataBuffer;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// from http://blog.ivank.net/fastest-gaussian-blur.html
Object.defineProperty(exports, "__esModule", { value: true });
function boxesForGauss(sigma, n) {
    let wIdeal = Math.sqrt((12 * sigma * sigma / n) + 1); // Ideal averaging filter width
    var wl = Math.floor(wIdeal);
    if (wl % 2 == 0)
        wl--;
    let wu = wl + 2;
    let mIdeal = (12 * sigma * sigma - n * wl * wl - 4 * n * wl - 3 * n) / (-4 * wl - 4);
    let m = Math.round(mIdeal);
    // var sigmaActual = Math.sqrt( (m*wl*wl + (n-m)*wu*wu - n)/12 );
    let sizes = [];
    for (var i = 0; i < n; i++)
        sizes.push(i < m ? wl : wu);
    return sizes;
}
function gaussian_blur(scl, tcl, w, h, r) {
    var bxs = boxesForGauss(r, 3);
    boxBlur_4(scl, tcl, w, h, (bxs[0] - 1) / 2);
    boxBlur_4(tcl, scl, w, h, (bxs[1] - 1) / 2);
    boxBlur_4(scl, tcl, w, h, (bxs[2] - 1) / 2);
}
exports.default = gaussian_blur;
function boxBlur_4(scl, tcl, w, h, r) {
    for (var i = 0; i < scl.length; i++)
        tcl[i] = scl[i];
    boxBlurH_4(tcl, scl, w, h, r);
    boxBlurT_4(scl, tcl, w, h, r);
}
function boxBlurH_4(scl, tcl, w, h, r) {
    var iarr = 1 / (r + r + 1);
    for (var i = 0; i < h; i++) {
        var ti = i * w, li = ti, ri = ti + r;
        let fv = scl[ti], lv = scl[ti + w - 1], val = (r + 1) * fv;
        for (var j = 0; j < r; j++)
            val += scl[ti + j];
        for (var j = 0; j <= r; j++) {
            val += scl[ri++] - fv;
            tcl[ti++] = Math.round(val * iarr);
        }
        for (var j = r + 1; j < w - r; j++) {
            val += scl[ri++] - scl[li++];
            tcl[ti++] = Math.round(val * iarr);
        }
        for (var j = w - r; j < w; j++) {
            val += lv - scl[li++];
            tcl[ti++] = Math.round(val * iarr);
        }
    }
}
function boxBlurT_4(scl, tcl, w, h, r) {
    var iarr = 1 / (r + r + 1);
    for (var i = 0; i < w; i++) {
        var ti = i, li = ti, ri = ti + r * w;
        let fv = scl[ti], lv = scl[ti + w * (h - 1)], val = (r + 1) * fv;
        for (var j = 0; j < r; j++)
            val += scl[ti + j * w];
        for (var j = 0; j <= r; j++) {
            val += scl[ri] - fv;
            tcl[ti] = Math.round(val * iarr);
            ri += w;
            ti += w;
        }
        for (var j = r + 1; j < h - r; j++) {
            val += scl[ri] - scl[li];
            tcl[ti] = Math.round(val * iarr);
            li += w;
            ri += w;
            ti += w;
        }
        for (var j = h - r; j < h; j++) {
            val += lv - scl[li];
            tcl[ti] = Math.round(val * iarr);
            li += w;
            ti += w;
        }
    }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("d3-contour");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Interpreter from a parsed specification
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Parser = __importStar(__webpack_require__(5));
const derived_buffer_1 = __importDefault(__webpack_require__(18));
const canvas_renderer_1 = __importDefault(__webpack_require__(20));
const image_1 = __importDefault(__webpack_require__(21));
const Tiling = __importStar(__webpack_require__(23));
const tile_1 = __webpack_require__(3);
const color_1 = __importDefault(__webpack_require__(1));
const composer_1 = __importDefault(__webpack_require__(9));
const Scale = __importStar(__webpack_require__(6));
const util = __importStar(__webpack_require__(0));
const mask_1 = __importDefault(__webpack_require__(4));
const Weaving = __importStar(__webpack_require__(28));
const legend_1 = __importDefault(__webpack_require__(29));
const d3 = __importStar(__webpack_require__(2));
class Interpreter {
    constructor(configuration) {
        this.configuration = configuration;
        this.n = 0;
        this.sourceBuffers = [];
        this.dataBuffers = [];
        this.derivedBuffers = [];
        this.blurredBuffers = [];
        this.image = [];
        this.tiles = [];
        this.tileAggregation = tile_1.TileAggregation.Mean;
        this.strokeCanvas = false;
        this.backgroundStroke = "grey";
        this.fillCanvas = true;
        this.colors = color_1.default.Category10;
        this.composer = composer_1.default.none;
        this.masks = [];
        this.blur = 0;
        this.scale = new Scale.LinearScale([0, 1], [0, 1]);
        // d3 name of scale, used for legend
        this.d3scale = "linear";
        this.d3base = 10;
        if (!configuration.validate())
            throw "Invalid configuration";
        this.description = configuration.description;
        this.width = configuration.width;
        this.height = configuration.height;
        if (configuration.background)
            this.background = configuration.background;
        this.bufferNames = configuration.bufferNames;
        this.n = this.bufferNames.length;
        this.sourceBuffers = configuration.getBuffers();
        this.dataBuffers = this.sourceBuffers;
        this.labels = configuration.getLabels();
        let colormap = configuration.getColors();
        if (colormap.length >= this.bufferNames.length)
            this.colors = colormap.map((name) => color_1.default.byName(name));
        else if (colormap.length != 0) {
            console.log('  WARNING:Not enough colors in colormap, ignored');
        }
        this.rebin = configuration.rebin;
        if (configuration.compose === undefined)
            this.compose = new Parser.ComposeSpec();
        else
            this.compose = configuration.compose;
        if (configuration.rescale)
            this.rescale = configuration.rescale;
        else
            this.rescale = new Parser.RescaleSpec();
        if (configuration.blur)
            this.blur = configuration.blur;
        if (configuration.contour === undefined)
            this.contour = new Parser.ContourSpec();
        else
            this.contour = configuration.contour;
        this.geo = configuration.getGeo();
        this.legend = configuration.legend;
    }
    interpret(context = {}) {
        this.computeDerivedBuffers(context);
        this.computeRebin(context);
        this.computeCompose(context);
        for (let tile of this.tiles) {
            tile.dataValues = tile.aggregate(this.dataBuffers, this.tileAggregation);
        }
        let maxCount = util.amax(this.tiles.map(tile => tile.maxValue()));
        // TODO test if scales are per-buffer or shared, for now, we'll make one per buffer
        if (this.rescale.type === "linear")
            this.scale = new Scale.LinearScale([0, maxCount], [0, 1]);
        else if (this.rescale.type === "sqrt")
            this.scale = new Scale.SquareRootScale([0, maxCount], [0, 1]);
        else if (this.rescale.type === "cbrt")
            this.scale = new Scale.CubicRootScale([0, maxCount], [0, 1]);
        else if (this.rescale.type === "log")
            this.scale = new Scale.LogScale([1, maxCount], [0, 1]);
        else if (this.rescale.type === "equidepth") {
            let equidepth = new Scale.EquiDepthScale([1, maxCount], [0, 1], this.rescale.level);
            for (let tile of this.tiles)
                equidepth.addPoints(tile.dataValues);
            equidepth.computeBounds();
            this.scale = equidepth;
        }
        this.derivedBuffers = this.dataBuffers.map((dataBuffer, i) => {
            let derivedBuffer = new derived_buffer_1.default(dataBuffer);
            derivedBuffer.colorScale = new Scale.ColorScale([this.colors[i].totTransparent(), this.colors[i]], this.scale); //
            derivedBuffer.color = this.colors[i];
            if (this.masks.length > i)
                derivedBuffer.mask = this.masks[i];
            return derivedBuffer;
        });
    }
    computeDerivedBuffers(context = {}) {
        if (this.blur > 0) {
            let newbuffers = this.dataBuffers.map(dataBuffer => dataBuffer.blur(this.blur));
            this.dataBuffers = newbuffers;
        }
    }
    computeRebin(context = {}) {
        var tiles = this.tiles;
        if (this.rebin === undefined ||
            this.rebin.type === undefined ||
            this.rebin.type == "none") {
            console.log('  Pixel rebin');
            tiles = Tiling.pixelTiling(this.width, this.height);
        }
        else if (this.rebin.type == "square") {
            let size = this.rebin.size || 10;
            console.log('  Square rebin size=' + size);
            tiles = Tiling.rectangularTiling(this.width, this.height, size, size);
        }
        else if (this.rebin.type == "rect") {
            let width = this.rebin.width || 10, height = this.rebin.height || 10;
            console.log('  Square rebin w=' + width + ' h=' + height);
            tiles = Tiling.rectangularTiling(this.width, this.height, width, height);
        }
        else if (this.rebin.type == "topojson") {
            let url = this.rebin.url, topojson = this.rebin.topojson, feature = this.rebin.feature || null; //CHECK
            console.log('  topojson rebin url=' + url
                + ' feature=' + feature);
            // TODO get the projection, transform, clip, etc.
            if (!topojson.objects[feature] ||
                !topojson.objects[feature].geometries ||
                !Array.isArray(topojson.objects[feature].geometries) ||
                topojson.objects[feature].geometries.length == 0) {
                console.log("  ERROR: no correct array named 'geometries' in the specified feature(" + feature + "). Is it really topojson or did you specify wrong feature name?");
            }
            //[jdf] for now, ignore min/maxfeature
            // remove unnecessary features like far islands ...
            // if (this.rebin.maxfeature != undefined && this.rebin.maxfeature > 0)
            //   topojson.objects[feature].geometries.splice(this.rebin.maxfeature,
            //                                               topojson.objects[feature].geometries.length-this.rebin.maxfeature);
            // if (this.rebin.minfeature != undefined && this.rebin.minfeature>0)
            //   topojson.objects[feature].geometries.splice(0, this.rebin.minfeature);
            let projection = this.geo.proj4 || this.geo.projection;
            tiles = Tiling.topojsonTiling(this.width, this.height, topojson, topojson.objects[feature], projection, this.geo.latitudes, this.geo.longitudes, this.rebin.minfeature == -1);
        }
        else if (this.rebin.type == "voronoi") {
            if (this.rebin.points) {
                let points = this.rebin.points;
                console.log('  voronoi rebin sites=' + points);
                tiles = Tiling.voronoiTiling(this.width, this.height, 0, points);
            }
            else {
                let sites = this.rebin.size || 10;
                tiles = Tiling.voronoiTiling(this.width, this.height, sites);
            }
        }
        if (this.rebin != undefined && this.rebin.stroke)
            this.maskStroke = this.rebin.stroke;
        this.tiles = tiles;
    }
    computeCompose(context = {}) {
        if (this.compose.mix === "max")
            this.composer = composer_1.default.max;
        else if (this.compose.mix === "mean")
            this.composer = composer_1.default.mean;
        else if (this.compose.mix === "min")
            this.composer = composer_1.default.min;
        else if (this.compose.mix === "blend") {
            if (this.compose.mixing === "multicative")
                this.composer = composer_1.default.multiplicativeMix;
            else
                this.composer = composer_1.default.additiveMix;
        }
        else if (this.compose.mix === "weavingrandom")
            this.masks = Weaving.randomMasks(this.n, this.compose.size || 8, this.width, this.height);
        else if (this.compose.mix === "weavingsquare")
            this.masks = Weaving.squareMasks(this.n, this.compose.size || 8, this.width, this.height);
        else if (this.compose.mix === "weavinghex")
            this.masks = Weaving.hexMasks(this.n, this.compose.size || 8, this.width, this.height);
        else if (this.compose.mix === "weavingtri")
            this.masks = Weaving.triangleMasks(this.n, this.compose.size || 8, this.width, this.height);
    }
    setup(id) {
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        canvas.width = this.width;
        canvas.height = this.height;
        if (this.background != undefined)
            canvas.style.backgroundColor = this.background;
        if (this.description != undefined)
            canvas.setAttribute("title", this.description);
    }
    render(id) {
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        let promises = [];
        if (this.compose.mix === "separate") {
            this.image = this.derivedBuffers.map((b) => new image_1.default(this.width, this.height));
            for (let tile of this.tiles) {
                //let color = this.composer(this.derivedBuffers, tile.dataValues); // ???
                this.derivedBuffers.forEach((derivedBuffer, i) => {
                    let color = composer_1.default.one(derivedBuffer, tile.dataValues[i]);
                    this.image[i].render(color, tile);
                });
            }
        }
        else {
            this.image = [new image_1.default(this.width, this.height)];
        }
        // Need the tiles to compute dot density plots
        if (this.compose.mix === "dotdensity") {
            // create one mask per databuffer
            let masks = Array(this.derivedBuffers.length);
            for (let i = 0; i < this.derivedBuffers.length; i++) {
                masks[i] = new mask_1.default(this.width, this.height, 0);
            }
            let rowcounts = this.tiles.map(tile => tile.rowcounts());
            let areas = rowcounts.map(rc => rc[rc.length - 1]);
            let biggest = util.amax(areas);
            let densities = this.tiles.map((tile, i) => {
                let area = areas[i];
                return area == 0 ? 0 : tile.sumValue() / (area - 1);
            });
            let maxDensity = util.amax(densities);
            let rawMask = new Uint8Array(biggest);
            this.tiles.forEach(function (tile, k) {
                // create a local mask to store all the values together before dispathing them in every mask for every databuffer
                let buffer = new ArrayBuffer(tile.mask.width * tile.mask.height);
                let mask = Array(tile.mask.height);
                for (let j = 0; j < tile.mask.height; j++) {
                    mask[j] = new Uint8ClampedArray(buffer, j * tile.mask.width, tile.mask.width);
                    mask[j].set(tile.mask.mask[j]);
                }
                // proportion and suming
                let acc = 0;
                let pixCounts = tile.dataValues.map(function (v) { acc += v / maxDensity; return acc; });
                // for every buffer we want to distribute a given number of points in its mask.
                // to do so we create a buffer of values to distriibute among the buffer masks.
                // values 1+2 will fall where the mask of buffer#1 should display something.
                // values 2+2 will fall where the mask of buffer#2 should display something, etc.
                // values 0 and 1 already lies in the masks and mean the mask is filled or not.
                // in the end mask can only display something where there was a 1 before.
                let prev = 0;
                pixCounts.forEach(function (pc, j) {
                    rawMask.fill(j + 1, prev, Math.round(pc));
                    prev = Math.floor(pc);
                });
                // finish with special values that will fall in no buffer in the end
                rawMask.fill(0, prev, areas[k]);
                // shuffle
                for (let i = areas[k] - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [rawMask[i], rawMask[j]] = [rawMask[j], rawMask[i]];
                }
                // dispatch the values in the straight array toward the common mask (only where there are 1)
                acc = 0;
                for (let j = 0; j < mask.length; j++) {
                    for (let i = 0, w = mask[j].length; i < w; i++) {
                        if (mask[j][i] > 0) {
                            mask[j][i] = rawMask[acc++];
                        }
                    }
                }
                // dispatch the values in the common mask toward every mask of every buffer
                //debug => display the mask
                //let toto= document.createElement('canvas');
                //toto.width  = tile.mask.width;
                //toto.height = tile.mask.height;
                //let ctx = toto!.getContext("2d")!;
                //let imageData = ctx.getImageData(0, 0, tile.mask.width, tile.mask.height);
                //var i = 0;
                for (let r = 0; r < mask.length; r++) {
                    let row = mask[r];
                    for (let c = 0; c < row.length; c++) {
                        if (row[c] > 0) {
                            //imageData.data[i+0] = 0;
                            //imageData.data[i+1] = 0;
                            //imageData.data[i+2] = row[c]*255/tile.dataValues.length;
                            //imageData.data[i+3] = 255;
                            masks[row[c] - 1].mask[r + tile.y][c + tile.x] = 1;
                        }
                        //i += 4;
                    }
                }
                //ctx.putImageData(imageData, 0, 0);
                //var body = document.getElementsByTagName('body')[0]
                //body.appendChild(toto);
            });
            for (let tile of this.tiles) {
                this.derivedBuffers.forEach((derivedBuffer, i) => {
                    let color = derivedBuffer.colorScale.map(tile.dataValues[i]);
                    this.image[0].render(color, tile, masks[i]);
                });
            }
        }
        if (this.composer != composer_1.default.none) {
            for (let tile of this.tiles) {
                let color = this.composer(this.derivedBuffers, tile.dataValues);
                this.image[0].render(color, tile);
            }
        }
        else if (this.masks.length > 0) {
            for (let tile of this.tiles) {
                this.derivedBuffers.forEach((derivedBuffer, i) => {
                    let color = derivedBuffer.colorScale.map(tile.dataValues[i]);
                    this.image[0].render(color, tile, derivedBuffer.mask);
                });
            }
        }
        else if (this.compose.mix === "propline") {
            for (let tile of this.tiles) {
                let hatch = composer_1.default.hatch(tile, this.derivedBuffers, tile.dataValues, this.compose.size, this.compose.widthprop, this.compose.colprop);
                this.image[0].render(hatch, tile.center);
            }
        }
        else if (this.compose.mix === "hatching") {
            let maxCount = util.amax(this.tiles.map(tile => tile.maxValue()));
            this.derivedBuffers.forEach((derivedBuffer, i) => {
                // Ugly side effect, should pass dataValues to Composer.hatch instead
                derivedBuffer.angle = Math.PI * i / (2 * this.derivedBuffers.length);
            });
            for (let tile of this.tiles) {
                let hatch;
                if (typeof this.compose.widthprop === "number")
                    hatch = composer_1.default.hatch(tile, this.derivedBuffers, tile.dataValues, this.compose.size, this.compose.widthprop * maxCount, this.compose.colprop);
                else
                    hatch = composer_1.default.hatch(tile, this.derivedBuffers, tile.dataValues, this.compose.size, this.compose.widthprop, this.compose.colprop);
                this.image[0].render(hatch, tile.center);
            }
        }
        else if (this.compose.mix === "glyph") {
            let maxCount = util.amax(this.tiles.map(tile => tile.maxValue()));
            let glyphSpec = this.compose.glyphSpec;
            let d3scale, d3base = 1;
            if (this.scale instanceof Scale.LinearScale) {
                d3scale = 'linear';
            }
            else if (this.scale instanceof Scale.LogScale) {
                d3scale = 'log';
                d3base = this.scale.base;
            }
            else {
                throw 'failed to convert a scale to a d3 scale. Please add a specification';
            }
            this.d3base = d3base;
            this.d3scale = d3scale;
            if (glyphSpec.template === "bars") {
                let width = glyphSpec.width; // tile.mask.width;
                let height = glyphSpec.height; // tile.mask.height;
                for (let tile of this.tiles) {
                    if (tile.mask.width < width
                        || tile.mask.height < height)
                        continue;
                    let promise = composer_1.default.bars(this.derivedBuffers, tile.dataValues, {
                        width: glyphSpec.width,
                        height: glyphSpec.height,
                        'y.scale.domain': this.scale.domain,
                        'y.scale.type': d3scale,
                        'y.scale.base': d3base
                    }).then((vegaCanvas) => {
                        let rect = tile.getRectAtCenter();
                        if (!rect || rect.width() < width || rect.height() < height)
                            return;
                        this.image[0].render(vegaCanvas, rect.center(), {
                            width: width,
                            height: height
                        });
                    });
                    promises.push(promise);
                }
            }
            else if (glyphSpec.template === "punchcard") {
                for (let tile of this.tiles) {
                    let width = glyphSpec.width; // tile.mask.width;
                    let height = glyphSpec.height; // tile.mask.height;
                    // console.log('mask', width, height);
                    let promise = composer_1.default.punchcard(this.derivedBuffers, tile.dataValues, {
                        width: width,
                        height: height,
                        'z.scale.domain': this.scale.domain,
                        'z.scale.type': d3scale,
                        'z.scale.base': d3base,
                        cols: Math.ceil(Math.sqrt(this.derivedBuffers.length)),
                        factor: glyphSpec.factor
                    }).then((vegaCanvas) => {
                        // console.log('canvas', vegaCanvas.width, vegaCanvas.height);
                        let rect = tile.getRectAtCenter();
                        if (!rect || rect.width() < width || rect.height() < height)
                            return;
                        this.image[0].render(vegaCanvas, rect.center(), {
                            width: width,
                            height: height,
                        });
                    });
                    promises.push(promise);
                }
            }
        }
        else
            console.log('No composition');
        let render = () => {
            let options = {};
            if (this.blur != undefined)
                options["blur"] = this.blur;
            let ctx = canvas_renderer_1.default.renderAll(this.image, id, this.compose.select, options);
            if (this.contour.stroke > 0) {
                // Assume all the scales are shared between derived buffers
                let path = d3.geoPath(null, ctx), thresholds = this.derivedBuffers[0].thresholds(this.contour.stroke);
                ctx.strokeStyle = 'black';
                let minStretch = Infinity;
                this.derivedBuffers.forEach((derivedBuffer, k) => {
                    let loop0 = derivedBuffer.originalDataBuffer.max();
                    this.blurredBuffers[k] = derivedBuffer.blur(this.contour.blur);
                    var loop1 = this.blurredBuffers[k].originalDataBuffer.max();
                    minStretch = Math.min(minStretch, loop0 / loop1);
                });
                //let scale = minStretch == 0 ? 0 :  minStretch;
                this.blurredBuffers.forEach((blurredBuffer, k) => {
                    blurredBuffer.originalDataBuffer.rescale(minStretch);
                });
                this.blurredBuffers.forEach((blurredBuffer, k) => {
                    let locthresholds = blurredBuffer.thresholds(this.contour.stroke);
                    let geometries = blurredBuffer.contours(locthresholds, this.contour.blur), colors = locthresholds.map(v => blurredBuffer.colorScale.colorRange[1]);
                    if (this.contour.colProp)
                        colors = thresholds.map(v => blurredBuffer.colorScale.map(v));
                    geometries.forEach((geo, k) => {
                        ctx.beginPath();
                        path(geo);
                        ctx.strokeStyle = colors[k].hex();
                        ctx.lineWidth = this.contour.lineWidth;
                        ctx.stroke();
                    });
                });
            }
            if (this.maskStroke)
                for (let tile of this.tiles)
                    canvas_renderer_1.default.strokeVectorMask(tile.mask, id, { color: this.maskStroke });
        };
        if (promises.length > 0)
            Promise.all(promises).then(render);
        else
            render();
    }
    renderLegend(id) {
        legend_1.default(id, this);
    }
}
exports.default = Interpreter;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(__webpack_require__(1));
const util = __importStar(__webpack_require__(0));
const Scale = __importStar(__webpack_require__(6));
class DerivedBuffer {
    constructor(originalDataBuffer) {
        this.originalDataBuffer = originalDataBuffer;
        this.colorScale = new Scale.LinearColorScale([0, 1], [color_1.default.White, color_1.default.Black]);
    }
    thresholds(n) {
        if (n <= 0)
            return [];
        let scaleTrait = this.colorScale.interpolator;
        return util.arange(scaleTrait.range[0], scaleTrait.range[1], (scaleTrait.range[1] - scaleTrait.range[0]) / (n + 2))
            .slice(1, n + 1)
            .map(v => scaleTrait.invmap(v));
    }
    contours(thresholds, blur = 3) {
        return this.originalDataBuffer.contours(thresholds, blur);
    }
    blur(blur = 3) {
        let blurred = this.originalDataBuffer.blur(blur);
        let derivedBlurred = new DerivedBuffer(blurred);
        derivedBlurred.mask = this.mask;
        derivedBlurred.colorScale = this.colorScale;
        derivedBlurred.color = this.color;
        derivedBlurred.angle = this.angle;
        return derivedBlurred;
    }
}
exports.default = DerivedBuffer;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("tdigest");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlendingMode;
(function (BlendingMode) {
    BlendingMode[BlendingMode["Normal"] = 0] = "Normal";
    BlendingMode[BlendingMode["Alpha"] = 1] = "Alpha";
})(BlendingMode = exports.BlendingMode || (exports.BlendingMode = {}));
class CanvasRenderer {
    static renderAll(images, canvas, select, options = {}) {
        if (images.length == 1)
            return CanvasRenderer.render(images[0], canvas, options);
        else if (select && select < images.length)
            return CanvasRenderer.render(images[select], canvas, options);
        else
            return CanvasRenderer.renderMultiples(images, canvas, options);
    }
    static render(image, id, options = {}) {
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        // After somthing drawn, changing the dimension of a canvas seems to reset all pixels.
        // For blending, set options.noResetDims to true.
        if (!options.noResetDims) {
            canvas.width = image.width;
            canvas.height = image.height;
        }
        let ctx = canvas.getContext('2d');
        if (!options.noResetDims) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (image.imageCanvas) {
            ctx.drawImage(image.imageCanvas, 0, 0);
        }
        else {
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            if (!options.blendingMode ||
                options.blendingMode === BlendingMode.Normal) {
                this.renderToImageData(image, imageData);
            }
            else if (options.blendingMode === BlendingMode.Alpha) {
            }
            ctx.putImageData(imageData, 0, 0);
        }
        return ctx;
    }
    static render2(image, id, options = {}) {
        //console.log("render2 "+id+": "+image.width+"x"+image.height)
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        canvas.width = image.width;
        canvas.height = image.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image.imageCanvas, 0, 0);
        return ctx;
    }
    static renderToImageData(image, imageData) {
        let data = imageData.data;
        var i = 0;
        for (let r = 0; r < image.height; r++) {
            for (let c = 0; c < image.width; c++) {
                let p = image.pixels[r][c], a = p.a;
                if (a == 0) {
                    data[i++] = 0;
                    data[i++] = 0;
                    data[i++] = 0;
                    data[i++] = 0;
                }
                else if (a == 1) {
                    data[i++] = p.r * 255;
                    data[i++] = p.g * 255;
                    data[i++] = p.b * 255;
                    data[i++] = p.a * 255;
                }
                else {
                    data[i++] = p.r * 255;
                    data[i++] = p.g * 255;
                    data[i++] = p.b * 255;
                    data[i++] = p.a * 255;
                }
            }
        }
    }
    static renderAlphaBlending(image, imageData) {
        let data = imageData.data;
        var i = 0;
        for (let r = 0; r < image.height; r++) {
            for (let c = 0; c < image.width; c++) {
                let p = image.pixels[r][c], a = p.a;
                if (a == 1) {
                    data[i + 0] = p.r;
                    data[i + 1] = p.g;
                    data[i + 2] = p.b;
                    data[i + 3] = 255;
                }
                else if (a != 0) {
                    data[i + 0] = p.r / a * 255 + data[i + 0] * (1 - a);
                    data[i + 1] = p.g / a * 255 + data[i + 1] * (1 - a);
                    data[i + 2] = p.b / a * 255 + data[i + 2] * (1 - a);
                    data[i + 3] = a * 255 + data[i + 3] * (1 - a);
                }
                i += 4;
            }
        }
    }
    static strokeVectorMask(mask, id, options = {}) {
        if (!mask || mask.path == undefined)
            return;
        //console.log("drawMask "+mask.pols.allpolys.length);
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = options.color || '#000';
        ctx.lineWidth = options.lineWidth || 1;
        mask.path.send(ctx);
        ctx.stroke();
    }
    static renderMultiples(images, id, options = {}) {
        let rows = options.rows || 1;
        let cols = options.cols || 1;
        if (rows * cols < images.length) {
            rows = cols = Math.ceil(Math.sqrt(images.length));
        }
        let canvas = id instanceof HTMLCanvasElement ? id :
            document.getElementById(id);
        let width = images[0].width, height = images[0].height;
        //let canvas:any = document.getElementById(id);
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        let memoryCanvas = document.createElement('canvas');
        memoryCanvas.width = width;
        memoryCanvas.height = height;
        let memoryCtx = memoryCanvas.getContext('2d');
        let imageData = memoryCtx.getImageData(0, 0, width, height);
        let mWidth = width / cols;
        let mHeight = height / rows;
        images.forEach((image, i) => {
            this.renderToImageData(image, imageData);
            memoryCtx.putImageData(imageData, 0, 0);
            let col = Math.floor(i / rows);
            let row = i % rows;
            ctx.drawImage(memoryCanvas, 0, 0, width, height, width * col / cols, height * row / rows, width / cols, height / rows);
        });
        for (let r = 1; r < rows; r++) {
            let y = height * r / rows;
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }
        for (let c = 1; c < cols; c++) {
            let x = width * c / cols;
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        return ctx;
    }
}
CanvasRenderer.BlendingMode = BlendingMode;
exports.default = CanvasRenderer;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = __importDefault(__webpack_require__(1));
const tile_1 = __importDefault(__webpack_require__(3));
const util = __importStar(__webpack_require__(0));
//[jdf] Change internal structure from array of Colors to 4 arrays of numbers.
// Probably as an ImageData https://developer.mozilla.org/en-US/docs/Web/API/ImageData
class Image {
    constructor(width, height, pixels = util.create2D(width, height, color_1.default.None)) {
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    render(source, shapeOrPoint, mask) {
        if (source instanceof color_1.default) {
            if (shapeOrPoint instanceof tile_1.default) {
                this.fillColorByTile(source, shapeOrPoint, mask);
            }
            else {
                this.fillColorByRect(source, shapeOrPoint);
            }
        }
        else if (source instanceof HTMLCanvasElement) {
            this.drawTileAtPosition(source, shapeOrPoint, mask);
        }
    }
    fillColorByTile(color, tile, mask) {
        let tmask = tile.mask, y = Math.ceil(tile.y), x = Math.ceil(tile.x);
        if (tmask.width == 1 && tmask.height == 1) {
            if ((mask == undefined || mask.mask[y][x] != 0) && tmask.mask[0][0] != 0)
                this.pixels[y][x] = color;
            return;
        }
        let maxy = Math.min(tile.y + tmask.height, this.height), maxx = Math.min(tile.x + tmask.width, this.width);
        if (mask) {
            for (let r = y; r < maxy; r++) {
                let trow = tmask.mask[r - y];
                let row = this.pixels[r];
                for (let c = x; c < maxx; c++) {
                    if (trow[c - x] == 0)
                        continue;
                    if (r < mask.height &&
                        c < mask.width &&
                        mask.mask[r][c] == 0)
                        continue;
                    row[c] = color;
                }
            }
        }
        else {
            for (let r = y; r < maxy; r++) {
                let trow = tmask.mask[r - y];
                let row = this.pixels[r];
                for (let c = x; c < maxx; c++) {
                    if (trow[c - x] == 0)
                        continue;
                    row[c] = color;
                }
            }
        }
    }
    checkOrCreate() {
        if (this.imageCanvas == undefined) {
            this.imageCanvas = document.createElement('canvas');
            if (this.imageCanvas == null) {
                console.log('cannot create canvas');
                throw 'cannot create canvas';
            }
            this.imageCanvas.width = this.width;
            this.imageCanvas.height = this.height;
        }
    }
    drawTileAtPosition(canvas, point, options) {
        this.checkOrCreate();
        let ctx = this.imageCanvas.getContext("2d");
        ctx.save();
        if (options && options.width && options.height) {
            let width = options.width;
            let height = options.height;
            ctx.drawImage(canvas, point.x - width / 2, point.y - height / 2, width, height);
        }
        else {
            ctx.translate(point.x, point.y);
            ctx.drawImage(canvas, -canvas.width / 2, -canvas.height / 2);
        }
        ctx.restore();
    }
    fillColorByRect(color, rect) {
        for (let r = rect.min.y; r < rect.max.y; r++) {
            if (r >= this.height)
                break;
            for (let c = rect.min.x; c < rect.max.x; c++) {
                if (c >= this.width)
                    break;
                this.pixels[r][c] = color.clone();
            }
        }
    }
    // default to center
    // private putImageByTile(imageData:ImageData, tile:Tile, options:any = {}) {
    //     let width = imageData.width;
    //     let height = imageData.height;
    //     let topLeft = new Point(tile.x + tile.mask.width / 2 - width / 2 ,
    //                             tile.y + tile.mask.height / 2 - height / 2).round();
    //     let data = imageData.data;
    //     for(let r = 0; r < height; r++) {
    //         for(let c = 0; c < width; c++) {
    //             let tr = r + topLeft.y; // target row
    //             let tc = c + topLeft.x; // target column
    //             if(tr < 0 || tc < 0 || tr >= this.height || tc >= this.width) continue;
    //             let color = new Color(
    //                 data[(r * width + c) * 4    ] / 255,
    //                 data[(r * width + c) * 4 + 1] / 255,
    //                 data[(r * width + c) * 4 + 2] / 255,
    //                 data[(r * width + c) * 4 + 3] / 255,
    //             );
    //             this.pixels[tr][tc] = color;
    //         }
    //     }
    // }
    // fillByTile2(color:Color, tile:Tile, mask?:Mask) {
    //     let ctx = this.imageCanvas.getContext("2d")!;
    //     let pixels = ctx.getImageData(0, 0, this.width, this.height);
    //     let r1 = Math.round(color.r*255);
    //     let g1 = Math.round(color.g*255);
    //     let b1 = Math.round(color.b*255);
    //     let a1 = Math.round(color.a*255);
    //     for(let r = Math.ceil(tile.y); r < Math.min(this.height, tile.y + tile.mask.height); r++) {
    //         for(let c = Math.ceil(tile.x); c < Math.min(this.width, tile.x + tile.mask.width); c++) {
    //             // mask of the tile
    //             if(tile.mask && tile.mask.mask[r-Math.ceil(tile.y)][c-Math.ceil(tile.x)] == 0)
    //             continue;
    //             // global mask
    //             if(mask && r < mask.height && c < mask.width && mask.mask[r][c] == 0)
    //             continue;
    //             pixels.data[c*4+r*4*this.width +0] = r1;
    //             pixels.data[c*4+r*4*this.width +1] = g1;
    //             pixels.data[c*4+r*4*this.width +2] = b1;
    //             pixels.data[c*4+r*4*this.width +3] = a1;
    //         }
    //     }
    //     ctx.putImageData(pixels, 0, 0);
    // }
    // To debug, let's print the mask
    fillMask(mask) {
        if (!mask)
            return;
        for (let r = 0; r < this.height; r++) {
            for (let c = 0; c < this.width; c++) {
                if (mask.mask[r][c] == 0)
                    this.pixels[r][c] = color_1.default.Black;
                else
                    this.pixels[r][c] = color_1.default.White;
            }
        }
    }
}
exports.default = Image;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = __importDefault(__webpack_require__(7));
class Rect {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    center() {
        return new point_1.default((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2);
    }
    width() {
        return Math.abs(this.max.x - this.min.x);
    }
    height() {
        return Math.abs(this.max.y - this.min.y);
    }
}
exports.default = Rect;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const tile_1 = __importDefault(__webpack_require__(3));
const mask_1 = __importDefault(__webpack_require__(4));
const d3 = __importStar(__webpack_require__(2));
const topo = __importStar(__webpack_require__(25));
const rn = __importStar(__webpack_require__(8));
const proj4_1 = __importDefault(__webpack_require__(26));
function pixelTiling(width, height) {
    let tiles = [];
    let buffer = new ArrayBuffer(width * height);
    new Uint8ClampedArray(buffer).fill(1);
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            tiles.push(new tile_1.default(col, row, new mask_1.default(1, 1, undefined, buffer, row * width + col)));
        }
    }
    return tiles;
}
exports.pixelTiling = pixelTiling;
function degreesToRadians(degrees) { return degrees * Math.PI / 180; }
function radiansToDegrees(radians) { return radians * 180 / Math.PI; }
function topojsonTiling(width, height, wholetopojson, feature, projectionName = "Mercator", latitudes, longitudes, debug = false) {
    let tiles = [];
    let proj = d3.geoEquirectangular();
    if (projectionName == "Equirectangular") { } // pass
    else if (projectionName == "epsg:3857" || projectionName == "Mercator")
        proj = d3.geoMercator();
    else {
        console.log('Searching for projection ' + projectionName);
        let p4 = proj4_1.default(projectionName);
        function project(lambda, phi) {
            return p4.forward([lambda, phi].map(radiansToDegrees));
        }
        // project.invert = (x:number, y:number) =>
        //      p4.inverse([x, y]).map(degreesToRadians);
        proj = d3.geoProjection(project);
    }
    let allfeatures = topo.feature(wholetopojson, feature);
    let projection = Object.create(proj).fitSize([width, height], allfeatures);
    var clipped = 0;
    if (debug)
        console.log("debug");
    let bbox = topo.bbox(wholetopojson);
    if (debug)
        console.log("  " + bbox);
    // The fitSize has to happen after the fitExtent
    if (latitudes != undefined && longitudes != undefined) {
        let bounds = [latitudes[0], longitudes[0], latitudes[1], longitudes[1]];
        if (debug)
            console.log("  bounds:" + bounds);
        let simple_feature = {
            "type": "GeometryCollection",
            "geometries": [{ "type": "Point", "coordinates": [latitudes[0], longitudes[0]] },
                { "type": "Point", "coordinates": [latitudes[0], longitudes[1]] },
                { "type": "Point", "coordinates": [latitudes[1], longitudes[1]] },
                { "type": "Point", "coordinates": [latitudes[1], longitudes[0]] }]
        };
        projection.fitSize([width, height], simple_feature);
    }
    else
        projection.fitSize([width, height], allfeatures);
    let gp = d3.geoPath(projection);
    // mainland states
    for (let j = 0; j < feature.geometries.length; j++) {
        // just one shape
        let onefeature = topo.feature(wholetopojson, feature.geometries[j]);
        let bb = gp.bounds(onefeature);
        var xmin = bb[0][0], ymin = bb[0][1], xmax = bb[1][0], ymax = bb[1][1];
        // clip invisible features
        if (xmin >= width || ymin >= height || xmax <= 0 || ymax <= 0) {
            clipped++;
            if (debug)
                console.log('  cliping feature ' + onefeature.id + ' bbox:' + bb);
            continue;
        }
        // clipped area
        xmin = Math.max(0, xmin);
        xmax = Math.min(width, xmax);
        ymin = Math.max(0, ymin);
        ymax = Math.min(height, ymax);
        // now let's create a mask for that shape
        let mask = new mask_1.default(Math.ceil(xmax) - Math.floor(xmin), Math.ceil(ymax) - Math.floor(ymin), 0);
        let canvas1 = mask.getCanvas();
        let context1 = canvas1.getContext("2d");
        if (context1 == null) {
            console.log('Cannot create context for new mask');
            continue;
        }
        let mpath = mask.getPath();
        let path = gp.context(mpath);
        path(onefeature);
        // now render the shape (black opaque over black transparent)
        context1.clearRect(0, 0, canvas1.width, canvas1.height);
        context1.fillStyle = "#111";
        context1.translate(-xmin, -ymin);
        mpath.send(context1);
        context1.fill();
        mask.copyFrom(context1);
        // now with a correct mask we can create the tile
        let tile = new tile_1.default(Math.floor(xmin), Math.floor(ymin), mask);
        tiles.push(tile);
    }
    if (clipped)
        console.log('clipped ' + clipped + ' features');
    return tiles;
}
exports.topojsonTiling = topojsonTiling;
function voronoiTiling(width, height, nbsites = 10, sites = []) {
    let rand3 = rn.create('JaeminFredPierreJean-Daniel');
    if (sites.length == 0) {
        for (var i = 0; i < nbsites; i++) {
            let x = rand3(width);
            let y = rand3(height);
            sites.push([x, y]);
        }
    }
    let tiles = [];
    let voronoi = d3.voronoi().extent([[0, 0], [width, height]]);
    let polys = voronoi.polygons(sites);
    for (let p in polys) {
        let minx = width;
        let maxx = 0;
        let miny = height;
        let maxy = 0;
        let ptsx = [];
        let ptsy = [];
        for (let k = 0; k < polys[p].length; k++) {
            let x = Math.min(width, Math.max(0, polys[p][k][0]));
            let y = Math.min(height, Math.max(0, polys[p][k][1]));
            ptsx.push(x);
            ptsy.push(y);
            minx = Math.min(minx, x);
            maxx = Math.max(maxx, x);
            miny = Math.min(miny, y);
            maxy = Math.max(maxy, y);
        }
        let mask = new mask_1.default(Math.ceil(maxx - minx) + 1, Math.ceil(maxy - miny) + 1, 0);
        let canvas1 = mask.getCanvas();
        let context1 = canvas1.getContext("2d");
        let path = mask.getPath();
        context1.clearRect(0, 0, canvas1.width, canvas1.height);
        context1.fillStyle = "#111";
        //context1.beginPath();
        path.moveTo(polys[p][0][0], polys[p][0][1]);
        for (let k = 1; k < polys[p].length; k++) {
            let x = Math.min(width, Math.max(0, polys[p][k][0]));
            let y = Math.min(height, Math.max(0, polys[p][k][1]));
            path.lineTo(x, y);
        }
        path.lineTo(polys[p][0][0], polys[p][0][1]);
        context1.translate(-minx, -miny);
        path.send(context1);
        context1.fill();
        mask.copyFrom(context1);
        //let cx = ptsx.reduce((a, b) => a + b, 0) / ptsx.length;
        //let cy = ptsy.reduce((a, b) => a + b, 0) / ptsy.length;
        tiles.push(new tile_1.default(Math.floor(minx), Math.floor(miny), mask));
    }
    return tiles;
}
exports.voronoiTiling = voronoiTiling;
function rectangularTiling(width, height, tileWidth, tileHeight) {
    let rows = Math.ceil(height / tileHeight);
    let cols = Math.ceil(width / tileWidth);
    let tiles = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            tiles.push(new tile_1.default(col * tileWidth, row * tileHeight, new mask_1.default(tileWidth, tileHeight)));
        }
    }
    return tiles;
}
exports.rectangularTiling = rectangularTiling;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Path {
    constructor() {
        this.codes = '';
        this.pts = [];
    }
    moveTo(x, y) {
        this.codes += "M";
        this.x0 = this.x1 = x;
        this.y0 = this.y1 = y;
        this.pts.push([x, y]);
    }
    closePath() {
        if (this.x1 !== undefined) {
            this.codes += "Z";
            this.x1 = this.x0;
            this.y1 = this.y0;
            this.pts.push([this.x0, this.y0]);
        }
    }
    lineTo(x, y) {
        this.codes += "L";
        this.x1 = x;
        this.y1 = y;
        this.pts.push([x, y]);
    }
    quadraticCurveTo(x1, y1, x, y) {
        this.codes += "Q";
        this.x1 = x;
        this.y1 = y;
        this.pts.push([x1, y1]);
        this.pts.push([x, y]);
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        this.codes += "C";
        this.x1 = x;
        this.y1 = y;
        this.pts.push([x1, y1]);
        this.pts.push([x2, y2]);
        this.pts.push([x, y]);
    }
    arcTo(x1, y1, x2, y2, r) {
        throw new Error("Unsupported method");
    }
    arc(x, y, r, a0, a1, ccw) {
        throw new Error("Unsupported method");
    }
    rect(x, y, w, h) {
        this.moveTo(x, y);
        this.lineTo(x + w, y);
        this.lineTo(x + w, y + h);
        this.lineTo(x, y + h);
        this.closePath();
    }
    send(canvas) {
        var j = 0;
        for (let i = 0; i < this.codes.length; i++) {
            let c = this.codes[i];
            if (c == 'M') {
                canvas.moveTo(this.pts[j][0], this.pts[j][1]);
                j++;
            }
            else if (c == 'Z') {
                canvas.closePath();
                j++;
            }
            else if (c == 'L') {
                canvas.lineTo(this.pts[j][0], this.pts[j][1]);
                j++;
            }
            else if (c == 'Q') {
                canvas.quadraticCurveTo(this.pts[j][0], this.pts[j][1], this.pts[j + 1][0], this.pts[j + 1][1]);
                j += 2;
            }
            else if (c == 'C') {
                canvas.bezierCurveTo(this.pts[j][0], this.pts[j][1], this.pts[j + 1][0], this.pts[j + 1][1], this.pts[j + 2][0], this.pts[j + 2][1]);
                j += 3;
            }
            else {
                console.log('Error, unknown code ' + c);
            }
        }
    }
}
exports.Path = Path;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("topojson");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("proj4");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const vega_embed_1 = __importDefault(__webpack_require__(10));
function extract(spec) {
    let wrapper = document.createElement('div');
    return vega_embed_1.default(wrapper, spec, {
        actions: false
    }).then(() => {
        let canvas = wrapper.getElementsByTagName('canvas')[0];
        let ctx = canvas.getContext('2d');
        return canvas;
    });
}
exports.default = extract;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const mask_1 = __importDefault(__webpack_require__(4));
function squareMasks(m, size, width, height, xincr = 1) {
    let masks = Array(m);
    let i, j;
    size = Math.floor(size);
    if (xincr < 0) {
        xincr = m + (xincr % m);
    }
    for (let i = 0; i < m; i++) {
        masks[i] = new mask_1.default(width, height, 0);
    }
    for (let i = 0; i < (height / size); i++) {
        let row = i * size;
        let row_max = Math.min(row + size, height);
        for (let j = 0; j < (width / size); j++) {
            let col = j * size;
            let col_max = Math.min(col + size, width);
            let selected = (i * xincr + j);
            let mask = masks[selected % m];
            for (let r = row; r < row_max; r++) {
                for (let c = col; c < col_max; c++) {
                    mask.mask[r][c] = 1;
                }
            }
        }
    }
    return masks;
}
exports.squareMasks = squareMasks;
function hexMasks(m, size, width, height, xincr = 1) {
    let masks = Array(m);
    let i, j;
    size = Math.floor(size);
    if (xincr < 0) {
        xincr = m + (xincr % m);
    }
    for (let i = 0; i < m; i++) {
        masks[i] = new mask_1.default(width, height, 0);
    }
    for (let j = 0; j < (height / size); j++) {
        for (let i = 0; i < (width / size); i++) {
            let col = i * size;
            let row = j * size;
            let selected = (i + (j * 2) % 8) % m;
            if (j % 2 == 1) {
                col += size / 2;
            }
            let mask = masks[selected];
            let path = mask.getPath();
            let y = 3 * size / 16;
            // 6 pts to make an hexagon
            path.moveTo(col, row + y);
            path.lineTo(col + size / 2, row - y);
            path.lineTo(col + size, row + y);
            path.lineTo(col + size, row + size - y);
            path.lineTo(col + size / 2, row + size + y);
            path.lineTo(col, row + size - y);
            path.closePath();
        }
    }
    masks.forEach(mask => {
        if (mask.path === undefined)
            return;
        let ctx = mask.getCanvas().getContext("2d");
        ctx.fillStyle = "#111";
        mask.path.send(ctx);
        ctx.fill();
        mask.copyFrom(ctx);
    });
    return masks;
}
exports.hexMasks = hexMasks;
function triangleMasks(m, size, width, height) {
    //TODO (jdf) fix to work with any m or throw exception when m is odd??
    let masks = Array(m);
    let i, j;
    size = Math.floor(size);
    for (let i = 0; i < m; i++) {
        masks[i] = new mask_1.default(width, height, 0);
    }
    for (let j = 0; j <= (height / size); j++) {
        for (let i = 0; i < (width / size); i++) {
            //let selected = (((i-j%2) +(width/size)- j))%m;
            let selected = i % (m / 2);
            if (j % 2 == 1)
                selected = i % (m / 2) + m / 2;
            let row = (j - 1) * size;
            let col = (i - 1) * size * 1.5 - (j % 2) * (size * 0.75);
            let mask = masks[selected];
            let path = mask.getPath();
            let y = 3 * size / 16;
            path.moveTo(col + 0.75 * 0 * size, col + 0.75 * 2 * size);
            path.lineTo(col + 0.75 * 1 * size, col + 0.75 * 3 * size);
            path.lineTo(col + 0.75 * 2 * size, col + 0.75 * 4 * size);
            path.closePath();
            path.moveTo(col + 0.75 * 2 * size, row + size);
            path.lineTo(col + 0.75 * 3 * size, row + 2 * size);
            path.lineTo(col + 0.75 * 4 * size, row + size);
            path.closePath();
        }
    }
    masks.forEach(mask => {
        if (mask.path === undefined)
            return;
        let ctx = mask.getCanvas().getContext("2d");
        ctx.fillStyle = "#111";
        mask.path.send(ctx);
        ctx.fill();
        mask.copyFrom(ctx);
    });
    return masks;
}
exports.triangleMasks = triangleMasks;
function randomMasks(m, size, width, height) {
    let masks = Array(m);
    size = Math.floor(size);
    for (let i = 0; i < m; i++) {
        masks[i] = new mask_1.default(width, height, 0);
    }
    for (let row = 0; row < height; row += size) {
        let row_max = Math.min(row + size, height);
        for (let col = 0; col < width; col += size) {
            let col_max = Math.min(col + size, width);
            let selected = Math.floor(Math.random() * m);
            let mask = masks[selected];
            for (let r = row; r < row_max; r++) {
                for (let c = col; c < col_max; c++) {
                    mask.mask[r][c] = 1;
                }
            }
        }
    }
    return masks;
}
exports.randomMasks = randomMasks;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(__webpack_require__(2));
const color_1 = __importDefault(__webpack_require__(1));
const composer_1 = __importDefault(__webpack_require__(9));
const vega_embed_1 = __importDefault(__webpack_require__(10));
function translate(x, y) {
    return `translate(${x},${y})`;
}
let counter = 0;
// see degree at http://angrytools.com/gradient/
function linearGradient(defs, interpolator, db, degree = 0) {
    let x1 = 0.5 - Math.cos(degree) / 2;
    let x2 = 0.5 + Math.cos(degree) / 2;
    let y1 = 0.5 + Math.sin(degree) / 2;
    let y2 = 0.5 - Math.sin(degree) / 2;
    let id = `gradient_${counter++}`;
    let lg = defs.append('linearGradient')
        .attr('id', id)
        .attr('x1', x1)
        .attr('x2', x2)
        .attr('y1', y1)
        .attr('y2', y2);
    lg.append('stop')
        .attr('offset', 0)
        .style('stop-color', db.colorScale.map(interpolator.domain[0]).css());
    lg.append('stop')
        .attr('offset', 1)
        .style('stop-color', db.colorScale.map(interpolator.domain[1]).css());
    return id;
}
function equiDepthColorMap(defs, interpolator, db) {
    let id = `gradient_${counter++}`;
    let scale = interpolator;
    let lg = defs.append('linearGradient')
        .attr('id', id)
        .attr('x1', 0)
        .attr('x2', 1)
        .attr('y1', 0)
        .attr('y2', 0);
    let n = scale.level;
    scale.getBounds();
    // bounds do not include the last value
    scale.bounds.concat([scale.bounds[n - 2] + 1]).forEach((value, i) => {
        let color = db.colorScale.map(value - 1);
        if (isNaN(color.r))
            color = color_1.default.Transparent;
        lg.append('stop')
            .attr('offset', i / n)
            .style('stop-color', color.css());
        lg.append('stop')
            .attr('offset', (i + 1) / n)
            .style('stop-color', color.css());
    });
    return id;
}
function horizontalColormaps(id, interp) {
    let derivedBuffers = interp.derivedBuffers;
    let spec = interp.legend;
    let svg = d3.select('#' + id)
        .style('font-family', spec.fontFamily)
        .style('font-size', spec.fontSize);
    let defs = svg.append('defs');
    let padding = spec.padding;
    let g = svg.append('g').attr('transform', translate(padding, padding));
    let categoryG = g.append('g');
    let valueG = g.append('g');
    let n = derivedBuffers.length;
    let rowHeight = spec.rowHeight;
    let colorMapWidth = spec.colorMapWidth;
    let labelWidth = spec.labelWidth;
    let gutter = spec.gutter;
    let verticalGutter = 2;
    svg
        .attr('width', colorMapWidth + padding * 2)
        .attr('height', (rowHeight + verticalGutter) * (n + 1) * 2 + rowHeight + padding * 2);
    categoryG
        .append('text')
        .text('category')
        .attr('dy', '0.5em');
    let categories = categoryG.selectAll('g')
        .data(derivedBuffers);
    let labels = interp.labels == undefined ? interp.bufferNames : interp.labels;
    let categoryEnter = categories
        .enter()
        .append('g')
        .attr('transform', (d, i) => translate(0, (rowHeight + verticalGutter) * (i + 1)));
    categoryEnter
        .append('circle')
        .attr('r', 5)
        .attr('fill', d => d.color.css())
        .attr('transform', translate(5, 0));
    categoryEnter
        .append('text')
        .text((d, i) => labels[i])
        .attr('transform', translate(10 + gutter, 0))
        .attr('dy', '0.4em')
        .style('font-size', spec.tickFontSize)
        .style('font-weight', 'normal')
        .attr('text-anchor', 'start');
    valueG
        .attr('transform', translate(0, (rowHeight + verticalGutter) * (n + 1)));
    valueG.append('text')
        .text('value')
        .attr('dy', '1em');
    let gradientFunc;
    // domain numbers will be shown
    let tickValues = [];
    // markers (vertical bars) will be shown
    let markerValues = [];
    let colormapScale = (v, i) => interp.scale.map(v) * colorMapWidth;
    // scales that show continuous color maps
    if (!interp.rescale || ["linear", "pow", "sqrt", "cbrt", "log"].indexOf(interp.rescale.type) >= 0) {
        gradientFunc = linearGradient;
        let n = spec.markers;
        tickValues = [derivedBuffers[0].colorScale.interpolator.domain[0],
            derivedBuffers[0].colorScale.interpolator.domain[1]];
        markerValues = d3.range(n).map(i => tickValues[0] + (tickValues[1] - tickValues[0]) * (i + 1) / (n + 1));
    }
    else if (interp.rescale.type === "equidepth") {
        gradientFunc = equiDepthColorMap;
        tickValues = [derivedBuffers[0].colorScale.interpolator.domain[0]]
            .concat(interp.scale.bounds);
        colormapScale = (v, i) => colorMapWidth / (tickValues.length - 1) * i;
        markerValues = [];
    }
    let ids = derivedBuffers.map(db => {
        return gradientFunc(defs, interp.scale, db);
    });
    let values = valueG.selectAll('g')
        .data(derivedBuffers);
    let valueEnter = values
        .enter()
        .append('g')
        .attr('transform', (d, i) => translate(0, (rowHeight + verticalGutter) * (i + 1)));
    // colormaps
    valueEnter
        .append('rect')
        .attr('height', rowHeight)
        .attr('width', colorMapWidth)
        .attr('transform', translate(0, 0))
        .attr('stroke', '#ddd')
        .style('fill', (d, i) => `url(#${ids[i]})`);
    let tickG = valueG
        .append('g')
        .attr('class', 'ticks')
        .attr('transform', translate(0, (rowHeight + verticalGutter) * (derivedBuffers.length + 1)));
    let ticks = tickG
        .selectAll('text.tick')
        .data(tickValues);
    let step = 1;
    if (spec.numTicks) {
        step = Math.floor(tickValues.length / spec.numTicks);
    }
    // ticks (0, .., 1.7K)
    ticks.enter()
        .append('text')
        .attr('class', 'tick')
        .attr('text-anchor', (d, i) => {
        if (i === 0)
            return 'start';
        else if (i === tickValues.length - 1)
            return 'end';
        return 'middle';
    })
        .attr('transform', (d, i) => translate(colormapScale(d, i), 0))
        .style('display', (d, i) => {
        if (i % step === 0)
            return 'inline';
        return 'none';
    })
        .attr('dy', '1em')
        .style('font-size', spec.tickFontSize)
        .style('font-weight', 'normal')
        .text(d => d3.format(spec.format)(d));
    valueEnter
        .selectAll('line')
        .data(markerValues)
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', rowHeight)
        .style('stroke', '#ddd')
        .style('stroke-width', 1)
        .style('shape-rendering', 'crispEdges')
        .attr('transform', (d, i) => translate(colormapScale(d, i), 0));
}
function multiplicativeCircles(id, interp) {
    let derivedBuffers = interp.derivedBuffers;
    let spec = interp.legend;
    let size = spec.size;
    let svg = d3.select('#' + id)
        .style('font-family', spec.fontFamily)
        .style('font-size', spec.fontSize)
        .attr('width', size)
        .attr('height', size);
    let defs = svg.append('defs');
    let g = svg.append('g').attr('transform', translate(0, 0));
    let center = size / 2;
    let r = size / 6;
    let theta = Math.PI * 2 / derivedBuffers.length;
    let ids = derivedBuffers.map((d, i) => {
        return linearGradient(defs, interp.scale, d, -theta * i - Math.PI / 2);
    });
    g.selectAll('circle')
        .data(derivedBuffers)
        .enter()
        .append('circle')
        .attr('r', r)
        .attr('fill', d => d.color.css())
        .attr('cx', (d, i) => center + r * Math.sin(theta * i) / 2)
        .attr('cy', (d, i) => center - r * Math.cos(theta * i) / 2)
        .style('fill', (d, i) => `url(#${ids[i]})`)
        .style('mix-blend-mode', 'multiply');
    g.selectAll('text')
        .data(derivedBuffers)
        .enter()
        .append('text')
        .text(d => d.originalDataBuffer.name)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.5em')
        .attr('transform', (d, i) => translate(center + r * Math.sin(theta * i) * 2, center - r * Math.cos(theta * i) * 2));
    // .attr('cx', (d, i) => )
    // .attr('cy', (d, i) => )
    // .style('opacity', 0.9)
    // .style('mix-blend-mode', 'multiply');
}
function bars(id, interp) {
    let derivedBuffers = interp.derivedBuffers;
    let n = derivedBuffers.length;
    let spec = interp.legend;
    let svg = d3.select('#' + id)
        .style('font-family', spec.fontFamily)
        .style('font-size', spec.fontSize);
    let sum = new Array(n).fill(0);
    for (let tile of interp.tiles) {
        tile.dataValues.forEach((value, i) => {
            sum[i] += value;
        });
    }
    let mean = sum.map(s => s / n);
    let domain = interp.scale.domain;
    let data = derivedBuffers.map((buffer, i) => {
        return {
            category: buffer.originalDataBuffer.name,
            value: (domain[1] - domain[0]) * (i + 1) / n + domain[0]
        };
    });
    let glyphSpec = interp.compose.glyphSpec;
    let barSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v2.0.json",
        data: {
            values: data
        },
        mark: {
            type: "bar"
        },
        encoding: {
            x: {
                field: "category",
                type: "ordinal",
                axis: {
                    orient: "top",
                    title: "value",
                    domain: false,
                    ticks: false,
                    labels: false
                }
            },
            color: {
                field: "category",
                type: "ordinal",
                scale: {
                    domain: data.map(d => d.category),
                    range: data.map((d, i) => derivedBuffers[i].color.css())
                },
                legend: {
                    orient: "top"
                }
            },
            y: {
                field: "value",
                type: "quantitative",
                scale: {
                    type: interp.d3scale,
                    base: interp.d3base,
                    domain: domain,
                    range: [glyphSpec.height, 0]
                },
                // legend: false,
                axis: {
                    orient: "right",
                    title: false
                }
            }
        },
        config: {
            group: {
                strokeWidth: 0
            }
        },
        width: glyphSpec.width,
        height: glyphSpec.height
    };
    let wrapper = document.createElement('div');
    return vega_embed_1.default(wrapper, barSpec, {
        actions: false,
        renderer: 'svg'
    }).then(() => {
        let result = wrapper.getElementsByTagName('svg')[0];
        let svgNode = svg.node();
        svgNode.innerHTML = result.innerHTML;
        let rect = svgNode.getBoundingClientRect();
        svg.attr("width", result.getAttribute("width"))
            .attr("height", result.getAttribute("height"));
    });
}
function punchcard(id, interp) {
    let derivedBuffers = interp.derivedBuffers;
    let n = derivedBuffers.length;
    let spec = interp.legend;
    let glyphSpec = interp.compose.glyphSpec;
    let svg = d3.select('#' + id)
        .style('font-family', spec.fontFamily)
        .style('font-size', spec.fontSize);
    let sum = new Array(n).fill(0);
    for (let tile of interp.tiles) {
        tile.dataValues.forEach((value, i) => {
            sum[i] += value;
        });
    }
    let mean = sum.map(s => s / n);
    let cols = Math.ceil(Math.sqrt(n));
    let punchcardSpec = {
        $schema: "https://vega.github.io/schema/vega-lite/v2.0.json",
        data: {
            values: []
        },
        layer: [
            {
                mark: "circle",
                encoding: {
                    size: {
                        field: "value",
                        type: "quantitative",
                        scale: {
                            type: interp.d3scale,
                            base: interp.d3base,
                            domain: interp.scale.domain,
                            range: [0, Math.min(glyphSpec.width, glyphSpec.height) * glyphSpec.factor]
                        },
                        legend: {
                            orient: "left"
                        }
                    },
                    color: {
                        field: "category",
                        type: "ordinal",
                        scale: {
                            domain: derivedBuffers.map(b => b.originalDataBuffer.name),
                            range: derivedBuffers.map(b => (b.color || color_1.default.Blue).css())
                        },
                        legend: {
                            orient: "left"
                        }
                    }
                }
            },
            {
                mark: {
                    type: "text",
                    baseline: "middle"
                },
                encoding: {
                    text: { field: "category" }
                }
            }
        ],
        encoding: {
            x: { field: "col", type: "ordinal", axis: false, legend: false },
            y: { field: "row", type: "ordinal", axis: false, legend: false },
        },
        config: {
            group: {
                strokeWidth: 0
            },
            mark: {
                opacity: 1
            }
        },
        width: spec.width,
        height: spec.height,
        padding: 5
    };
    let wrapper = document.createElement('div');
    return vega_embed_1.default(wrapper, punchcardSpec, {
        actions: false,
        renderer: 'svg'
    }).then(() => {
        let result = wrapper.getElementsByTagName('svg')[0];
        let svgNode = svg.node();
        svgNode.innerHTML = result.innerHTML;
        let rect = svgNode.getBoundingClientRect();
        svg.attr("width", result.getAttribute("width"))
            .attr("height", result.getAttribute("height"));
    });
}
function LegendBuilder(id, interp) {
    if (interp.legend === false)
        return;
    if (interp.composer === composer_1.default.multiplicativeMix) {
        multiplicativeCircles(id, interp);
    }
    else if (interp.compose.mix === "glyph") {
        if (interp.compose.glyphSpec.template === "bars") {
            bars(id, interp);
        }
        else if (interp.compose.glyphSpec.template === "punchcard") {
            punchcard(id, interp);
        }
    }
    else {
        horizontalColormaps(id, interp);
    }
}
exports.default = LegendBuilder;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map