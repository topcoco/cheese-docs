---
outline: deep
---

## 文件系统相关

```javascript
const core = require('cheese-js');
const fs = core.fs;
```

### 读取文件或目录内容: `read(path: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (path): 文件或目录路径

**返回**:

- `string`: 文件内容或目录列表

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
// 读取文件
const fileContent = fs.read("/path/to/file.txt");
console.log(`文件内容: ${fileContent}`);

// 读取目录
const dirContent = fs.read("/path/to/directory");
console.log(`目录内容: ${dirContent}`);
```

### 创建文件或目录: `create(path: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (path): 要创建的文件或目录路径

**返回**:

- `boolean`: 创建是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
// 创建文件
const createFileResult = fs.create("/path/to/newfile.txt");
console.log(`创建文件结果: ${createFileResult}`);

// 创建目录
const createDirResult = fs.create("/path/to/newdirectory/");
console.log(`创建目录结果: ${createDirResult}`);
```

### 删除文件或目录: `rm(path: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (path): 要删除的文件或目录路径

**返回**:

- `boolean`: 删除是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
// 删除文件
const removeFileResult = fs.rm("/path/to/file.txt");
console.log(`删除文件结果: ${removeFileResult}`);

// 删除目录
const removeDirResult = fs.rm("/path/to/directory/");
console.log(`删除目录结果: ${removeDirResult}`);
```

### 追加内容到文件: `append(filePath: string, content: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (filePath): 文件路径
- ⭐`string` (content): 要追加的内容

**返回**:

- `boolean`: 追加是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
const appendResult = fs.append("/path/to/file.txt", "追加的内容");
console.log(`追加内容结果: ${appendResult}`);
```

### 覆盖写入内容到文件: `write(filePath: string, content: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (filePath): 文件路径
- ⭐`string` (content): 要写入的内容

**返回**:

- `boolean`: 写入是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
const writeResult = fs.write("/path/to/file.txt", "新的文件内容");
console.log(`写入内容结果: ${writeResult}`);
```

### 检查路径是否为文件: `isFile(path: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (path): 要检查的路径

**返回**:

- `boolean`: 是否为文件

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
const isFileResult = fs.isFile("/path/to/check");
console.log(`是否是文件: ${isFileResult}`);
```

### 检查路径是否为目录: `isDirectory(path: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (path): 要检查的路径

**返回**:

- `boolean`: 是否为目录

**用法示例**:

```javascript
const core = require('cheese-js');
const fs = core.fs;
const isDirResult = fs.isDirectory("/path/to/check");
console.log(`是否是目录: ${isDirResult}`);
```