---
outline: deep
---

## 图片相关

```javascript
const core = require('cheese-js');
```

### 裁剪图片: `public static clip(bitmap: Bitmap, left: number, top: number, right: number, bottom: number): Bitmap` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (bitmap): 要裁剪的原始图片
- ⭐ `number` (left): 裁剪区域左边界坐标
- ⭐ `number` (top): 裁剪区域上边界坐标
- ⭐ `number` (right): 裁剪区域右边界坐标
- ⭐ `number` (bottom): 裁剪区域下边界坐标

**返回值**:

- :green_circle: `Bitmap` — 裁剪后的图片对象
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const converters = core.converters;
const files = core.files;
let bit= image.clip(converters.assetsToBitmap("1.png"),269, 84, 832, 159)


if(bit!=null){
    if (files.save(bit,"/storage/emulated/0/clip1.png")){
        console.log("保存图片成功")
    }else{
        console.log("保存图片失败")
    }
}else{
    console.log("剪切图片失败")
}
```

### 读取图片: `public static read(path: string): Bitmap` :white_check_mark:

**参数**:

- ⭐ `string` (path): 图片文件的路径

**返回值**:

- :green_circle: `Bitmap` — 加载后的图片对象
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js');
const image = core.image;

const bitmap = image.read("/storage/emulated/0/example.png");
console.log("图片宽度:", bitmap.getWidth());
```


### 释放图片资源: `public static release(bitmap: Bitmap): void` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (bitmap): 需要释放的图片对象

**返回值**:

- :green_circle: `void` — 无返回值，释放资源
- :red_circle: 无（参数错误或图片无效时可能无效）

**用法示例**:

```javascript
const core = require('cheese-js');
const image = core.image;

const bitmap = image.read("/storage/emulated/0/example.png");
// 使用图片...
image.release(bitmap);
console.log("图片资源已释放");
```


### 绘制矩形及文字到图片: `public static drawRectOnBitmap(...): Bitmap` :white_check_mark:

**重载形式**:

1. `drawRectOnBitmap(bit: Bitmap, text: string, rect: any): Bitmap`  
2. `drawRectOnBitmap(bit: Bitmap, text: string, textColor: number, borderedColor: number, rect: any): Bitmap`

**参数**:

- ⭐ `Bitmap` (bit): 要绘制的目标图片
- ⭐ `string` (text): 要绘制的文本
-  `number` (textColor, 可选): 文本颜色（如 `color.WHITE` 表示白色）
-  `number` (borderedColor, 可选): 边框颜色（如 `color.WHITE` 表示白色）
- ⭐ `any` (rect): 矩形区域（包含位置信息）

**返回值**:

- :green_circle: `Bitmap` — 绘制完成后的图片对象
- :red_circle: null（参数错误时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const image = core.image;
const path = core.path;
const base = core.base;
let bit=image.read(path.ASSETS_DIRECTORY+"/1.png")
let m2=image.drawRectOnBitmap(bit,"测试",base.Rect(24,885,474,1129))
image.showBitmapView(m2);
image.release(bit)
image.release(m2)
```

### 绘制点和文字到图片: `public static drawPointOnBitmap(...): Bitmap` :white_check_mark:

**重载形式**:

1. `drawPointOnBitmap(bit: Bitmap, text: string, x: number, y: number): Bitmap`  
2. `drawPointOnBitmap(bit: Bitmap, text: string, textColor: number, pointColor: number, x: number, y: number): Bitmap`

**参数**:

- ⭐ `Bitmap` (bit): 要绘制的目标图片
- ⭐ `string` (text): 要绘制的文本
- `number` (textColor, 可选): 文本颜色（如 `color.WHITE` 表示白色）
- `number` (pointColor, 可选): 点的颜色（如 `color.WHITE` 表示白色）
- ⭐ `number` (x): 点的横坐标
- ⭐ `number` (y): 点的纵坐标

**返回值**:

- :green_circle: `Bitmap` — 绘制完成后的图片对象
- :red_circle: null（参数错误时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const image = core.image;
const path = core.path;
let bit=image.read(path.ASSETS_DIRECTORY+"/1.png")
let m2=image.drawPointOnBitmap(bit,"测试",399,1781)
image.showBitmapView(m2);
image.release(bit)
image.release(m2)
```

### 显示图片视图: `public static showBitmapView(b: Bitmap): void` :white_check_mark:

**返回值**:

- ⭐ :green_circle: `void` — 无返回值，执行后显示图像视图
- ⭐ :red_circle: null（失败时）

**参数**:

