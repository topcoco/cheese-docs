---
outline: deep
---

## Ui节点相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 筛选节点:`forEachNode(callback:Callback): this` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`any` (callback):筛选回调

**返回值**:

- :green_circle:`this`:当前类对象
- :red_circle:null

**用法示例**:

```javascript
//更多属性请参考代码提示
//isEditable():boolean;
//isDismissable():boolean;
//isChecked():boolean;
//isEnabled():boolean;
//isPassword():boolean;
//isScrollable():boolean;
//isGranularScrollingSupported():boolean;
//isTextSelectable():boolean;
//isImportantForAccessibility():boolean;
//isAccessibilityDataSensitive():boolean;
//getText(): string;
//getViewIdResourceName(): string;
//getWindowId(): number;
//getScopeId(): string;
//getScopeName(): string;
//getClassName(): string;
//getChild(i:number): AccessibilityNodeInfoCompat;
//getBoundsInWindow(outBounds:Rect);
//getBoundsInScreen(outBounds:Rect);
//getRoleDescription():string;
//getStateDescription():string;
//getContentDescription():string;
//const uinode = new core.uinode();
let u =uinode.forEachNode((e) => {
return e.getText()==="连接"
})
if(u.size()>0){
  console.log("节点存在")
console.log(u.get(0).getBounds())
}

let u1 =uinode.forEachNode((e) => {
    let c = e.getBoundsInScreen()
    return c.left===150 && c.top===536 && c.right===864  && c.bottom===603
})
if(u1.size()>0){
  console.log("节点存在")
  console.log(u1.get(0).getText())
}

```

### 判断节点是否存在:`size(): number` :white_check_mark:

:lock:**权限**: 无障碍


**返回值**:

- :green_circle:`number`:节点列表长度
- :red_circle:null

**用法示例**:

```javascript
let u1 =uinode.forEachNode((e) => {
    let c = e.getBoundsInScreen()
    return c.left===150 && c.top===536 && c.right===864  && c.bottom===603
})
if(u1.size()>0){
  console.log("节点存在")
  console.log(u1.get(0).getText())
}
```



### 清除节点缓存:`clearNodeCache(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`any` (callback):筛选回调

**返回值**:

- :green_circle:`this`:当前类对象
- :red_circle:null

**用法示例**:

```javascript
const uinode = new core.uinode();
uinode.clearNodeCache()
```

### 获取节点父亲节点:` getParent(): this` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`uinode`:uinode对象
- :red_circle:null

**用法示例**:

```javascript
const uinode = new core.uinode();
let parent = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getParent().getText()
console.log(parent)
```

### 获取节点儿子节点:` getChildren(): this` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`uinode`:uinode对象
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
let children = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getChildren().get(0).getText()
console.log(children)
```

### 获取节点text信息:`getText()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:text内容
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getText()
console.log(text)
```

### 获取节点范围:`getBounds()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`Bounds`:范围信息
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
let bounds = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getBounds()
console.log(bounds)
```

### 获取节点Id:`getId()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:id信息
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
let id = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getId()
console.log(id)
```



### 获取节点PackageName:`getPackageName()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:Pkg信息
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
let pkg = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getPackageName()
console.log(pkg)
```

### 获取节点类:`getClassName()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`string`:Clz信息
- :red_circle:null

**用法示例**:

```javascript

const uinode = new core.uinode();
let clz = uinode.forEachNode((e) => {
return e.getText==="连接"
}).get(0).getClassName()
console.log(clz)
```
### 追加文本到输入框:`appendText(text)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`string` (text):要输入的内容


**用法示例**:

```javascript
let clz = uinode.forEachNode((e) => {
    return e.getText==="连接"
}).get(0).appendText("Hello")
console.log(clz)
```

### 设置文本到输入框:`trySetText(text)` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`string` (text):要输入的内容

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false


**用法示例**:

```javascript
let clz = uinode.forEachNode((e) => {
    return e.getText==="连接"
}).trySetText("Hello")
console.log(clz)
```

### 节点尝试点击:`tryClick()` :white_check_mark:

:lock:**权限**: 无障碍

> 当此节点点击失败，会尝试向上级容器尝试

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).tryClick()) {
console.log("点击成功")
}

```

### 节点点击:`click()` :white_check_mark:

:lock:**权限**: 无障碍

> 失败率较高

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).click()) {
console.log("点击成功")
}
```

### 节点长按点击:`longClick()` :white_check_mark:

:lock:**权限**: 无障碍

> 失败率较高

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).longClick()) {
console.log("点击成功")
}
```

### 尝试节点长按点击:`tryLongClick()` :white_check_mark:

:lock:**权限**: 无障碍

> 当此节点点击失败，会尝试向上级容器尝试

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).tryLongClick()) {
console.log("点击成功")
}

```

### 双击点击节点:`doubleClick()` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).doubleClick()) {
console.log("点击成功")
}
```

### 全局节点点击:`globalClick()` :white_check_mark:

:lock:**权限**: 无障碍

> 常用来点击网页节点

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).globalClick()) {
console.log("点击成功")
}

```

### 全局长按节点:`globalLongClick()` :white_check_mark:

:lock:**权限**: 无障碍

> 常用来点击网页节点

**参数**:

- `number` (value):节点在 nodeObj 数组中的索引值 不填默认为0

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const uinode = new core.uinode();
let d = uinode.forEachNode((e) => {
return e.getText==="连接"
})
if (d.get(0).globalLongClick()) {
console.log("点击成功")
}
```

