---
outline: deep
---

## 转换器相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 将数组转成手势组合列表: `pairArray(...data: number[]): Array<Pair<number,number>>`  :white_check_mark:
**参数**:

- ⭐`number[]`(...args):手势路径
### 将字符串转成手势组合列表: `pairArray(data: string): Array<Pair<number,number>>`  :white_check_mark:
**参数**:

- ⭐`string`(data):手势路径

**返回值**:

- :green_circle:`Array<Pair<number,number>>`:pairArray组合
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.pairArray(764, 1160, 924, 307, 211, 823))
console.log(converters.pairArray("764, 1160, 924, 307, 211, 823"))
```

### 多手势组合列表: `pairArrays(...data: any[]): Array<Pair<number,number>>`  :white_check_mark:

**参数**:

- ⭐`number[]`(...args):手势路径

**返回值**:

- :green_circle:`Array<Pair<number,number>>`:pairArray组合
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.pairArrays(converters.pairArray(764, 1160, 924, 307, 211, 823)))
```

### SD卡文件转成InputStream: `sdToStream(filePath: string): InputStream`  :white_check_mark:

**参数**:

- ⭐`string`(filePath):文件路径

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.sdToStream("/storage/emulated/0/1.txt"))
```

### Assets卡文件转成InputStream: `assetsToStream(filePath: string): InputStream`  :white_check_mark:

**参数**:

- ⭐`string`(filePath):文件路径

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.assetsToStream("1.txt"))
```

### InputStream转成Bitmap: `streamToBitmap(inputStream: InputStream): Bitmap`  :white_check_mark:

**参数**:

- ⭐`InputStream`(inputStream):InputStream对象

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.streamToBitmap(converters.assetsToStream("1.png")))
```

### Bitmap转成InputStream: `bitmapToStream(bitmap: Bitmap): InputStream`  :white_check_mark:

**参数**:

- ⭐`Bitmap`(bitmap):Bitmap对象

**返回值**:

- :green_circle:`InputStream`:InputStream对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log(converters.bitmapToStream(bit))
}
```

### Assets转成Bitmap: `public static assetsToBitmap(filePath: string): Bitmap`  :white_check_mark:

**参数**:

- ⭐`string`(filePath):文件路径

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
console.log(converters.assetsToBitmap("1.png"))
```

### Base64转成Bitmap: ` base64ToBitmap(base64String: string): Bitmap`  :white_check_mark:

**参数**:

- ⭐`string`(base64String):Base64字符串

**返回值**:

- :green_circle:`Bitmap`:Bitmap对象
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log( converters.base64ToBitmap(converters.bitmapToBase64(bit)))
}
```

### Bitmap转成Base64: `bitmapToBase64(bitmap: Bitmap): string`  :white_check_mark:

**参数**:

- ⭐`Bitmap`(bitmap):Bitmap对象

**返回值**:

- :green_circle:`string`:Base64字符串
- :red_circle:null

**用法示例**:

```javascript

const converters = core.converters;
const recordscreen = core.recordScreen;
if (recordscreen.requestPermission(3)) {
    let bit = recordscreen.captureScreen(3, 0, 0, 0, -1)
    console.log(converters.bitmapToBase64(bit))
}
```
