---
outline: deep
---

## http相关

```javascript
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





### 图鉴打码示例:
```javascript
const core = require("cheese-js");
let http = new core.http()
let converters =  core.converters
let builder =http.builder()
builder.url("http://api.ttshitu.com/predict")
builder.addParam("username","333")
builder.addParam("password","333")
builder.addParam("typeid","1001")
builder.addParam("image",converters.bitmapToBase64(converters.assetsToBitmap("img.png") ))
builder.post(false)
console.log(builder.sync())
```