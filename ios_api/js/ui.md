---
outline: deep
---

## UI 界面相关

```javascript
const core = require('cheese-js');
const ui = core.ui;
```

### 显示 UI 内容: `show(content: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (content): 要显示的 UI 内容

**返回**:

- `boolean`: 是否成功显示 UI 内容

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const result = ui.show("<html><body><h1>Hello World</h1></body></html>");
console.log(`显示结果: ${result}`);
```

### 注册回调: `register(callbackFn: (eventId: string) => string): void`  :white_check_mark:

**参数**:

- ⭐`function` (callbackFn): 回调函数，接收事件字符串，返回字符串

**返回**:

- `void`: 无返回值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
ui.register((eventId) => {
    console.log(`收到事件: ${eventId}`);
    return "处理完成";
});
```

### 设置 UI 元素值: `set(id: string, value: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (id): UI 元素的 ID
- ⭐`string` (value): 要设置的值

**返回**:

- `boolean`: 是否成功设置元素值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const result = ui.set("input1", "Hello World");
console.log(`设置结果: ${result}`);
```

### 获取 UI 元素值: `get(content: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (content): 要获取的内容标识

**返回**:

- `string`: 获取到的元素值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const value = ui.get("input1");
console.log(`获取到的值: ${value}`);
```