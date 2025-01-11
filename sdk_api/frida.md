
## Frida相关


<div style="background-color: #2f9295; border-left: 6px solid #ffcc00; padding: 15px; margin: 15px 0; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); font-weight: bold;">
🚨 重要提示：注意： "Frida" 仅可用于合法合规学习应用安全方面的自动化测试，切勿用于任何违法违规用途，否则后果自行承担。 Frida 可 HOOK 同进程。如需 HOOK 其他进程，则须获得 ROOT 权限，并授权给Cheese。
Frida可执行文件可在官方网盘中下载。
</div>

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```
```java
package coco.cheese.core;
public class Test {
    public static String a(){
       return "我是原本的字符串";
    }
}
```
```javascript
//Path：os.JS_DIRECTORY + "/frida.js"
//Frida官方文档：https://frida.re/docs/
//下面我们将 Hook同进程的 coco.cheese.core.Test 类的静态方法 a，将其原本的返回值修改为自定义的 Hook 值。
Java.perform(function () {
    var test = Java.use('coco.cheese.core.Test');
    test.a.implementation = function () {
        try {
            return "我是修改的字符串"
        } catch (e) {
            return this.ab()
        }
    };
});

Java.send({'id':"test","message":"Hello Frida"});
```

### 注入目标程序:`inject(packageName:string,fridaPath:string,jsPath:string,options: any): void ` :white_check_mark:

**参数**:

- ⭐`string` (packageid):注入包名
- ⭐`string` (fridaPath):frida可执行文件本地路径
- ⭐`string` (jsPath):frida-js文件本地路径
- ⭐`any` (options):选项

**用法示例**:
```javascript

const os = core.os;
const base = core.base;
const frida = new core.frida;
frida.inject("com.example.test", "/storage/emulated/0/frida-x86_64", os.JS_DIRECTORY + "/frida.js", {
    "spawn": false
})
while (true) {
    base.sleep(1000)
    console.log(frida.getString("test")) //Hello Frida
}
```

### 停止目标进程:`stop(packageName:string): void ` :white_check_mark:

**参数**:

- ⭐`string` (packageName):停止包名


**用法示例**:
```javascript

const os = core.os;
const base = core.base;
const frida = new core.frida;
frida.stop("com.example.test")

```

### 获取Frida发的字符串消息:`getString(id:string): string ` :white_check_mark:

**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`string`: 对应的值
- :red_circle:`string`: ""

**用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getString("test"))
```

### 获取Frida发的JSON对象消息:`getJSONObject(id:string): any` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`any`: 对应的值
- :red_circle:`any`: null

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getJSONObject("test"))
```

### 获取Frida发的JSON列表消息:`getJSONArray(id:string): any` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`any`: 对应的值
- :red_circle:`any`: null

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getJSONArray("test"))
```

### 获取Frida发的长数字消息:`getLong(id:string): number` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`number`: 对应的值
- :red_circle:`number`: -1

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getLong("test"))
```


### 获取Frida发的数字消息:`getInt(id:string): number` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`number`: 对应的值
- :red_circle:`number`: -1

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getInt("test"))
```


### 获取Frida发的布尔消息:`getBoolean(id:string): boolean` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getBoolean("test"))
```

### 获取Frida发的小数字消息:`getDouble(id:string): number` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`number`: 对应的值
- :red_circle:`number`: -1.0

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.getDouble("test"))
```


### 获取Frida发的消息:`get(id:string): any` :white_check_mark:
**参数**:
- ⭐`string` (id):键值

**返回值**:

- :green_circle:`any`: 对应的值
- :red_circle:`any`: null

  **用法示例**:
```javascript

const frida = new core.frida;
console.log(frida.get("test"))
```


