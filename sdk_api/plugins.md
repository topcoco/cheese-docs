```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```


### 安装插件:`install(apkPath:string): boolean` :white_check_mark:


**参数**:

- ⭐`string` (apkPath):插件路径

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const plugins = core.plugins;
if (plugins.install("/storage/emulated/0/MT2/apks/python.apk")) {
    console.log("Python插件加载成功")
}
```

### 加载依赖so库:`loadLibrary(): void` :white_check_mark:

**用法示例**:

```javascript

const plugins = core.plugins;
//如你的插件里面包含so并且有多个so 这几个so直接有依赖关系 如：so1依赖so2、so2依赖so3。我们需要loadLibrary("so1")来自动解析依赖加载，如果没有依赖加载的情况plugins.install方法会自动处理
 plugins.loadLibrary("cheese")
```


### 创建插件上下文:`createContext(): any` :white_check_mark:

**返回值**:

- :green_circle:`any`:插件上下文对象
- :red_circle:null

**用法示例**:

```javascript

const plugins = core.plugins;
//如你的插件里需要用到插件的assets或者res的资源需要创建插件的上下文而不是使用cheese提供的上下文。
console.log(plugins.createContext())
```

### 卸载插件:`uninstall(pkg:string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (pkg):插件包名

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const plugins = core.plugins;
if (plugins.uninstall("coco.cheese.plugin.python")) {
    console.log("Python插件卸载成功")
}
```
