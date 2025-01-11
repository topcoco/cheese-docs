---
outline: deep
---

## 终端相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 连接终端:`connectTermux(): boolean` :white_check_mark:



**用法示例**:

```javascript

const termux=new core.termux()

if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```
### 关闭终端:`close(): void` :white_check_mark:

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```
### 读取管道信息:`read(): string` :white_check_mark:

**返回值**:
- :green_circle:`string`:终端管道信息
- :red_circle:null

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.install("python")
    termux.send("python --version")
    console.log(termux.read())
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```


### 发送命令到管道:`send(c: string): void` :white_check_mark:

**参数**:
- ⭐`string` (c):bash命令


**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```


### 循环读取管道信息:`whileRead(callback: Callback): void` :white_check_mark:

**参数**:
- ⭐`Callback` (callback):代码回调

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```

### 循环读取管道是否启用:` whileReadState(): boolean` :white_check_mark:

**返回值**:
- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```


### 停止循环读取管道:`stopWhileRead(): void` :white_check_mark:

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("🐍 Python->", "关闭终端")
    termux.close()
},5000)
```

### 安装包:`install(pkg: string): void` :white_check_mark:

**参数**:
- ⭐`string` (pkg):包名

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.install("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("📦 uninstall ->", "关闭终端")
    termux.close()
},5000)
```

### 卸载包:`uninstall(pkg: string): void` :white_check_mark:

**参数**:
- ⭐`string` (pkg):包名

**用法示例**:

```javascript

const termux=new core.termux()
if(termux.connectTermux()){
    if (termux.whileReadState()){
        termux.stopWhileRead()
    }
    termux.whileRead((e) => {
        console.log("🐍 Python ->", e)
        return false
    })
    termux.uninstall("python")
    termux.send("python --version")
}

setTimeout(()=>{
    console.log("📦 uninstall->", "关闭终端")
    termux.close()
},5000)
```