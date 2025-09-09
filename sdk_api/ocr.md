---
outline: deep
---

## Ocr相关

```javascript
const core = require('cheese-js');
```

### ddddOcr:`public static dddddOcr(): DDDDOcr` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const ocr = core.ocr;
const converters = core.converters;
const base = core.base;
const filese = core.files;
const images = core.cv.images;
let c = ocr.dddddOcr()
//训练好的推理模型下载：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234 （其他 >Ai模型 >paddleocr模型）
if (c.init("/storage/emulated/0/Pictures/model")) {
//测试 ocr
    console.log("***************测试ocr")
    let a = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/3.png"))
    console.log(c.ocr(a))
    base.release(a)

//测试目标检测
    console.log("***************测试目标检测")
    let b = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/5.jpg"))
    let r = c.det(b)
    console.log(r)
    files.save(images.drawJsonBoundingBoxes(b,r), "/storage/emulated/0/test1.png") //保存到本地绘制图片
    base.release(b)

//测试滑块，算法 1
    console.log("***************测试滑块，算法 1")
    let image1 = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/a.png"))
    let image2 = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/b.png"))
    let r1 = c.match(image1,image2)
    console.log(r1)
    base.release(image1)
    base.release(image2)


//测试坑位匹配
    console.log("***************测试坑位匹配")
    let image3 = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/c.jpg"))
    let image4 = converters.streamToBitmap(converters.sdToStream(path.ASSETS_DIRECTORY.path+"/d.jpg"))
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
const core = require('cheese-js'); //导入核心模块
const ocr = core.ocr;
const converters = core.converters;
let bit = converters.assetsToBitmap("1.png")
let d = ocr.mlkitOcr(bit, ocr.CHINESE).result
for (let i = 0; i <d.getTextBlocks().size() ; i++) {
    console.log("文本", d.getTextBlocks().get(i).getText(),"位置",d.getTextBlocks().get(0).getBoundingBox());
}

```

### paddleOcrv4:`public static paddleOcrv4(): paddleOcrv4` :white_check_mark:

**用法示例**:

```javascript
//训练好的推理模型下载：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234 （其他 >Ai模型 >paddleocr模型）
const core = require('cheese-js'); //导入核心模块
const {ocr, base, image, path, converters} = core;
let paddle = ocr.paddleOcrv4()
var src = converters.assetsToBitmap("home.png")
if (src != null) {
    //ncnn版ppocr  模型命名规则 det模型 paddleocr_det rec模型 paddleocr_rec 标签文件paddleocr_keys 支持v3和v4模型 加载模型路径只需要填paddleocr_det.param paddleocr_rec.param paddleocr_det.bin paddleocr_rec.bin  paddleocr_keys.txt 所在的目录即可
    if (paddle.init(path.ASSETS_DIRECTORY.path + "/ppocr")) {
        console.log(src)
        const start = Date.now();
        const r = paddle.ocr(src);
        const duration = Date.now() - start;
        console.log(`OCR检测耗时: ${duration} 毫秒`);
        const boundingBoxes = []; // 初始化空数组
        for (let i = 0; i < r.length; i++) {
            console.log(`index ${i}`);
            console.log(`  文本: ${r[i].text}`);
            console.log(`  概率: ${r[i].prob}`);
            console.log(`  边界: left=${r[i].left}, top=${r[i].top}, right=${r[i].right}, bottom=${r[i].bottom}`);
            // 将当前边界框对象添加到 boundingBoxes 数组
            boundingBoxes.push({
                text: r[i].text,
                left: r[i].left,
                top: r[i].top,
                right: r[i].right,
                bottom: r[i].bottom,
            });
        }

        let bit = image.drawJsonBoundingBoxes(src, JSON.stringify(boundingBoxes))
        image.showBitmapView(bit)
        base.release(bit)
    }
    base.release(src)
}
```


### paddleOcrv5:`public static paddleOcrv5(): paddleOcrv5` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js');
const converters =  core.converters;
const ocr =  core.ocr;
let pp = ocr.paddleOcrv5()
var startTime = Date.now(); // 记录开始时间

if (pp.init()) {
    var endTime = Date.now(); // 记录初始化结束时间
    console.log("ppocrv5初始化成功，耗时 " + (endTime - startTime) + " 毫秒");

    var bitmap = converters.assetsToBitmap("1.png");
    var inferStartTime = Date.now(); // 记录识别开始时间
    var result = pp.ocr(bitmap);
    var inferEndTime = Date.now(); // 记录识别结束时间

    console.log("识别结果：", result);
    console.log("识别耗时 " + (inferEndTime - inferStartTime) + " 毫秒");
} else {
    console.log("ppocrv5初始化失败");
}
```


