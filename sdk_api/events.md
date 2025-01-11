---
outline: deep
---

## 设备相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 监听系统按键事件:`observeKey(callback: Callback): void` :white_check_mark:


**用法示例**:

```javascript

const events = core.events;
events.observeKey((k)=>{
    switch (k) {
        case events.HOME:
            console.log("主页键被按下");
            break;
        case events.RECENT:
            console.log("任务键被按下");
            break;
        case events.VOLUME_UP:
            console.log("音量上键被按下");
            break;
        case events.VOLUME_DOWN:
            console.log("音量下键被按下");
            break;
        default:
            console.log("其他键被按下");
    }
})

```