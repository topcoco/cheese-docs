
---
outline: deep
---

## 线程相关 - js版引擎独享

```javascript
const core = require('cheese-js');
```

### 创建线程:`public create(callback: Callback): Thread` :white_check_mark:


**用法示例**:

```javascript

const thread = new core.thread;
const base =  core.base;
let th =thread.create(()= >{
while (true){
    console.log("我是子线程")
    base.sleep(1000)
})
base.sleep(1000)
//一秒后停止
th.exit()
```

