---
outline: deep
---

## 键盘输入法操作

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 输入:`input(text: String): void` :white_check_mark:

:lock:**权限**: 输入法

**参数**:

- ⭐`string` (str):要输入的文本

**用法示例**:

```javascript

const keyboard = core.keyboard;
keyboard.input("你好")
```

### 回车:`enter(): void` :white_check_mark:

:lock:**权限**: 输入法

**用法示例**:

```javascript

const keyboard = core.keyboard;
keyboard.enter()
```

### 删除:`delete(): void` :white_check_mark:

:lock:**权限**: 输入法

**用法示例**:

```javascript

const keyboard = core.keyboard;
keyboard.delete()
```
