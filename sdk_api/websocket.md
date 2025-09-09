---
outline: deep
---

## socket相关

```javascript

const core = require('cheese-js');
```


### websocket客户端: :green_square:

:lock:**权限**: 网络

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入 cheese-js 核心模块

const { base, websocket } = core;

console.log("🚀 正在启动 WebSocket 服务器...");

// 启动 WebSocket 服务器，监听 8090 端口
websocket.server(8090, {
    // 客户端连接时触发
    onOpen: (ws, handshake) => {
        console.log("✅ 客户端已连接");
        console.debug("🛣️ 连接路径：", handshake.getResourceDescriptor());
    },

    // 接收到客户端消息
    onMessage: (ws, message) => {
        console.log("📨 收到消息：", message);
    },

    // 客户端断开连接
    onClose: (ws, code, reason, remote) => {
        console.warn(`❌ 客户端断开连接 - 代码: ${code}, 原因: ${reason}, 是否正常: ${remote}`);
    },

    // 连接或通信中出现错误
    onError: (ws, error) => {
        console.error("🚫 WebSocket 错误：", error?.message || error);
    },

    // 服务器启动成功或失败
    onStart: () => {
        console.log("✅ WebSocket 服务器启动成功，监听端口 8090");
    }
});

base.sleep(1000); // 延迟 1 秒，等待服务器启动

console.log("🛰️ 正在连接到 WebSocket 服务器...");

// 启动 WebSocket 客户端，连接本地服务器
websocket.client("ws://localhost:8090", {
    // 连接成功
    onOpen: (ws, handshake) => {
        console.log("✅ 已连接到服务器");
        console.debug("状态消息：", handshake.getHttpStatusMessage());
        ws.send("您好我是客户端")
    },

    // 接收到服务器消息
    onMessage: (ws, message) => {
        console.log("📥 接收消息：", message);
    },

    // 断开连接
    onClose: (ws, code, reason, remote) => {
        console.warn(`⚠️ 与服务器断开连接 - 代码: ${code}, 原因: ${reason}, 是否正常: ${remote}`);
    },

    // 错误处理
    onError: (ws, error) => {
        console.error("💥 客户端发生错误：", error?.message || error);
    }
});


```

### websocket服务端: :green_square:

:lock:**权限**: 网络

**用法示例**:
```javascript
const core = require('cheese-js'); // 导入 cheese-js 核心模块

const { base, websocket } = core;

console.log("🚀 正在启动 WebSocket 服务器...");

// 启动 WebSocket 服务器，监听 8090 端口
websocket.server(8090, {
    // 客户端连接时触发
    onOpen: (ws, handshake) => {
        console.log("✅ 客户端已连接");
        console.debug("🛣️ 连接路径：", handshake.getResourceDescriptor());
    },

    // 接收到客户端消息
    onMessage: (ws, message) => {
        console.log("📨 收到消息：", message);
    },

    // 客户端断开连接
    onClose: (ws, code, reason, remote) => {
        console.warn(`❌ 客户端断开连接 - 代码: ${code}, 原因: ${reason}, 是否正常: ${remote}`);
    },

    // 连接或通信中出现错误
    onError: (ws, error) => {
        console.error("🚫 WebSocket 错误：", error?.message || error);
    },

    // 服务器启动成功或失败
    onStart: () => {
        console.log("✅ WebSocket 服务器启动成功，监听端口 8090");
    }
});

base.sleep(1000); // 延迟 1 秒，等待服务器启动

console.log("🛰️ 正在连接到 WebSocket 服务器...");

// 启动 WebSocket 客户端，连接本地服务器
websocket.client("ws://localhost:8090", {
    // 连接成功
    onOpen: (ws, handshake) => {
        console.log("✅ 已连接到服务器");
        console.debug("状态消息：", handshake.getHttpStatusMessage());
        ws.send("您好我是客户端")
    },

    // 接收到服务器消息
    onMessage: (ws, message) => {
        console.log("📥 接收消息：", message);
    },

    // 断开连接
    onClose: (ws, code, reason, remote) => {
        console.warn(`⚠️ 与服务器断开连接 - 代码: ${code}, 原因: ${reason}, 是否正常: ${remote}`);
    },

    // 错误处理
    onError: (ws, error) => {
        console.error("💥 客户端发生错误：", error?.message || error);
    }
});

```