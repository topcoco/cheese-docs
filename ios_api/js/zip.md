---
outline: deep
---

## 压缩解压相关

```javascript
const core = require('cheese-js');
const zip = core.zip;
```

### 压缩文件或目录: `compress(sourcePath: string, zipPath: string, password?: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (sourcePath): 要压缩的源文件或目录路径
- ⭐`string` (zipPath): 生成的ZIP文件路径
- `string` (password): 压缩密码（可选，默认为空字符串）

**返回**:

- `boolean`: 压缩是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const zip = core.zip;

// 无密码压缩
const result1 = zip.compress('/path/to/source', '/path/to/output.zip');
console.log(`压缩结果: ${result1}`);

// 带密码压缩
const result2 = zip.compress('/path/to/source', '/path/to/output.zip', 'mypassword');
console.log(`带密码压缩结果: ${result2}`);
```

### 解压缩文件: `decompress(zipPath: string, extractTo: string, password?: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (zipPath): 要解压的ZIP文件路径
- ⭐`string` (extractTo): 解压目标目录路径
- `string` (password): 解压密码（可选，默认为空字符串）

**返回**:

- `boolean`: 解压是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const zip = core.zip;

// 无密码解压
const result1 = zip.decompress('/path/to/archive.zip', '/path/to/extract');
console.log(`解压结果: ${result1}`);

// 带密码解压
const result2 = zip.decompress('/path/to/archive.zip', '/path/to/extract', 'mypassword');
console.log(`带密码解压结果: ${result2}`);
```