---
outline: deep
---

## Yolo相关

```javascript

const core = require('cheese-js');
```

### YoloV8图片检测: `detect(bitmap: Bitmap,path: string, list: Array<String>, cpugpu: number): Array<Yolov8Ncnn["Obj"]> ` :white_check_mark:

**扩展属性**:

- 检测个数:`length`
- 第一个的物体标签:`[0].label`
- 第一个的物体中心x:`[0].x`
- 第一个的物体中心y:`[0].y`
- 第一个的物体宽:`[0].w`
- 第一个的物体高:`[0].h`
- 第一个的物体置信度:`[0].prob`

**参数**:

- ⭐`bitmap` (bitmap):bit对象
- ⭐`string` (path):模型路径
- ⭐`string[]`(labellist):标签列表
- ⭐`number` (cpugpu):工作模式选择(CPUGPU=0/1)

**返回值**:

- :green_circle:`Array<Yolov8Ncnn["Obj"]> `:Array<Yolov8Ncnn["Obj"]>结构体对象
- :red_circle:null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
//训练好的推理模型下载：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234 （其他 >Ai模型 >yolov8模型）
const yolo = core.yolo;
const files = core.files;
const converters = core.converters;
const path = core.path;
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard.md", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {
    //ncnn版yolov8  模型命名规则 yolo.param yolo.bin 加载模型路径只需要填yolo.param yolo.bin 所在的目录即可
    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    var v8obej = yolo.detect(bit,path.ASSETS_DIRECTORY.path+"/yolo_model", tabl, 0)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```

### YoloV8检测速度: `getSpeed(): number` :white_check_mark:

**返回值**:

- :green_circle:`number`:本次的检测速度 (ms)
- :red_circle:`number`:0.0

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
//训练好的推理模型下载：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234 （其他 >Ai模型 >yolov8模型）
const yolo = core.yolo;
const files = core.files;
const converters = core.converters;
const path = core.path;
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard.md", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {

    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    var v8obej = yolo.detect(bit,path.ASSETS_DIRECTORY.path+"/yolo_model", tabl, 0)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```

### YoloV8 绘制检测框信息: `draw(obj:Array<any>,bit:Bitmap): Bitmap` :white_check_mark:

**参数**:

- ⭐`V8Obj[]` (objects):V8Obj[]对象
- ⭐`bit` (bit):bit对象

**返回值**:

- :green_circle:`bit`:bit对象
- :red_circle:null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
//训练好的推理模型下载：https://pan.baidu.com/s/1n9RUCE8jmOaf0PpGdpjr7A?pwd=1234 （其他 >Ai模型 >yolov8模型）
const yolo = core.yolo;
const files = core.files;
const converters = core.converters;
const path = core.path;
let tabl = [
    "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light",
    "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
    "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple",
    "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
    "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard.md", "cell phone",
    "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
    "hair drier", "toothbrush"
];
try {

    var bit = converters.streamToBitmap(converters.assetsToStream("image.png"))
    var v8obej = yolo.detect(bit,path.ASSETS_DIRECTORY.path+"/yolo_model", tabl, 0)
    console.log(v8obej[0].label)
    console.log(yolo.getSpeed())
    files.save(yolo.draw(v8obej, bit),"/storage/emulated/0/Pictures/4.png")
} catch (e) {
    console.log(e);
}
```



