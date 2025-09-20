---
outline: deep
---

## 路径相关 API

```javascript
const core = require('cheese-js');
const path = core.path;
```

### 获取资源目录路径: `assets_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 资源目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const assetsDir = path.assets_directory();
console.log(`资源目录: ${assetsDir}`);
```

### 获取日志目录路径: `log_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 日志目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const logDir = path.log_directory();
console.log(`日志目录: ${logDir}`);
```

### 获取Python脚本目录路径: `py_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: Python脚本目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const pyDir = path.py_directory();
console.log(`Python脚本目录: ${pyDir}`);
```

### 获取JS脚本目录路径: `js_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: JS脚本目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const jsDir = path.js_directory();
console.log(`JS脚本目录: ${jsDir}`);
```

### 获取node_modules目录路径: `node_modules(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: node_modules 目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const nodeModulesDir = path.node_modules();
console.log(`node_modules目录: ${nodeModulesDir}`);
```

### 获取主程序目录路径: `main_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 主程序目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const mainDir = path.main_directory();
console.log(`主程序目录: ${mainDir}`);
```

### 获取UI资源目录路径: `ui_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: UI资源目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const uiDir = path.ui_directory();
console.log(`UI资源目录: ${uiDir}`);
```

### 获取工作目录路径: `working_directory(): string` :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 工作目录路径

**用法示例**:

```javascript
const core = require('cheese-js');
const path = core.path;
const workingDir = path.working_directory();
console.log(`工作目录: ${workingDir}`);
```