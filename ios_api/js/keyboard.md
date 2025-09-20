---
outline: deep
---

## 键盘相关 API

```javascript
const core = require('cheese-js');
const keyboard = core.keyboard;
```

### 发送按键: `send_keys(text: string, frequency: number): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (text): 要发送的文本内容
- ⭐`number` (frequency): 发送频率

**返回**:

- `boolean`: 是否成功发送按键

**用法示例**:

```javascript
const core = require('cheese-js');
const keyboard = core.keyboard;
const result = keyboard.send_keys("Hello World", 100);
console.log(`发送按键结果: ${result}`);
```

### 收起键盘: `keyboard_dismiss(): boolean`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `boolean`: 是否成功收起键盘

**用法示例**:

```javascript
const core = require('cheese-js');
const keyboard = core.keyboard;
const result = keyboard.keyboard_dismiss();
console.log(`收起键盘结果: ${result}`);
```

### 按下指定按钮: `press_button(button: number): boolean`  :white_check_mark:

**参数**:

- ⭐`number` (button): 按钮代码或标识符

**返回**:

- `boolean`: 是否成功按下按钮

**用法示例**:

```javascript
const core = require('cheese-js');
const keyboard = core.keyboard;
const result = keyboard.press_button(13); // 例如：回车键
console.log(`按钮按下结果: ${result}`);
```