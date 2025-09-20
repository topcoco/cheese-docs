---
outline: deep
---

## 基础功能

```javascript
const core = require('cheese-js');
const base = core.base;
```

### 休眠: `sleep(tim: number): boolean`  :white_check_mark:

**参数**:

- ⭐`number` (tim): 休眠时间（毫秒）

**返回**:

- `boolean`: 是否成功执行休眠

**用法示例**:

```javascript
const core = require('cheese-js');
const base = core.base;
const result = base.sleep(1000); // 休眠1秒
console.log(`休眠结果: ${result}`);
```

### 标准输出: `print(message: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (message): 要输出的消息

**返回**:

- `boolean`: 是否成功输出消息

**用法示例**:

```javascript
const core = require('cheese-js');
const base = core.base;
base.print("这是一条标准输出消息");
```


### 退出脚本: `exit(): void`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `void`: 无返回值，执行后脚本会立即终止

**用法示例**:

```javascript
const core = require('cheese-js');
const base = core.base;
base.exit(); // 立即终止脚本执行
```

### 获取当前文件名: `getFileName(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 当前执行文件的完整路径

**用法示例**:

```javascript
const core = require('cheese-js');
const base = core.base;
const filename = base.getFileName();
console.log(`当前文件: ${filename}`);
```

### 获取当前目录名: `getDirName(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 当前执行文件所在目录的完整路径

**用法示例**:

```javascript
const core = require('cheese-js');
const base = core.base;
const dirname = base.getDirName();
console.log(`当前目录: ${dirname}`);
```