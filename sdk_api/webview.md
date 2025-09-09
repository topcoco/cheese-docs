---
outline: deep
---

## 时间相关

```javascript
const core = require('cheese-js');
```

### ui线程:`ui(callback: Callback): void` :white_check_mark:

**参数**:
- ⭐`Callback` (callback):回调

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const webview = core.webview;
webview.ui((e) => {
    switch (String(e.id)) {
        case 'btn1':
            console.log("按钮1 被点击了")
            break;
        default:
            console.log('Unknown fruit.');
            break;
    }
    return 1
})
```

### window对象:`window(methodName: string, ...args: any[]): void` :white_check_mark:

**参数**:
- ⭐`string` (methodName):方法名或字段名 方法名要带括号如test(),字段名不要带括号如 test。
- `any[]` (...args):参数

**用法示例**:
```javascript
const core = require('cheese-js'); //导入核心模块

const webview = core.webview;

console.log("调用前端UI window中的字段",webview.window("test"))
console.log("调用前端UI window中的方法",webview.window("testFun()"))
console.log("调用前端UI window中的方法并传参",webview.window("testFun1()","传递测试"))
```

### document对象:`document(methodName: string, ...args: any[]): void` :white_check_mark:

**参数**:
- ⭐`string` (methodName):方法名或字段名 方法名要带括号如test(),字段名不要带括号如 test。
- `any[]` (...args):参数

**用法示例**:
```javascript
const core = require('cheese-js'); //导入核心模块

const webview = core.webview;
console.log("调用前端UI document中的字段",webview.document("test"))
console.log("调用前端UI document中的方法",webview.document("testFun()"))
console.log("调用前端UI document中的方法并传参",webview.document("testFun1()","传递测试"))
```