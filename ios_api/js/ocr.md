---
outline: deep
---

## OCR 文字识别相关

```javascript
const core = require('cheese-js');
const ocr = core.ocr;
```

### PaddleOCR识别: `ppocr(JsImage: any, modelDir: string): JavaPPOCRResults` :white_check_mark:

**参数**:

- ⭐`any` (JsImage): 图像对象
- ⭐`string` (modelDir): 模型目录路径

**返回**:

- `JavaPPOCRResults`: 识别结果对象，包含 `results` 数组和 `length` 属性

**用法示例**:

```javascript
const core = require('cheese-js');
const ocr = core.ocr;
const image = core.image;
let c = ocr.ppocr(image.read(path.assets_directory()+"/1.png"),path.assets_directory()+"/pp")
for (let i = 0; i <c.results.length ; i++) {
    let result =c.results[i]
    console.log(result.index);
    console.log(result.text)
    console.log(result.score)
    console.log(result.points.join(","))
    if (result.charPositions) {
        for (let j = 0; j < result.charPositions.length; j++) {
            const posValue = result.charPositions[j];
            console.log(`字符 ${j} 位置值: ${posValue.posValue}`);
        }
    }

}
```

### ddddOCR识别: `ddddocr(JsImage: any, modelPath: string, paramPath: string, keysPath: string, threads: number, useVulkan: boolean): JavaDdddOcrResult` :white_check_mark:

**参数**:

- ⭐`any` (JsImage): 图像对象
- ⭐`string` (modelPath): 模型文件路径
- ⭐`string` (paramPath): 参数文件路径
- ⭐`string` (keysPath): keys 文件路径
- ⭐`number` (threads): 线程数
- ⭐`boolean` (useVulkan): 是否启用 Vulkan

**返回**:

- `JavaDdddOcrResult`: 识别结果对象，包含 `text` 和 `probability` 属性

**用法示例**:

```javascript
const core = require('cheese-js');
const ocr = core.ocr;
const image = core.image;
const result = ocr.ddddocr(image.read(path.assets_directory()+"/dddd/2.png"),path.assets_directory()+"/dddd/ddddrec.bin",path.assets_directory()+"/dddd/ddddrec.param",path.assets_directory()+"/dddd/ddddocr_keys.txt",4,false)
if (result && result.text) {
    console.log(`识别文本: ${result.text}`);
    console.log(`置信度: ${result.probability}`);
}
```