---
outline: deep
---

## 图像相关

```javascript
const core = require('cheese-js');
const image = core.image;
```

### 读取图像: `read(path: string): JsImage`  :white_check_mark:

**参数**:

- ⭐`string` (path): 图像文件路径

**返回**:

- `JsImage`: 图像对象，包含属性：
    - `width: number`: 图像宽度
    - `height: number`: 图像高度
    - `data: Uint8Array`: 图像数据

**用法示例**:

```javascript
const core = require('cheese-js');
const image = core.image;
const img = image.read("/path/to/image.jpg");
if (img) {
    console.log(`图像尺寸: ${img.width}x${img.height}`);
}
```

### 保存图像: `save(path: string, JsImage: any): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (path): 保存文件路径
- ⭐`any` (JsImage): 要保存的图像对象

**返回**:

- `boolean`: 是否成功保存图像

**用法示例**:

```javascript
const core = require('cheese-js');
const image = core.image;
const img = image.read("/path/to/source.jpg");
const result = image.save("/path/to/output.jpg", img);
console.log(`保存结果: ${result}`);
```

### SIFT特征匹配: `sift(sourceImage: JsImage, queryImage: JsImage, features: number, octaveLayers: number, contrastThresh: number, edgeThresh: number, sigma: number): FeatureMatchResult[]`  :white_check_mark:

**参数**:

- ⭐`JsImage` (sourceImage): 源图像对象
- ⭐`JsImage` (queryImage): 查询图像对象
- ⭐`number` (features): 保留特征点数量上限
- ⭐`number` (octaveLayers): 每组的层数
- ⭐`number` (contrastThresh): 对比度阈值
- ⭐`number` (edgeThresh): 边缘阈值
- ⭐`number` (sigma): 高斯平滑参数

**返回**:

- `FeatureMatchResult[]`: 匹配结果数组，每项包含：
    - `index: number`: 特征点索引
    - `points: number[][]`: 特征点坐标集合 [[x1,y1], [x2,y2], ...]
    - `center: number[]`: 中心点坐标 [x, y]

**用法示例**:

```javascript
const core = require('cheese-js');
const image = core.image;
const sourceImage = image.read("/path/to/source.jpg");
const queryImage = image.read("/path/to/query.jpg");

const matches = image.sift(
    image.read(path.assets_directory()+"/1.png"),
    image.read(path.assets_directory()+"/2.png"),
    5000,   // maxKeypoints
    3,      // nOctaveLayers
    0.04,   // contrastThreshold
    3.0,    // edgeThreshold
    1.6     // sigma
);
if (matches) {
    // 遍历所有匹配结果
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        console.log(`匹配点#${match.index}`);
        console.log("中心坐标:", match.center.join(","));

        // 遍历所有特征点
        for (let j = 0; j < match.points.length; j++) {
            const point = match.points[j];
            console.log(`  特征点${j}: x=${point[0]}, y=${point[1]}`);
        }
    }
} else {
    console.log("未找到匹配特征");
}
```