---
outline: deep
---

# 感谢所有的贡献者，提交例子时，请务必附上详细的注释和使用方法，以帮助他人快速理解和使用代码。

---

## 识别图片文字

**贡献者**：coco  
**功能描述**：本例展示如何使用 ML Kit OCR 快速识别图片中的文字信息。

```javascript
// 导入核心模块
const ocr = core.ocr;               // OCR 模块，用于文字识别
const converters = core.converters; // 转换器模块，用于图片数据转换

// 加载图片并将其转换为位图格式
let bit = converters.streamToBitmap(converters.assetsToStream("1.png"));

// 使用 ML Kit OCR 进行中文文字识别
let result = ocr.mlkitOcr(bit, ocr.CHINESE).result;

// 输出识别的完整文字内容
console.log("识别结果:", result.text);

// 遍历每个文本块，输出其位置信息
result.textBlocks.forEach((block, index) => {
    console.log(`文本块 ${index + 1} 位置:`, block.boundingBox);
});

```