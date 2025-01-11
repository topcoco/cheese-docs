---
outline: deep
---

## App相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 用浏览器打开网站: ` public static openUrl(url: string): void :white_check_mark:

**参数**:

- ⭐`string` (url): 网站的Url。如果不以 "http://" 或 "https://" 开头，则默认是 "http://"

**用法示例**:

```javascript
const app = core.app;
app.openUrl("https://www.example.com")
```

### 卸载应用: `public static uninstall(pkg: string): void` :white_check_mark:

**参数**:

- ⭐`string` (pkg): 目标包名

**用法示例**:

```javascript

const app = core.app;
app.uninstall("com.example.package")
```

### 获取应用名称对应的已安装的应用的包名: ` public static getPackageName(appName:string): string` :white_check_mark:

**参数**:

- ⭐`string` (appName): 应用名称

**返回值**:

- :green_circle:`string`: 应用包名
- :red_circle: null

**用法示例**:

```javascript

const app = core.app;
const packageName = app.getPackageName("Cheese");
console.log("包名", packageName);
```

### 获取应用包名对应的已安装的应用的名称: `public static getAppName(packageName:string): string` :white_check_mark:

**参数**:

- ⭐`string` (pkg): 目标包名

**返回值**:

- :green_circle:`string`: 应用名称
- :red_circle: null

**用法示例**:

```javascript

const app = core.app;
const appName = app.getAppName("com.example.app");
console.log("应用名称", appName);
```

### 打开App设置页面: `public static openAppSettings(packageName: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (packageName): 目标包名

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const app = core.app;
if (app.openAppSettings("com.example.app")) {
    console.log("成功");
}
```

### 包名打开app: `public static openApp(pkg: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (pkg):包名

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const app = core.app;
if (app.openApp("com.sm")) {
    console.log("成功");
}
```

### 打开Scheme: `openScheme(schemeUri: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (schemeUri): Scheme字符串

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const app = core.app;
if (app.openScheme("sms://")) {
    console.log("成功");
}
```




