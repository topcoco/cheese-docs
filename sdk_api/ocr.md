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
config.setRunType(ocr.LitePowerMode._LITE_POWER_HIGH_)
config.setCpuPowerMode(ocr.RunType._All_)
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