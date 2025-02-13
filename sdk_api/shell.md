
---
outline: deep
---

## Shell相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```



### 执行shell命令:`exec(command: string): string` :white_check_mark:

**参数**:

- ⭐`string` (command): 执行的具体命令

**返回值**:

- :green_circle:`string`:执行结果
- :red_circle:null

**用法示例**:

```javascript

const shell = core.shell;
shell.exec("input tap 200 300")

```
