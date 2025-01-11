---
outline: deep
---

## Class相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 类型

- #### 布尔型:`Boolean:Class<boolean>` :white_check_mark:

- #### 字符串型:`String:Class<string>` :white_check_mark:

- #### 浮点型:`Float:Class<number>` :white_check_mark:

- #### 长整型:`Long:Class<number>` :white_check_mark:

- #### 字节数组型:`ByteArray:Class<any>` :white_check_mark:

### ClassUtils类

```typescript
type ClassUtils = {
    clz: string;
    obj: any;
    new: (...args: any[]) => any;
    set: (nodeName: string, name?: string) => string
}
```

### Test类

```kotlin
package coco.cheese

class Test {
    fun p(str: String) {
        println(str)
    }
}
```

### 获取包名下的所有类: `getClassList(packageName: string)List<string>` :white_check_mark:

**参数**:

- ⭐`string` (packageName): 包名

**用法示例**:

```javascript

const cls = core.cls;
console.log(cls.getClassList("coco.cheese"))
```

### 加载Apk或Dex文件: `loadDex(path: string): void` :white_check_mark:

**参数**:

- ⭐`string` (path): 要加载的apk或者dex文件路径

**用法示例**:

```javascript

const cls = core.cls;
cls.loadDex("/storage/emulated/0/app.apk");
```

### 判断 Class 是否存在: `hasClass(className: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (cls): 全类名

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const cls = core.cls;
if (cls.hasClass("com.example.ClassName")) {
    console.log("Class 存在");
}

```

### 查找Class: `findClass(className: string): ClassUtils` :white_check_mark:

**扩展属性**:

- Class对象:`clz`

**参数**:

- ⭐`string` (cls): 全类名

**返回值**:

- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```javascript

const cls = core.cls;
if (cls.hasClass("coco.cheese.Test")) {
    console.log(cls.findClass("coco.cheese.Test").clz);
}
```

### 实例化构造函数: `new(...args:any[]): ClassUtils` :white_check_mark:

**参数**:

- ⭐`any[]` (...args): 构造函数所需参数

**返回值**:

- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```javascript

const cls = core.cls;
var obj = cls.findClass("coco.cheese.Test").new().obj
obj.p("ss")
```

### 设置类到Node环境: `set(nodeName: string,name?: string):string` :white_check_mark:

**参数**:
- ⭐`string` (nodeName): nodeName
- `string` (name): 设置类的node变量名

**返回值**:

- :green_circle:`string`: Node环境的对应变量名
- :red_circle:null

**用法示例**:

```javascript

const cls = core.cls;
 /**方式1*/
var c = cls.findClass("coco.cheese.Test").new()
c.set(settings.nodeName, "Test")
Test.p("ss")

/**方式2*/
var c = cls.findClass("coco.cheese.Test")
c.set(settings.nodeName, "Test")
new Test().p("ss")
```

