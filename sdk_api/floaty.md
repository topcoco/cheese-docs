---
outline: deep
---

## 悬浮窗相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 请求悬浮窗权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const floaty = core.floaty;
if (floaty.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查悬浮窗权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const floaty = core.floaty;
if (floaty.checkPermission()) {
    console.log("悬浮窗权限正常")
}

```

### 悬浮窗根:`floatWith(): EasyWindow<any>` :white_check_mark:

**扩展方法**:
- 宽:`setWidth(width:number)`
- 高:`setHeight(height:number)`
- 显示类型:`setWindowType()`
- 标记:`addWindowFlags()`
- 显示时长:`setDuration()`
- 可拖动:`setDraggable()`

**返回值**:

- :green_circle:`EasyWindow<any>`:悬浮窗根对象
- :red_circle:null

**用法示例**:

```javascript
const floaty = new core.floaty;
const xml = core.ui.xml;
const base = core.base;
let view=xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
floaty.floatWith().setContentView(view).setWidth(500)
    .setHeight(500)
    .addWindowFlags(floaty.FLAG_NOT_TOUCH_MODAL | floaty.FLAG_NOT_FOCUSABLE)
    .setWindowType(floaty.TYPE_APPLICATION_OVERLAY)
    .setDuration(1000)
floaty.show()
```
