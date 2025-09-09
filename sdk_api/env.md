---
    outline: deep
---

## 环境相关

```javascript
const core = require('cheese-js');
```

### cheese版本:`public static readonly version: string` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const env = core.env;//从核心模块导入env相关包
console.log("cheese版本",env.version)
```


### cheese-context:` public static readonly context: any` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const env = core.env;//从核心模块导入env相关包
console.log("cheese上下文",env.context)
```


### cheese-activity:`public static readonly activity: any` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const env = core.env;//从核心模块导入env相关包
console.log("cheese activity",env.activity)
```


### cheese设置:`public static readonly settings: MapObject` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const env = core.env;//从核心模块导入env相关包
console.log("cheese相关设置",env.settings.get("test"))
```

