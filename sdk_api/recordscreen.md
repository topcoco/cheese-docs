---
outline: deep
---

## 录屏相关

```javascript
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
const core = require('cheese-js'); //导入核心模块

const recordscreen = core.recordscreen;
if (recordscreen.requestPermission(3)) {
    var src = recordscreen.captureScreen(3, 0, 0, 0, -1)
    if (src != null) {
        console.log("截图状态", "成功")
    }else{
        console.log("截图状态", "失败")
    }
}
```

### 检查录屏权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const core = require('cheese-js'); //导入核心模块

const recordscreen = core.recordscreen;
if (recordscreen.checkPermission(3)) {
    console.log("录屏权限正常")
}else{
    console.log("录屏权限不正常")
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

const core = require('cheese-js'); //导入核心模块

const recordscreen = core.recordscreen;
if (recordscreen.requestPermission(3)) {
    console.log("录屏权限请求成功")
}else{
    console.log("录屏权限请求失败")
}

```