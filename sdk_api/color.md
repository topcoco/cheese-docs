---
outline: deep
---

## 颜色相关


```javascript
const core = require('cheese-js');
```

### 查找多个颜色: `public static findMultiColors(bitmap: Bitmap, firstColor: string, paths: any, options: any): Point` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (bitmap): 要搜索的图像  
- ⭐`string` (firstColor): 主要颜色，支持 HEX 颜色字符串（如 `"#FDEA2B"`）  
- ⭐`any` (paths): 颜色相对主颜色的位置和颜色数组，格式如 `[[x, y, color], ...]`  
- ⭐ `any` (options): 查找选项对象，例如 `{ maxDistance: 30 }`，表示颜色最大容差

**返回值**:

- :green_circle: `Point` — 查找到的匹配点坐标（x, y）  
- :red_circle: null — 未找到时返回

**用法示例**:

```javascript
const core = require('cheese-js');
const { color, base, converters, image } = core;

// 加载图片资源
const templateImage = converters.assetsToBitmap("home.png");

// 多点颜色匹配参数
const mainColor = "#FDEA2B";
const matchPoints = [
    [36, 3, "#281700"],
    [33, 3, "#EFB321"],
    [33, 5, "#876D30"]
];
const options = { maxDistance: 30 };

// 查找匹配位置
const resultPoint = color.findMultiColors(templateImage, mainColor, matchPoints, options);

if (resultPoint) {
    console.log(`匹配坐标：${resultPoint.x}, ${resultPoint.y}`);

    // 绘制匹配点
    const annotatedImage = image.drawPointOnBitmap(templateImage, "match-result", resultPoint.x, resultPoint.y);

    // 显示结果图像
    image.showBitmapView(annotatedImage);

    // 释放资源
    base.release(annotatedImage);
} else {
    console.warn("未找到匹配点");
}

// 无论是否成功，都释放原图资源
base.release(templateImage);
```

### 颜色检测: `public static compareColor(baseColorHex: string, targetColorHex: string, options: any): boolean` :white_check_mark:

**参数**:

- ⭐ `string` (baseColorHex): 基准颜色的 HEX 字符串（如 `"#FF0000"`）  
- ⭐ `string` (targetColorHex): 目标颜色的 HEX 字符串  
- ⭐ `any` (options): 选项对象，比如颜色容差阈值等

**返回值**:

- :green_circle: `boolean` — 两个颜色是否在容差范围内被判定为相同

**用法示例**:

```javascript
// 引入 cheese-js 模块
const core = require('cheese-js');

// 从 core 模块中解构导入 color 模块
const { color } = core;

// 定义颜色比较的选项
const options = {
    maxDistance: 0.2,  // 颜色比较的最大容差值，决定颜色差异的最大范围 0.1 - 0.5之间 越小越相似
};

// 使用 color 模块的 compareColor 方法比较两个颜色
// 参数：两个颜色的 HEX 值和选项对象
console.log(color.compareColor("#FF0000", "#988333", options));
// 输出：比较 "#FF0000"（红色）和 "#988333"（橄榄色）的差异，返回是否在允许的最大容差内
```

### 获取颜色: `public static getPointColor(inputImage: Bitmap, format: number, x: number, y: number): IntArray` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 输入的图像对象  
- ⭐ `number` (format): 颜色格式，例如 RGBA、ARGB 等  
- ⭐ `number` (x): 横坐标  
- ⭐ `number` (y): 纵坐标  

**返回值**:

- :green_circle: `IntArray` — 位置 `(x, y)` 处的颜色数组，格式取决于传入的 `format`

**用法示例**:

```javascript
// 引入 cheese-js 模块
const core = require('cheese-js');

// 导入 color 和 converters 模块
const { color, converters } = core;

// 加载图片资源（1.png），转换为 Bitmap 格式
const templateImage = converters.assetsToBitmap("home.png");

// 检查图片是否加载成功
if (!templateImage) {
    console.error("❌ 图片加载失败，请确认资源路径和文件是否存在");
} else {
    // 设置要获取颜色的坐标点
    const x = 435, y = 379;

    // 获取指定坐标的颜色数据（RGB格式），带边界检查
    const colorData = color.getPointColor(templateImage, color.ColorFormat.RGB, x, y);

    // 判断是否成功获取到颜色数据
    if (colorData) {
        console.log(`✅ 成功获取颜色数据，通道数量: ${colorData.length}`);

        // 遍历 RGB 各通道值（通常为 R、G、B）
        for (let i = 0; i < colorData.length; i++) {
            console.log(`通道 ${i} 的值: ${colorData[i]}`);
        }
    } else {
        console.warn(`⚠️ 坐标 (${x}, ${y}) 超出了图像的边界，无法获取颜色`);
    }
}
```

