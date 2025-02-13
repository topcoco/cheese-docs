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
//官方模型下载：https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/models_list.md
const files = core.files;
const recordscreen = core.recordScreen;
const ocr = core.ocr;

let paddle = ocr.paddleOcr()
let config = paddle.config()
config.setRunType(ocr.RunType._All_)
config.setCpuPowerMode(ocr.LitePowerMode._LITE_POWER_HIGH_)
config.setDrwwTextPositionBox(true)
config.setModelPath("/storage/emulated/0/models")
config.setDetModelFileName("det") //文件名不带后缀
config.setClsModelFileName("cls") //文件名不带后缀
config.setRecModelFileName("rec") //文件名不带后缀
console.log(paddle.isInit())
if (!paddle.isInit()) {
    console.log(paddle.init())
}
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
        let r = paddle.decode(src)
        console.log(r.getSimpleText())
        console.log(r.getInferenceTime())
        r.getOutputRawResult().forEach((ocrResultModel, index) => {
            console.log(`${index} 文字：${ocrResultModel.label}；文字方向：${ocrResultModel.cls_label}；文字方向置信度：${ocrResultModel.cls_confidenceL}；识别置信度 ${ocrResultModel.confidence}；文字位置：${ocrResultModel.points}`);
        });
        files.save(paddle.decode(src).getImgWithBox(), "/storage/emulated/0/image.png")
    }
}
```