- `Bitmap` (b): 要显示的图片对象

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const image = core.image;
const path = core.path;
let bit=image.read(path.ASSETS_DIRECTORY+"/1.png")
image.showBitmapView(bit);
image.release(bit)
```

### 绘制 JSON 边界框: `public static drawJsonBoundingBoxes(bitmap: Bitmap, json: string): Bitmap` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (bitmap): 原始图像对象
- ⭐ `string` (json): 包含边界框信息的 JSON 字符串

**返回值**:

- :green_circle: `Bitmap` — 返回绘制了边界框的新图像对象
- :red_circle: null（失败时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const converters = core.converters;
const files = core.files;


const boundingBoxes = [
    { text: "测试1", letf: 885, top: 474, right: 1129,bottom:23 },
    { text: "测试2", letf: 253, top: 424, right: 1149,bottom:23  }
];

let bit= image.drawJsonBoundingBoxes(converters.assetsToBitmap("1.png"), JSON.stringify(boundingBoxes))


if(bit!=null){
    if (files.save(bit,"/storage/emulated/0/1.png")){
        console.log("保存图片成功")
    }else{
        console.log("保存图片失败")
    }
}else{
    console.log("剪切图片失败")
}
```

### 解码二维码: `public static decodeQRCode(bitmap: Bitmap): string` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (bitmap): 含有二维码的图像对象

**返回值**:

- :green_circle: `string` — 解码后的二维码内容
- :red_circle: null（无法识别时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const files = core.files;
const base = core.base;
let m2=image.generateQRCode("我是内容",500,500)
if (files.save(m2,"/storage/emulated/0/m2.png")){
    console.log("保存二维码成功")
}else{
    console.log("保存二维码失败")
}
console.log("二维码内容",image.decodeQRCode(m2))
base.release(m2)
```

### 生成二维码: `public static generateQRCode(content: string, width: number, height: number): Bitmap` :white_check_mark:

**参数**:

- ⭐ `string` (content): 要编码为二维码的文本内容  
- ⭐ `number` (width): 二维码图像的宽度（像素）  
- ⭐ `number` (height): 二维码图像的高度（像素）  

**返回值**:

- :green_circle: `Bitmap` — 生成的二维码图像对象  
- :red_circle: null（生成失败时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const files = core.files;
const base = core.base;
let m2=image.generateQRCode("我是内容",500,500)
if (files.save(m2,"/storage/emulated/0/m2.png")){
    console.log("保存二维码成功")
}else{
    console.log("保存二维码失败")
}
console.log("二维码内容",image.decodeQRCode(m2))
base.release(m2)
```

### 缩放图像: `public static resize(inputImage: Bitmap, scale: number): Bitmap` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 需要缩放的图像对象  
- ⭐ `number` (scale): 缩放比例（1.0以上放大 1.0以下缩小 1.0原图）

**返回值**:

- :green_circle: `Bitmap` — 缩放后的图像对象  
- :red_circle: null（缩放失败时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const converters = core.converters;
const files = core.files;
let b =converters.assetsToBitmap("1.png")
console.log("原图高度",b.getHeight())
let bit= image.resize(b,2.0) //放大  1.0以上放大 1.0以下缩小 1.0原图
if(bit!=null){
    console.log("放大后高度",bit.getHeight())
    if (files.save(bit,"/storage/emulated/0/enlarge.png")){
        console.log("保存图片成功")
    }else{
        console.log("保存图片失败")
    }
}else{
    console.log("剪切图片失败")
}
```

### 二值化图像: `public static binarize(inputImage: Bitmap, threshold: number): Bitmap` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 需要二值化的图像对象  
- ⭐ `number` (threshold): 阈值，像素灰度值高于该值则变为白色，低于则变为黑色

**返回值**:

- :green_circle: `Bitmap` — 二值化后的图像对象  
- :red_circle: null（二值化失败时）

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const image = core.image;
const converters = core.converters;
const files = core.files;
let bit= image.binarize(converters.assetsToBitmap("1.png"),128.0) //阈值越低，越多区域会变成白色，阈值越高越多变黑


if(bit!=null){
    if (files.save(bit,"/storage/emulated/0/binarize.png")){
        console.log("保存图片成功")
    }else{
        console.log("保存图片失败")
    }
}else{
    console.log("剪切图片失败")
}
```

### 根据目标图缩放查找图像: `public static findImgByResize(inputImage: Bitmap, targetImage: Bitmap, threshold: number, width: number, height: number): Point` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 原始图像  
- ⭐ `Bitmap` (targetImage): 目标查找图像  
- ⭐ `number` (threshold): 匹配阈值，范围一般为 [0.0, 1.0]，数值越大匹配越严格  
- ⭐ `number` (width): 目标图制作的屏幕的宽度  
- ⭐ `number` (height):  目标图制作的屏幕的高度

**返回值**:

