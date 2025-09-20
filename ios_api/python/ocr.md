---
outline: deep
---

## OCR相关 API

```python
from cheese_core import OCR, Path, Image
```

### PPOCR文字识别:
`ppocr(image: PyImage, model_dir: str) -> list[PPOCRResult]`  :white_check_mark:

**参数**:

- ⭐`PyImage` (image): 要识别的图像对象
- ⭐`str` (model_dir): PPOCR模型文件夹路径

**返回**:

- `list[PPOCRResult]`: 识别结果列表，每项拥有属性：
    - `index`: 序号（int）
    - `text`: 识别文本内容（str）
    - `score`: 置信度分数（float）
    - `points`: 文本框坐标列表（List[Tuple[int, int]]）
    - `char_positions`: 每个字符的坐标信息（List[str]）
    - `bounding_box`: 文本包围盒坐标（Tuple[Tuple[int, int], ...]）

**用法示例**:

```python
img = Image.read(source_img_path)
results = OCR.ppocr(img, ppocr_dir)
if results:
    for r in results:
        print("序号:", r.index)
        print("文本:", r.text)
        print("置信度:", r.score)
        print("文本框坐标:", r.points)
        print("字符位置:", r.char_positions)
        print("包围盒:", r.bounding_box)
else:
    print("识别失败")
```

---

### DDDDOCR文字识别:
`ddddocr(image: PyImage, model_path: str, param_path: str, keys_path: str, num_threads: int = 4, use_vulkan: bool = False) -> DDDDOCRResult`  :white_check_mark:

**参数**:

- ⭐`PyImage` (image): 要识别的图像对象
- ⭐`str` (model_path): DDDDOCR模型文件路径（bin文件）
- ⭐`str` (param_path): DDDDOCR参数文件路径（param文件）
- ⭐`str` (keys_path): DDDDOCR字符集文件路径（txt文件）
- ⭐`int` (num_threads=4): 使用的线程数（默认4）
- ⭐`bool` (use_vulkan=False): 是否使用Vulkan加速（默认False）

**返回**:

- `DDDDOCRResult`: 识别结果对象，拥有属性：
    - `text`: 识别出的文本内容（str）
    - `probability`: 置信度分数（float）

**用法示例**:

```python
img = Image.read(source_img_path)
result = OCR.ddddocr(
    img,
    ddddocr_model,
    ddddocr_param,
    ddddocr_keys,
    num_threads=4,
    use_vulkan=False
)
if result:
    print("识别结果:", result.text)
    print("置信度:", result.probability)
else:
    print("识别失败")
```