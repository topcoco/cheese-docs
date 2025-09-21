---
outline: deep
---

## 录屏相关

```javascript
const core = require('cheese-js');
const recordscreen = core.recordscreen;
```

### 请求录屏权限: `request_permission(mode: number, time: number): boolean`  :white_check_mark:

**参数**:

- ⭐`number` (mode): 录屏模式
- ⭐`number` (time): 时间参数

**返回**:

- `boolean`: 是否成功请求录屏权限

**用法示例**:

```javascript
const core = require('cheese-js');
const recordscreen = core.recordscreen;
const result = recordscreen.request_permission(1, 30);
console.log(`权限请求结果: ${result}`);
```

### 截屏: `capture_screen(mode: number, time: number): JsImage`  :white_check_mark:

**参数**:

- ⭐`number` (mode): 截屏模式
- ⭐`number` (time): 时间参数

**返回**:

- `any`: JsImage 对象或 null

**用法示例**:

```javascript
const core = require('cheese-js');
const recordscreen = core.recordscreen;
const image = recordscreen.capture_screen(1, 0);
if (image) {
    console.log("截屏成功");
} else {
    console.log("截屏失败");
}
```