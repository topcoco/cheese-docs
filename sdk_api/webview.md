---
outline: deep
---

## 时间相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### ui线程:`ui(callback: Callback): void` :white_check_mark:

**参数**:
- ⭐`Callback` (callback):回调

**用法示例**:

```javascript

const webview = core.webview;
const toolwindow = core.toolwindow;
const env = core.env;
console.log(env.sdk_version)
webview.ui((e) => {
    switch (e.id) {
        case 'btn1':
            setTimeout(() =>
                   console.log("按钮1 被点击了")
                , 1000);
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

const base = core.base;
const webview = core.webview;
console.log(webview.window("input63059"))
```

### 运行WebView: ` runWebView(http: string): void` :white_check_mark:

**参数**:
- ⭐`string` (http):网址

**用法示例**:
```javascript

const webview = core.webview;
webview.runWebView("https://cheese.worldcore.cn")
```