---
outline: deep
---

## 工具窗口

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 悬浮球:`floatingBall(): IToolWindowClient` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.FloatingBall().show()
```

### 悬浮日志:`floatingLog(): IConsoleClient` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.FloatingLog().show()
```

### 详细日志窗口:`detailedLog(): void` :white_check_mark:

**用法示例**:

```javascript

const toolwindow = core.toolwindow;
toolwindow.DetailedLog()
```
