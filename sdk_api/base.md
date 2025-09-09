---
outline: deep
---

## 基础相关

```javascript
const core = require('cheese-js');
```

### 休眠: `public static sleep(tim: number): void`  :white_check_mark:

**参数**:

- ⭐`number` (millisecond):休眠时间(ms)

**用法示例**:

```javascript

const base = core.base;
const timestamp = new Date();
console.log("开始休眠时间", timestamp.getTime());
base.sleep(3000)
console.log("结束休眠时间", timestamp.getTime()); 
```

### 吐司: `public static toast(message: string, gravity?: number, xOffset?: number, yOffset?: number): void`  :white_check_mark:

**参数**:

- ⭐`string` (msg):消息
- `string` (gravity):位置
- `string` (xOffset):x轴偏移量
- `string` (yOffset):y轴偏移量

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const base = core.base;//从核心模块导入base相关包
base.toast("Hello Cheese") //在默认屏幕位置显示一个吐司气泡
base.sleep(1000)
base.toast("Hello Cheese", base.gravity.TOP, 0, 0) //在屏幕上部分显示一个气泡 x轴偏移为0 y轴偏移也为0
```




### 日志: `console.log(...args:any[]):void` :green_square:

**参数**:

- ⭐`any[]` (...args):消息

**用法示例**:

```javascript
console.log("欢迎使用Cheese")
```



### 停止: `public static exit(): void` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const thread = new core.thread(); // 从核心模块导入并实例化 thread
const base = core.base; // 从核心模块导入 base 相关功能

let num = 0; // 记录主线程循环次数

// 创建子线程
thread.create(() => {
    while (true) {
        // 子线程每秒检查 num 变量，如果 num >= 3，则停止脚本执行
        if (num >= 3) {
            console.log("停止运行");
            base.exit(); // 停止整个脚本
        }
        base.sleep(1000); // 每秒检查一次
    }
});

// 主线程，每秒循环一次，增加 num 的值
while (true) {
    base.sleep(1000); // 每秒休眠一次，防止占用过多CPU
    console.log("主线程循环次数：" + num);
    num++; // 每次主线程循环 num + 1
}

```



### 推到Ui进程运行: `public static runOnUi(callback: Callback): void` :white_check_mark:

**参数**:

- ⭐`Callback` (callback):代码回调

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const base = core.base; // 从核心模块导入 base 相关功能

// 将代码推送到 UI 线程执行，确保涉及到 UI 操作的代码运行在 UI 线程中
// 这样可以避免 UI 操作在非 UI 线程中执行时引发错误
base.runOnUi(() => {
    try {
        console.log("UI 线程中执行的代码");
        // 在此处执行所有需要在 UI 线程上运行的操作，比如更新视图、处理UI组件等
    } catch (error) {
        // 捕获任何在 UI 线程中执行时可能发生的异常
        console.error("在 UI 线程执行时发生错误:", error);
    }
});

```


### Rect矩形: `public static Rect(left: number, top: number, bottom: number, right: number): string` :white_check_mark:

**参数**:

- ⭐`number` (left):左
- ⭐`number` (top):上
- ⭐`number` (bottom):下
- ⭐`number` (right):右

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const base = core.base;
console.log(base.Rect(1, 2, 3, 4))
```



### 释放对象: `public static release(obj: any): boolean` :white_check_mark:

**参数**:

- ⭐`number` (left):左
- ⭐`number` (top):上
- ⭐`number` (bottom):下
- ⭐`number` (right):右

**用法示例**:

```javascript

const base = core.base;
base.release(converters.sdToStream("/storage/emulated/0/1.txt"))
```


### 当前文件：: `public static getFileName(): string` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const base = core.base;//从核心模块导入base相关包
console.log("当前文件："+base.getFileName())

```

### 当前文件夹：: `public static getDirName(): string` :white_check_mark:

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
const base = core.base;//从核心模块导入base相关包
console.log("当前文件夹："+base.getDirName())

```