---
outline: deep
---

## 录屏相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 请求录屏权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查录屏权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const recordscreen = core.recordScreen;
if (recordscreen.checkPermission()) {
    console.log("权限正常")
}

```

### 截屏: `captureScreen(timeout: number, left: number, top: number, bottom: number, right: number): Bitmap` :white_check_mark:

- 范围有负数则全屏截取

:lock:**权限**: 录屏

**参数**:

- ⭐`number` (timeout):超时时间
- ⭐`number` (left):左边界
- ⭐`number` (top):上边界
- ⭐`number` (bottom):下边界
- ⭐`number` (right):右边界

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```javascript

const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
    }
}


```