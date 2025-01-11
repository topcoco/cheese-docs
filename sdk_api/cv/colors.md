---
outline: deep
---

## 颜色相关

<div style="background-color: #2f9295; border-left: 6px solid #ffcc00; padding: 15px; margin: 15px 0; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); font-weight: bold;">
🚨 重要提示：调用颜色相关方法请先调用Base相关方法的initOpenCV来初始化Opencv。
</div>

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 获取坐标点的RGB或ARGB:
`getColor(inputImage: Bitmap, format: number, x: number, y: number): IntArray` :white_check_mark:

**参数**:

- ⭐`bitmap` (bitmap):图片的bit对象
- ⭐`number` (format):格式
- ⭐`number` (x):目标x
- ⭐`number` (y):目标y

**返回值**:

- :green_circle:`IntArray`:RGB或ARGB数值
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
        let rgb = colors.getColor(src, colors.format.rgb, 284, 236)
        console.log("r", rgb[0])
        console.log("g", rgb[1])
        console.log("b", rgb[2])
    }
}
```

### 获取坐标点的HEX:`getHEX(inputImage: Bitmap, format: number, x: number, y: number): string` :white_check_mark:

**参数**:

- ⭐`bitmap` (bitmap):图片的bit对象
- ⭐`number` (format):格式
- ⭐`number` (x):目标x
- ⭐`number` (y):目标y

**返回值**:

- :green_circle:`string`:hex字符串
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
        let hex = colors.getHEX(src, colors.format.rgb, 284, 236)
        console.log(hex)
    }
}
```

### rgb转成hex:`rgbToHEX(r: number, g: number, b: number): string` :white_check_mark:

**参数**:

- ⭐`number` (r):r
- ⭐`number` (g):g
- ⭐`number` (b):b

**返回值**:

- :green_circle:`string`:hex字符串
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
const recordscreen = core.recordScreen;
let hex = colors.rgbToHEX(200, 284, 236)
console.log(hex)
```

### argb转成hex:`argbToHEX(a: number, r: number, g: number, b: number): string` :white_check_mark:

**参数**:

- ⭐`number` (a):a
- ⭐`number` (r):r
- ⭐`number` (g):g
- ⭐`number` (b):b

**返回值**:

- :green_circle:`string`:hex字符串
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
let hex = colors.argbToHEX(120, 200, 284, 236)
console.log(hex)
```

### hex转成argb:`hexToARGB(hex: string): IntArray` :white_check_mark:

**参数**:

- ⭐`string` (hex):hex字符串

**返回值**:

- :green_circle:`IntArray`:argb数组
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
let argb = colors.hexToARGB("#DFB44C")
console.log("a", rgb[0])
console.log("r", rgb[1])
console.log("g", rgb[2])
console.log("b", rgb[3])
```

### hex转成rgb:`hexToRGB(hex: string): IntArray` :white_check_mark:

**参数**:

- ⭐`string` (hex):hex字符串

**返回值**:

- :green_circle:`IntArray`:rgb数组
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
let argb = colors.hexToRGB("#DFB44C")
console.log("r", rgb[0])
console.log("g", rgb[1])
console.log("b", rgb[2])
```

### 解析颜色:`parseColor(colorString: string): number` :white_check_mark:

**参数**:

- ⭐`string` (colorString):颜色字符串

**返回值**:

- :green_circle:`number`:颜色数值
- :red_circle:null

**用法示例**:

```javascript

const colors = core.cv.colors;
let c = colors.parseColor("#DFB44C")
console.log(c)
```

### 同分辨率-多点找色:

` findMultiColors(bitmap: Bitmap,firstColor: string, paths:any, options: any): any` :white_check_mark:

**参数**:

- ⭐`bitmap` (bitmap):图片的bit对象
- ⭐`number` (firstColor):第一个颜色的值
- ⭐`any` (paths):周边颜色路径
- ⭐`any` (options):选项
-

**返回值**:

- :green_circle:`any`:坐标值
- :red_circle:null

**用法示例**:

```javascript
// options选项 distance(最大距离 0-255) 距离越小 相似度要求越高

const base = core.base;
const colors = core.cv.colors;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log("坐标：", colors.findMultiColors(bit, "#DBB854", [[-4, 11, "#474747"]], {
        "distance": 30
    }))
    base.release(bit)
}
```

### 同分辨率-检测颜色:` detectsColor(firstColor: string, targetColor: string, options: any): boolean` :white_check_mark:

**参数**:

- ⭐`number` (firstColor):第一个颜色的值
- ⭐`string` (targetColor):目标颜色
- ⭐`any` (options):选项
  **返回值**:
- :green_circle:`any`:坐标值
- :red_circle:null

**用法示例**:

```javascript
// options选项 distance(最大距离 0-255) 距离越小 相似度要求越高 weightH H分量的权重 weightS S分量的权重

const base = core.base;
const colors = core.cv.colors;
console.log(colors.detectsColor("#DFB44C", "#FDEA2B", {
    "distance": 10.0,
    "weightH": 1.0,
    "weightS": 1.0
}))
```