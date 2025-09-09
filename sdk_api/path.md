---
outline: deep
---

## 路径相关

```javascript
const core = require('cheese-js');
```


### 脚本assets目录: `public static readonly ASSETS_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 资源目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const assetsDir = path.ASSETS_DIRECTORY;
console.log("资源目录路径:", assetsDir.getAbsolutePath());
```



### 脚本根目录: `public static readonly ROOT_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 根目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const rootDir = path.ROOT_DIRECTORY;
console.log("根目录路径:", rootDir.getAbsolutePath());
```

### 日志目录: `public static readonly LOG_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 日志目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const logDir = path.LOG_DIRECTORY;
console.log("日志目录路径:", logDir.getAbsolutePath());
```

### 脚本目录: `public static readonly JS_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 脚本目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const jsDir = path.JS_DIRECTORY;
console.log("脚本目录路径:", jsDir.getAbsolutePath());
```

### 主目录: `public static readonly MAIN_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 主目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const mainDir = path.MAIN_DIRECTORY;
console.log("主目录路径:", mainDir.getAbsolutePath());
```

### UI 目录: `public static readonly UI_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — UI 目录对应的 `File` 对象实例
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const uiDir = path.UI_DIRECTORY;
console.log("UI 目录路径:", uiDir.getAbsolutePath());
```

### 工作目录: `public static readonly WORKING_DIRECTORY: File` :white_check_mark:

**返回值**:

- :green_circle: `File` — 当前工作目录对应的 `File` 对象实例  
- :red_circle: null

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const path = core.path;

const workingDir = path.WORKING_DIRECTORY;
console.log("当前工作目录路径:", workingDir.getAbsolutePath());
```