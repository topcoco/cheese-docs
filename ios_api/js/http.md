---
outline: deep
---

## 网络请求相关

```javascript
const core = require('cheese-js');
const http = core.http;
```

### 下载文件: `download(url: string, file_path: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (url): 要下载的文件URL
- ⭐`string` (file_path): 保存文件的本地路径

**返回**:

- `boolean`: 下载是否成功

**用法示例**:

```javascript
const core = require('cheese-js');
const http = core.http;
const result = http.download("https://example.com/file.zip", "/path/to/save/file.zip");
console.log(`下载结果: ${result ? '成功' : '失败'}`);
```

### 发送GET请求: `get(url: string, headers_json: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (url): 请求的URL
- ⭐`string` (headers_json): JSON格式的请求头

**返回**:

- `string`: 请求的响应内容

**用法示例**:

```javascript
const core = require('cheese-js');
const http = core.http;

// 准备请求头
const headers = JSON.stringify({
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json"
});

// 发送GET请求
const response = http.get("https://api.example.com/data", headers);
console.log(`响应内容: ${response}`);
```

### 发送POST请求: `post(url: string, headers_json: string, body_json: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (url): 请求的URL
- ⭐`string` (headers_json): JSON格式的请求头
- ⭐`string` (body_json): JSON格式的请求体

**返回**:

- `string`: 请求的响应内容

**用法示例**:

```javascript
const core = require('cheese-js');
const http = core.http;

// 准备请求头
const headers = JSON.stringify({
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0"
});

// 准备请求体
const body = JSON.stringify({
    "username": "test_user",
    "password": "password123"
});

// 发送POST请求
const response = http.post("https://api.example.com/login", headers, body);
console.log(`响应内容: ${response}`);
```