### 获取 HEX 颜色值: `public static getPointHEX(inputImage: Bitmap, format: number, x: number, y: number): string` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 输入的图像对象  
- ⭐ `number` (format): 颜色格式  
- ⭐ `number` (x): 横坐标  
- ⭐ `number` (y): 纵坐标  

**返回值**:

- :green_circle: `string` — 位置 `(x, y)` 处的颜色的 HEX 字符串表示（例如 `#FFAABB`）

**用法示例**:

```javascript
// 引入 cheese-js 模块
const core = require('cheese-js');

// 导入 color 和 converters 模块
const { color, converters } = core;

// 加载图片资源（1.png），转换为 Bitmap 格式
const templateImage = converters.assetsToBitmap("home.png");

// 检查图片是否加载成功
if (!templateImage) {
    console.error("❌ 图片加载失败，请确认资源路径和文件是否存在");
} else {
    // 设置要获取颜色的坐标点
    const x = 435, y = 379;

    // 获取指定坐标的颜色数据（RGB格式），带边界检查
    const colorData = color.getPointHEX(templateImage, color.ColorFormat.RGB, x, y);

    // 判断是否成功获取到颜色数据
 console.log(colorData)
}

```

### RGB 转 HEX 颜色值: `public static rgbToHEX(r: number, g: number, b: number): string` :white_check_mark:

**参数**:

- ⭐ `number` (r): 红色分量，取值范围 0-255  
- ⭐ `number` (g): 绿色分量，取值范围 0-255  
- ⭐ `number` (b): 蓝色分量，取值范围 0-255  

**返回值**:

- :green_circle: `string` — 对应的 HEX 颜色字符串（例如 `#FFAABB`）

**用法示例**:

```javascript
const core = require('cheese-js');
const { color } = core;

const r = 255;
const g = 170;
const b = 187;

const hexColor = color.rgbToHEX(r, g, b);
console.log("RGB 转 HEX 颜色:", hexColor);
```

### ARGB 转 HEX 颜色值: `public static argbToHEX(a: number, r: number, g: number, b: number): string` :white_check_mark:

**参数**:

- ⭐ `number` (a): 透明度（Alpha）分量，取值范围 0-255  
- ⭐ `number` (r): 红色分量，取值范围 0-255  
- ⭐ `number` (g): 绿色分量，取值范围 0-255  
- ⭐ `number` (b): 蓝色分量，取值范围 0-255  

**返回值**:

- :green_circle: `string` — 对应的带透明度的 HEX 颜色字符串（例如 `#80FFAABB`）

**用法示例**:

```javascript
const core = require('cheese-js');
const { color } = core;

const a = 128; // 半透明
const r = 255;
const g = 170;
const b = 187;

const hexColor = color.argbToHEX(a, r, g, b);
console.log("ARGB 转 HEX 颜色:", hexColor);
```

### HEX 转 ARGB 数组: `public static parseHex(hex: string): IntArray` :white_check_mark:

**参数**:

- ⭐ `string` (hex): 16进制颜色字符串，格式如 `#RRGGBB` 或 `#AARRGGBB`

**返回值**:

- :green_circle: `IntArray` — 包含颜色通道的整数数组，格式为 `[A, R, G, B] 或 [R, G, B]`

**用法示例**:

```javascript

// 导入 color 和 converters 模块
const { color } = core;

const colorData= color.parseHex("#00FF00")

// 判断是否成功获取到颜色数据
if (colorData) {
    console.log(`✅ 成功获取颜色数据，通道数量: ${colorData.length}`);

    // 遍历 RGB 各通道值（通常为 R、G、B）
    for (let i = 0; i < colorData.length; i++) {
        console.log(`通道 ${i} 的值: ${colorData[i]}`);
    }
} else {
    console.warn(`无法获取颜色`);
}
```

### 解析颜色字符串: `public static parseColor(colorString: string): number` :white_check_mark:

**参数**:

- ⭐ `string` (colorString): 颜色字符串，支持多种格式，如 `"#RRGGBB"`, `"#AARRGGBB"`，或颜色名称等

**返回值**:

- :green_circle: `number` — 解析后的颜色整数值

**用法示例**:

```javascript
const core = require('cheese-js');
const { color } = core;

const colorStr1 = "#FFAABB";
const colorStr2 = "#80FFAABB";
const colorValue1 = color.parseColor(colorStr1);
const colorValue2 = color.parseColor(colorStr2);

console.log("颜色字符串解析值1:", colorValue1);
console.log("颜色字符串解析值2:", colorValue2);
```