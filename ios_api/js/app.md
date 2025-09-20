---
outline: deep
---

## 应用相关

```javascript
const core = require('cheese-js');
const app = core.app;
```

### 启动应用: `app_launch(bundle_id: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `boolean`: 是否成功启动应用

**用法示例**:

```javascript
const core = require('cheese-js');
const app = core.app;
const result = app.app_launch("com.apple.Calculator");
console.log(`启动结果: ${result}`);
```

### 终止应用: `app_terminate(bundle_id: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `boolean`: 是否成功终止应用

**用法示例**:

```javascript
const core = require('cheese-js');
const app = core.app;
const result = app.app_terminate("com.apple.Calculator");
console.log(`终止结果: ${result}`);
```

### 激活应用: `app_activate(bundle_id: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `boolean`: 是否成功激活应用（即切换到前台）

**用法示例**:

```javascript
const core = require('cheese-js');
const app = core.app;
const result = app.app_activate("com.apple.Calculator");
console.log(`激活结果: ${result}`);
```

### 获取应用状态: `app_state(bundle_id: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `string`: 应用的状态信息（具体值依赖系统实现）

**用法示例**:

```javascript
const core = require('cheese-js');
const app = core.app;
const state = app.app_state("com.apple.Calculator");
console.log(`应用状态: ${state}`);
```