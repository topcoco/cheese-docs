---
outline: deep
---

## Assets相关

```javascript
const core = require('cheese-js');
```

### 读取文件或文件夹: `public static read(path: string): string` :white_check_mark:

**参数**:

- ⭐`string` (path): 路径

**返回值**:

- :green_circle:`string`: 文件内容 or 文件列表
- :red_circle:null

**用法示例**:

```javascript

const assets = core.assets;
const fileContent = assets.read("ww/test.txt");
console.log("文件内容", fileContent);
```

### 拷贝文件或文件夹: `public static copy(path: string, destPath: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (path): 文件或文件夹路径
- ⭐`string` (destPath): 目标路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const assets = core.assets;
if (assets.copy("ww/test.txt", "/storage/emulated/0/t.txt")) {
    console.log("复制成功");
}
```

### 判断路径是不是文件夹: `public static isFolder(path: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (path): 路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const assets = core.assets;
if (assets.isFolder("ww")) {
    console.log("是文件夹");
}


```

### 判断路径是不是文件: `public static isFile(path: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (path): 路径

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const assets = core.assets;
if (assets.isFile("ww/test.txt")) {
    console.log("是文件");
}
```