---
outline: deep
---

## 图像相关 API

```python
from cheese_core import Image, Path
```

### 读取图像: `read(path: str) -> PyImage`  :white_check_mark:

**参数**:

- ⭐`str` (path): 图像文件路径

**返回**:

- `PyImage`: 图像对象（拥有属性 `width`, `height` 等）

**用法示例**:

```python
img = Image.read(source_img_path)
print(f"读取图像尺寸: {img.width}x{img.height}")
```

---

### 保存图像: `save(path: str, img: PyImage) -> bool`  :white_check_mark:

**参数**:

- ⭐`str` (path): 保存文件路径
- ⭐`PyImage` (img): 要保存的图像对象

**返回**:

- `bool`: 保存是否成功

**用法示例**:

```python
test_path = os.path.join(Path.assets_directory(), "test_save.jpg")
result = Image.save(test_path, Image.read(source_img_path))
print("保存是否成功:", result)
print("文件是否存在:", os.path.exists(test_path))
```

---

### ORB特征匹配:
`orb_match(source: PyImage, query: PyImage, nfeatures=6000, scale_factor=1.2, nlevels=8, edge_threshold=31, first_level=0, wta_k=2, score_type=0, patch_size=31, fast_threshold=14) -> list[FeatureMatchResult]`  :white_check_mark:

**参数**:

- ⭐`PyImage` (source): 源图像对象
- ⭐`PyImage` (query): 查询图像对象
- ⭐`int` (nfeatures=6000): 保留的特征点数量上限
- ⭐`float` (scale_factor=1.2): 图像金字塔缩放因子
- ⭐`int` (nlevels=8): 金字塔层级数
- ⭐`int` (edge_threshold=31): 边缘阈值
- ⭐`int` (first_level=0): 金字塔首层索引
- ⭐`int` (wta_k=2): WTA-K算法参数
- ⭐`int` (score_type=0): 匹配评分类型
- ⭐`int` (patch_size=31): 补丁（patch）尺寸
- ⭐`int` (fast_threshold=14): FAST检测阈值

**返回**:

- `list[FeatureMatchResult]`: 匹配结果列表，每项有 `.center` 坐标属性

**用法示例**:

```python
source = Image.read(source_img_path)
query = Image.read(query_img_path)
matches = Image.orb_match(
    source=source,
    query=query,
    nfeatures=6000,
    scale_factor=1.2,
    nlevels=8,
    edge_threshold=31,
    first_level=0,
    wta_k=2,
    score_type=0,
    patch_size=31,
    fast_threshold=14
)
if matches:
    print("ORB匹配特征点数量:", len(matches))
    center = matches[0].center
    print("第一个匹配中心坐标:", center)
```

---

### SIFT特征匹配:
`sift_match(source: PyImage, query: PyImage, nfeatures=5000, nOctaveLayers=3, contrastThreshold=0.04, edgeThreshold=3.0, sigma=1.6) -> list[FeatureMatchResult]`  :white_check_mark:

**参数**:

- ⭐`PyImage` (source): 源图像对象
- ⭐`PyImage` (query): 查询图像对象
- ⭐`int` (nfeatures=5000): 保留特征点数量上限
- ⭐`int` (n_octave_layers=3): 每组的层数
- ⭐`float` (contrast_threshold=0.04): 对比度阈值
- ⭐`float` (edge_threshold=3.0): 边缘阈值
- ⭐`float` (sigma=1.6): 高斯平滑参数

**返回**:

- `list[FeatureMatchResult]`: 匹配结果列表，每项有 `.center` 坐标属性

**用法示例**:

```python
source = Image.read(source_img_path)
query = Image.read(query_img_path)
matches = Image.sift_match(
    source,
    query,
    nfeatures=5000,
    nOctaveLayers=3,
    contrastThreshold=0.04,
    edgeThreshold=3.0,
    sigma=1.6
)
if matches:
    print("SIFT匹配特征点数量:", len(matches))
    center = matches[0].center
    print("第一个匹配中心坐标:", center)
```

---

