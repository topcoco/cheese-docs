---
outline: deep
---

## 图片相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```





### 识别二维码:`public static decodeQRCode(bitmap: Bitmap): string` :white_check_mark:

**参数**:

- ⭐`Bitmap` (bitmap):二维码Bitmap对象


**返回值**:

- :green_circle:`Bitmap`:识别内容
- :red_circle:null

**用法示例**:

```javascript
const images = core.cv.images;
const converters = core.converters;
const base = core.base;
let bit = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/test.png"))
console.log(images.decodeQRCode(bit))
base.release(bit)
```

### 生成二维码:`public static generateQRCode(content: string, width: number, height: number): Bitmap` :white_check_mark:

**参数**:

- ⭐`string` (content):二维码内容
- ⭐`width` (width):二维码宽
- ⭐`height` (height):二维码高

**返回值**:

- :green_circle:`Bitmap`:生成的二维码Bitmap对象
- :red_circle:null

**用法示例**:

```javascript
const images = core.cv.images;
const converters = core.converters;
const base = core.base;
let bit =images.generateQRCode("我是内容",500,500)
base.release(bit)
```


### 绘制Json选框:` public static drawJsonBoundingBoxes(bitmap: Bitmap, json: string): Bitmap` :white_check_mark:

**参数**:

- ⭐`Bitmap` (bitmap):目标图像
- ⭐`string` (json):框选数据

**返回值**:

- :green_circle:`Bitmap`:生成的图片Bitmap对象
- :red_circle:null

**用法示例**:

```javascript
const images = core.cv.images;
const converters = core.converters;
const base = core.base;
const files = core.files;
let b = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/5.jpg"))
files.save(images.drawJsonBoundingBoxes(b,"{"x1":55,"y1":343,"x2":88,"y2":375},{"x1":27,"y1":344,"x2":59,"y2":377}]), "/storage/emulated/0/test1.png") //保存到本地绘制图片
base.release(b)
```



### 剪切图片:`public static cropBitmap(bitmap: Bitmap, left: number, top: number, right: number, bottom: number): Bitmap` :white_check_mark:

**参数**:

- ⭐`Bitmap` (inputImage):图片
- ⭐`number` (left):左
- ⭐`number` (top):上
- ⭐`number` (right):右
- ⭐`number` (bottom):下

**返回值**:

- :green_circle:`Bitmap`:剪切后的Bitmap对象
- :red_circle:null

**用法示例**:

```javascript
const images = core.cv.images;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    images.cropBitmap(bit, 128,22,352,26)
}
```



### 二值化:`public static binarize(inputImage: Bitmap, threshold: number): Bitmap` :white_check_mark:

**参数**:

- ⭐`Bitmap` (inputImage):图片
- ⭐`number` (threshold):二值化阈值
-

**返回值**:

- :green_circle:`Bitmap`:二值化后的对象
- :red_circle:null

**用法示例**:

```javascript
const images = core.cv.images;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    images.binarize(bit, 128)
}

```

### 同分辨率-Surf找图:

`findImgBySift(inputImage: Bitmap, targetImage: Bitmap, distance: number): IntArray` :white_check_mark:

**参数**:

- ⭐`any` (Bitmap):大图
- ⭐`Bitmap` (targetImage):小图
- ⭐`number` (distance):最大距离(1.0-100.0)
-

**返回值**:

- :green_circle:`Point[]`:坐标数组
- :red_circle:null

**用法示例**:

```javascript

const images = core.cv.images;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    let target = converters.streamToBitmap(converters.assetsToStream("1.png"))
    console.log(images.findImgBySift(bit, target, 1.1))
    base.release(bit)
}

```


### 同分辨率-模板找图:

`findImgByTemplate(inputImage: Bitmap, targetImage: Bitmap, threshold: number): IntArray` :white_check_mark:

**参数**:

- ⭐`any` (Bitmap):大图
- ⭐`Bitmap` (targetImage):小图
- ⭐`number` (threshold):相似度(0.0 ~ 1.0)
-

**返回值**:

- :green_circle:`Point[]`:坐标数组
- :red_circle:null

**用法示例**:

```javascript

const images = core.cv.images;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    let target = converters.streamToBitmap(converters.assetsToStream("1.png"))
    console.log(images.findImgByTemplate(bit, target, 1.1))
    base.release(bit)
}

```

### 全分辨率-Resize找图:

` findImgByResize(inputImage: Bitmap, targetImage: Bitmap,threshold: number, width: number, height: number): IntArray` :
white_check_mark:

**参数**:

- ⭐`any` (Bitmap):大图
- ⭐`Bitmap` (targetImage):小图
- ⭐`number` (threshold):相似度(0.0-1.0)
- ⭐`number` (width):小图制作设备宽
- ⭐`number` (height):小图制作设备高

**返回值**:

- :green_circle:`IntArray`:坐标集合
- :red_circle:null

**用法示例**:

```javascript

const base = core.base;
const recordscreen = core.recordScreen;
const converters = core.converters;
const colors = core.cv.images;
if (recordscreen.requestPermission(3)) {
    let target = converters.streamToBitmap(converters.assetsToStream("image.png"))
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log(images.findImgByResize(bit, target, 0.5, 720, 1280))
    base.release(target)
    base.release(bit)
}

```
