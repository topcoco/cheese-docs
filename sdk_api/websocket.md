---
outline: deep
---

## socket相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```


### websocket客户端: :green_square:

:lock:**权限**: 网络

**用法示例**:

```javascript
 const websocket = core.websocket;
websocket.client("ws://localhost:8091", {
    onOpen: (ws, handshake) => {
        console.log("Client: Connected");
    },
    onMessage: (ws, message) => {
        console.log("Client: Received -", message);
    },
    onClose: (ws, code, reason, wasClean) => {
        console.log(`Client: Disconnected (code: ${code}, reason: ${reason}, clean: ${wasClean})`);
    },
    onError: (ws, error) => {
        console.error("Client: Error -", error.message || error);
    }
})

```

### websocket服务端: :green_square:

:lock:**权限**: 网络

**用法示例**:
```javascript
const websocket = core.websocket;
websocket.server(8091, {
    onOpen: (ws, handshake) => {
        console.log("Client: Connected");
    },
    onMessage: (ws, message) => {
        console.log("Client: Received -", message);
    },
    onClose: (ws, code, reason, wasClean) => {
        console.log(`Client: Disconnected (code: ${code}, reason: ${reason}, clean: ${wasClean})`);
    },
    onError: (ws, error) => {
        console.log("Client: Error -", error.message || error);
    },
    onStart: (ws, error) => {
        console.log("Client: Start");
    }
})
```