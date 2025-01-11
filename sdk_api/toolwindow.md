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

### 悬浮球:`FloatingBall(): IToolWindowClient` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.FloatingBall().show()
```

### 悬浮日志:`FloatingLog(): IConsoleClient` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.FloatingLog().show()
```

### 详细日志窗口:`DetailedLog(): void` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.DetailedLog()
```