- :green_circle: `Point` — 找到的图像位置点（x, y）  
- :red_circle: null（未找到时）

**用法示例**:

```javascript

const core = require('cheese-js'); // 导入核心模块
const imageProcessor = core.image;
const formatConverters = core.converters;

const templateImage = formatConverters.assetsToBitmap("1.png");
const searchTargetImage = formatConverters.assetsToBitmap("image.png");

const matchedPosition = imageProcessor.findImgByResize(
    templateImage,
    searchTargetImage,
    0.5,
    1080,
    1920
);
console.log(matchedPosition)

//标注处理后的图像
const annotatedResultImage = imageProcessor.drawPointOnBitmap(
    templateImage,
    "match-result",
    matchedPosition.x,
    matchedPosition.y
);
//展示标注后的图像
imageProcessor.showBitmapView(annotatedResultImage);
imageProcessor.release(templateImage);
imageProcessor.release(annotatedResultImage);
```

### 模板匹配查找图像: `public static findImgByTemplate(inputImage: Bitmap, targetImage: Bitmap, threshold: number): Point` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 原始图像  
- ⭐ `Bitmap` (targetImage): 目标模板图像  
- ⭐ `number` (threshold): 匹配阈值，范围一般为 [0.0, 1.0]，数值越大匹配越严格

**返回值**:

- :green_circle: `Point` — 找到的图像位置点（x, y）  
- :red_circle: null（未找到时）

**用法示例**:

```javascript

const core = require('cheese-js'); // 导入核心模块
const imageProcessor = core.image;
const formatConverters = core.converters;

const templateImage = formatConverters.assetsToBitmap("1.png");
const searchTargetImage = formatConverters.assetsToBitmap("image.png");

const matchedPosition = imageProcessor.findImgByTemplate(
    templateImage,
    searchTargetImage,
    0.5
);
console.log(matchedPosition)

//标注处理后的图像
const annotatedResultImage = imageProcessor.drawPointOnBitmap(
    templateImage,
    "match-result",
    matchedPosition.x,
    matchedPosition.y
);
//展示标注后的图像
imageProcessor.showBitmapView(annotatedResultImage);
imageProcessor.release(templateImage);
imageProcessor.release(annotatedResultImage);
```

### 使用 SIFT 查找图像: `public static findImgBySift(inputImage: Bitmap, targetImage: Bitmap, maxDistance: number): Point` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 原始图像  
- ⭐ `Bitmap` (targetImage): 目标图像  
- ⭐ `number` (maxDistance): 最大距离阈值，范围一般为 [0.1, 0.5]，距离越小匹配越严格

**返回值**:

- :green_circle: `Point` — 找到的图像位置点（x, y）  
- :red_circle: null（未找到时）

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const imageProcessor = core.image;
const formatConverters = core.converters;

const templateImage = formatConverters.assetsToBitmap("1.png");
const searchTargetImage = formatConverters.assetsToBitmap("image.png");

const matchedPosition = imageProcessor.findImgBySift(
    templateImage,
    searchTargetImage,
    5.1
);

//标注处理后的图像
const annotatedResultImage = imageProcessor.drawPointOnBitmap(
    templateImage,
    "match-result",
    matchedPosition.x,
    matchedPosition.y
);
//展示标注后的图像
imageProcessor.showBitmapView(annotatedResultImage);
imageProcessor.release(templateImage);
imageProcessor.release(annotatedResultImage);
```

### 快速查找图像: `public static fastFindImg(inputImage: Bitmap, targetImage: Bitmap, threshold: number): Point` :white_check_mark:

**参数**:

- ⭐ `Bitmap` (inputImage): 原始图像  
- ⭐ `Bitmap` (targetImage): 目标图像  
- ⭐`number` (threshold): 匹配阈值，范围一般为 [0.0, 1.0]，数值越大匹配越严格

**返回值**:

- :green_circle: `Point` — 找到的图像位置点（x, y）  
- :red_circle: null（未找到时）

**用法示例**:

```javascript

const core = require('cheese-js'); // 导入核心模块
const imageProcessor = core.image;
const formatConverters = core.converters;

const templateImage = formatConverters.assetsToBitmap("1.png");
const searchTargetImage = formatConverters.assetsToBitmap("image.png");

const matchedPosition = imageProcessor.fastFindImg(
    templateImage,
    searchTargetImage,
    0.5
);
console.log(matchedPosition)

//标注处理后的图像
const annotatedResultImage = imageProcessor.drawPointOnBitmap(
    templateImage,
    "match-result",
    matchedPosition.x,
    matchedPosition.y
);
//展示标注后的图像
imageProcessor.showBitmapView(annotatedResultImage);
imageProcessor.release(templateImage);
imageProcessor.release(annotatedResultImage);
```