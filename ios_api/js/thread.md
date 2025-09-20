---
outline: deep
---

## 线程相关 

```javascript
const core = require('cheese-js');
const thread = new core.thread;
```

### 创建线程:`public create(callback: Callback): Thread` :white_check_mark:


**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const thread = new core.thread;
const base =  core.base;
let th =thread.create(() =>{
    while (true) {
        core.thread.checkInterrupted()
        console.log("我是子线程")
        base.sleep(1000)
    }
})
console.log("线程id",th.getID())
base.sleep(1000)
//一秒后停止
th.exit()
```

