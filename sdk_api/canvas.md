---
outline: deep
---

## Canvas相关

```javascript
const core = require('cheese-js');
```

### 绘制屏幕点: `public static drawPointOnScreen(...args: any[]): EasyWindow<any>`  
### 重载方法: `public static drawPointOnScreen(text: string, x: number, y: number): EasyWindow<any>` :white_check_mark:

**参数**:

- `string` (text): 显示的文本内容  
- `number` (textColor, 可选): 文字颜色（如 `0xFFFF0000` 表示红色）  
- `number` (pointColor, 可选): 点的颜色  
- `number` (x): 点的横坐标  
- `number` (y): 点的纵坐标  

**返回值**:

- :green_circle: `EasyWindow<any>` — 绘制点对应的窗口对象，可进行后续操作，如设置显示时长、显示或关闭等

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const canvas = core.canvas; // 从核心模块导入 canvas 相关功能
const base = core.base; // 从核心模块导入 base 相关功能

// 封装绘制点的函数，使其更具可复用性
function drawPointOnScreen(message, x, y, duration = 1000) {
    try {
        // 在指定位置绘制点并显示
        canvas.drawPointOnScreen(message, x, y)
            .setDuration(duration) // 设置显示时长
            .show(); // 显示点
        console.log(`绘制点成功: ${message} at (${x}, ${y})`);
    } catch (error) {
        // 捕获并输出绘制点时的任何错误
        console.error("绘制点时发生错误:", error);
    }
}

// 将绘制点操作推送到 UI 线程中执行
base.runOnUi(() => {
    // 调用封装好的绘制点函数
    drawPointOnScreen("测试", 208, 1050, 1000);
});
```

### 绘制屏幕矩形: `public static drawRectOnScreen(...args: any[]): EasyWindow<any>`  
### 重载方法: `public static drawRectOnScreen(text: string, x: number, y: number): EasyWindow<any>` :white_check_mark:

**参数**:

- `string` (text): 显示的文本内容  
- `number` (textColor, 可选): 文字颜色（如 `0xFFFF0000` 表示红色）  
- `number` (pointColor, 可选): 点的颜色  
- `number` (x): 点的横坐标  
- `number` (y): 点的纵坐标  

**返回值**:

- :green_circle: `EasyWindow<any>` — 绘制点对应的窗口对象，可进行后续操作，如设置显示时长、显示或关闭等

**用法示例**:

```javascript
const core = require('cheese-js'); // 导入核心模块
const canvas = core.canvas; // 从核心模块导入 canvas 相关功能
const base = core.base; // 从核心模块导入 base 相关功能

// 封装绘制矩形的函数，提升代码复用性
function drawRectOnScreen(message, rect, duration = 1000) {
    try {
        // 绘制矩形并显示
        canvas.drawRectOnScreen(message, rect)
            .setDuration(duration) // 设置显示时长
            .show(); // 显示矩形
        console.log(`绘制矩形成功: ${message} at ${JSON.stringify(rect)}`);
    } catch (error) {
        // 捕获并输出绘制矩形时的任何错误
        console.error("绘制矩形时发生错误:", error);
    }
}

// 将绘制矩形操作推送到 UI 线程中执行
base.runOnUi(() => {
    // 调用封装好的绘制矩形函数，传入矩形的坐标和尺寸
    const rect = base.Rect(35, 970, 444, 1119); // 创建矩形
    drawRectOnScreen("测试", rect, 1000);
});

```
