---
outline: deep
---

## 插件相关

```javascript
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
const core = require('cheese-js'); //导入核心模块
const plugins = new core.plugins;
const path =  core.path;
if(plugins.install(path.ASSETS_DIRECTORY+"/app-debug.apk")){
    console.log("插件安装成功")
}else{
    console.log("插件安装失败")
}
```


### 插件是否存在:`public static  hasPlugins(pkg: string): plugins` :white_check_mark:


**参数**:

- ⭐`string` (pkg):插件包名

**返回值**:

- :green_circle:`plugins`:存在即返回对应插件的plugins对象
- :red_circle:null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
let plugins = core.plugins.hasPlugins("com.test")
if(plugins!=null){
    console.log("插件的context",plugins.createContext())
}else{
    console.log("插件尚未安装")
}

```


### 创建插件上下文:`createContext(): any` :white_check_mark:

**返回值**:

- :green_circle:`any`:插件上下文对象
- :red_circle:null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const plugins = new core.plugins;
const path =  core.path;

plugins.install(path.ASSETS_DIRECTORY+"/test.apk")
console.log("插件的context",plugins.createContext())

```

### 卸载插件:`uninstall(pkg:string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (pkg):插件包名

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const plugins = new core.plugins;
const path =  core.path;
if(plugins.install(path.ASSETS_DIRECTORY+"/app-debug.apk")){
    console.log("插件安装成功")
   if(plugins.uninstall()) {
       console.log("插件卸载成功")
   }else{
       console.log("插件卸载失败")
   }
}else{
    console.log("插件安装失败")
}

```
