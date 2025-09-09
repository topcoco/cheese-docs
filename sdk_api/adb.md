---
outline: deep
---

## Shell相关

```javascript
const core = require('cheese-js');
```

### 执行shell命令:`exec(command: string): string` :white_check_mark:

**参数**:

- ⭐`string` (command): 执行的具体命令

**返回值**:

- :green_circle:`string`:执行成功结果
- :red_circle:`string`:执行失败结果

**用法示例**:

```javascript

const core = require('cheese-js'); // 导入核心模块
const adb = core.adb; // 从核心模块导入 adb 相关功能

// 激活 ADB 权限，授权命令位于 cheese-sdk/bin 目录下
// 执行命令：./cheese-box shell，授权后可以拔掉手机

// 执行 ADB 操作并打印结果

// 点击屏幕上的坐标 (200, 300)
console.log(adb.exec("input tap 200 300"));

// 从 (100,500) 向上滑动到 (100,100)
console.log(adb.exec("input swipe 100 500 100 100"));

// 输入文本 "Hello World"（空格需转义为 %20）
console.log(adb.exec("input text 'Hello%20World'"));

// 模拟按下 Home 键
console.log(adb.exec("input keyevent 3"));

// 模拟按下返回键（Back）
console.log(adb.exec("input keyevent 4"));

// 模拟按下电源键（Power）
console.log(adb.exec("input keyevent 26"));

// 长按屏幕上的 (300,1000) 坐标，持续 2 秒
console.log(adb.exec("input swipe 300 1000 300 1000 2000"));

```
