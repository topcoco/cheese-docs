---
outline: deep
---

## WDA 相关

```javascript
const core = require('cheese-js');
const wda = core.wda;
```

### 获取错误信息: `get_error(): string`  :white_check_mark:

**返回**:

- `string`: 错误信息

**用法示例**:

```javascript
const core = require('cheese-js');
const wda = core.wda;
const error = wda.get_error();
console.log(`错误信息: ${error}`);
```

### 初始化 WDA: `init(): boolean`  :white_check_mark:

**返回**:

- `boolean`: 是否成功初始化 WDA

**用法示例**:

```javascript
const core = require('cheese-js');
const wda = core.wda;
const result = wda.init();
console.log(`初始化结果: ${result}`);
```