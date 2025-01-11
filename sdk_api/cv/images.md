---
outline: deep
---

## 图片相关

<div style="background-color: #2f9295; border-left: 6px solid #ffcc00; padding: 15px; margin: 15px 0; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); font-weight: bold;">
🚨 重要提示：调用图片相关方法请先调用Base相关方法的initOpenCV来初始化Opencv。
</div>

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
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