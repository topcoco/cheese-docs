---
outline: deep
---

## 资源相关

```javascript
const core = require('cheese-js');
const assets = core.assets;
```

### 安全读取资源文件: `read(relativePath: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (relativePath): 资源文件的相对路径

**返回**:

- `string`: 读取的文件内容

**用法示例**:

```javascript
const core = require('cheese-js');
const assets = core.assets;
const content = assets.read("config/settings.json");
console.log(`文件内容: ${content}`);
```

### 安全复制资源文件: `copy(srcRelativePath: string, destAbsolutePath: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (srcRelativePath): 源资源文件的相对路径
- ⭐`string` (destAbsolutePath): 目标文件的绝对路径

**返回**:

- `boolean`: 是否成功复制文件

**用法示例**:

```javascript
const core = require('cheese-js');
const assets = core.assets;
const result = assets.copy("images/icon.png", "/Users/username/Desktop/icon.png");
console.log(`复制结果: ${result}`);
```

### 检查资源类型（是否是文件夹）: `isFolder(relativePath: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (relativePath): 资源的相对路径

**返回**:

- `boolean`: 指定路径是否是文件夹

**用法示例**:

```javascript
const core = require('cheese-js');
const assets = core.assets;
const isFolder = assets.isFolder("config");
console.log(`是否是文件夹: ${isFolder}`);
```

### 检查资源类型（是否是文件）: `isFile(relativePath: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (relativePath): 资源的相对路径

**返回**:

- `boolean`: 指定路径是否是文件

**用法示例**:

```javascript
const core = require('cheese-js');
const assets = core.assets;
const isFile = assets.isFile("config/settings.json");
console.log(`是否是文件: ${isFile}`);
```