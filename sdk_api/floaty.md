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

const floaty = core.floaty;
const xml = core.ui.xml;
const base = core.base;
let view=xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.runOnUi(() => {
    floaty.floatWith().setContentView(view)
        .setDraggable()
        .setWidth(500)
        .setHeight(200)
        .addWindowFlags(LayoutParams.FLAG_NOT_TOUCH_MODAL | LayoutParams.FLAG_NOT_FOCUSABLE)
        .setWindowType(LayoutParams.TYPE_APPLICATION_OVERLAY)
        .setDuration(1000)
        .show();
})

```

### 绘制矩形:`drawToScreen(...args: any[]): EasyWindow<any> ` :white_check_mark:

**参数**:

- ⭐`string` (args[0]): 矩形外文本
- ⭐`number` (args[1]): 文本颜色
- ⭐`number` (args[2]): 矩形框颜色
- ⭐`Rect` (args[4]): 矩形框范围


**返回值**:

- :green_circle:`EasyWindow<any>`:悬浮窗根对象
- :red_circle:null

**用法示例**:

```javascript

const floaty = core.floaty;
const base = core.base;
base.runOnUi(()=>{
    floaty.getEasyWindowClass().recycleAll()
    floaty.drawToScreen("相似度：90%",base.Rect1(58, 182, 173, 331)) .setDuration(1000).show()
})

```
