---
outline: deep
---

## Root相关

```javascript
const core = require('cheese-js');
```

### 请求root权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const root = core.root;
if (root.requestPermission(3)) {
    console.log("root权限请求成功")
}else{
    console.log("root权限请求失败")
}

```

### 检查root权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块

const root = core.root;
if (root.checkPermission()) {
    console.log("root权限正常")
}else{
    console.log("root权限不正常")
}
```

### 执行su命令:`exec(command: string): string` :white_check_mark:

**参数**:

- ⭐`string` (command): 执行的具体命令

**返回值**:

- :green_circle:`string`:执行结果
- :red_circle:null

**用法示例**:

```javascript

const core = require('cheese-js'); //导入核心模块

const root = core.root;
if (root.requestPermission(3)) {
    console.log("root权限请求成功")
    console.log("执行结果",root.exec("input tap 200 300"))
}else{
    console.log("root权限请求失败")
}
```


