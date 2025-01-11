---
outline: deep
---

## http相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```
### get请求:`public get(): http ` :white_check_mark:

**用法示例**:
```javascript
const http = new core.http;
let body = http.builder().url("https://www.baidu.com").get().sync()
console.log(body)
```

### get请求:`public post: http ` :white_check_mark:

**用法示例**:
```javascript
const http = new core.http;
let body = http.builder().url("https://www.baidu.com").post().sync()
console.log(body)
```
