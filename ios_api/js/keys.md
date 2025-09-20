---
outline: deep
---

## 系统按键相关

```javascript
const core = require('cheese-js');
const keys = core.keys;
```

### 返回主屏幕: `go_home(): boolean`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `boolean`: 是否成功执行 Home 键操作

**用法示例**:

```javascript
const core = require('cheese-js');
const keys = core.keys;
const result = keys.go_home();
console.log(`返回主屏幕结果: ${result}`);
```