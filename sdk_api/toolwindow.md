---
outline: deep
---

## 工具窗口

```javascript
const core = require('cheese-js');
```

### 悬浮控制台:`floatingConsole(): IToolWindowClient` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const toolwindow = core.toolwindow;
toolwindow.floatingConsole().show() //显示悬浮控制台
toolwindow.floatingConsole().hide() //隐藏悬浮控制台
toolwindow.floatingConsole().cancel() //销毁悬浮控制台
```

### 悬浮日志:`floatingLogcat(): IConsoleClient` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const toolwindow = core.toolwindow;
toolwindow.floatingLogcat().show() //显示悬浮日志窗
toolwindow.floatingLogcat().hide() //隐藏悬浮日志窗
toolwindow.floatingLogcat().clear() //清楚悬浮日志窗日志内容
toolwindow.floatingLogcat().destroy() //销毁悬浮日志窗
toolwindow.floatingLogcat().setTouch(true) //设置悬浮窗是否可触摸
toolwindow.floatingLogcat().setTextSize(1) //设置悬浮窗日志文字大小
```
