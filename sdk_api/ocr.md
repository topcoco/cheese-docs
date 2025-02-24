---
outline: deep
---

## Ocr相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### ddddOcr:`public static dddddOcr(): DDDDOcr` :white_check_mark:

**用法示例**:

```javascript
const ocr = core.ocr;
const converters = core.converters;
const base = core.base;
const filese = core.files;
const images = core.cv.images;
let c = ocr.dddddOcr()
//ddddocr和相关模型可在cheese官方网盘获取：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234
if (c.init("/storage/emulated/0/Pictures/model")) {
//测试 ocr
    console.log("***************测试ocr")
    let a = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/3.png"))
    console.log(c.ocr(a))
    base.release(a)

//测试目标检测
    console.log("***************测试目标检测")
    let b = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/5.jpg"))
    let r = c.det(b)
    console.log(r)
    files.save(images.drawJsonBoundingBoxes(b,r), "/storage/emulated/0/test1.png") //保存到本地绘制图片
    base.release(b)

//测试滑块，算法 1
    console.log("***************测试滑块，算法 1")
    let image1 = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/a.png"))
    let image2 = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/b.png"))
    let r1 = c.match(image1,image2)
    console.log(r1)
    base.release(image1)
    base.release(image2)


//测试坑位匹配
    console.log("***************测试坑位匹配")
    let image3 = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/c.jpg"))
    let image4 = converters.streamToBitmap(converters.sdToStream(os.ASSETS_DIRECTORY.path+"/d.jpg"))
    let r2 = c.match(image3,image4)
    console.log(r2)
    base.release(image3)
    base.release(image4)

}
```

### mlkitOcr:`public static mlkitOcr(bitmap: Bitmap,recognizer: number): Text` :white_check_mark:

**扩展属性**:

- 识别模式为简体中文、繁体中文:`CHINESE`
- 识别模式为英语、意大利语、法语、西班牙语、葡萄牙语和罗马尼亚语:`LATIN`

**参数**:

- ⭐`Bitmap`(bitmap):Bitmap对象
- ⭐`number`(recognizer):识别模式
- ⭐`Callback`(callback):识别结果回调


**用法示例**:

```javascript
const ocr = core.ocr;
const converters = core.converters;
let bit = converters.streamToBitmap(converters.assetsToStream("1.png"))
let d = ocr.mlkitOcr(bit, ocr.CHINESE).result
console.log(d.text)
for (const item of d.textBlocks) {
    console.log("位置", item.boundingBox);
}
```

### paddleOcr:`public static paddleOcr(): PaddleOcr` :white_check_mark:

**用法示例**:

```javascript
const ocr = core.ocr;
const recordscreen = core.recordScreen;
let paddle = ocr.paddleOcr()
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
        let r = paddle.ocr("/storage/emulated/0/ppocr",src)
        for (let i = 0; i < r.size(); i++) {
            console.log("位置", i, "值", r.get(i));
        }

    }
}
```
