---
outline: deep
---

## Root相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
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

const root = core.root;
if (root.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查root权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const root = core.root;
if (root.checkPermission()) {
    console.log("root权限正常")
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

const root = core.root;
if (root.checkPermission()) {
    root.exec("input tap 200 300")
}
```


### 解析事件:`parseEvent(str: String): string` :white_check_mark:

**参数**:

- ⭐`string` (command): 解析的具体事件

**返回值**:

- :green_circle:`string`:解析结果
- :red_circle:null

**用法示例**:

```javascript

const root = core.root;
if (root.checkPermission()) {
    let cmd=root.parseEvent(`
/dev/input/event2: 0003 0039 00000071
/dev/input/event2: 0001 014a 00000001
/dev/input/event2: 0003 0035 000002e4
/dev/input/event2: 0003 0036 00000160
/dev/input/event2: 0000 0000 00000000
/dev/input/event2: 0003 0039 ffffffff
/dev/input/event2: 0001 014a 00000000
/dev/input/event2: 0000 0000 00000000
`)
    root.exec(cmd)


}
```