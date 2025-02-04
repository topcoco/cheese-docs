---
outline: deep
---

## 基础相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
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

const base = core.base;
base.toast("欢迎使用Cheese")
base.toast("欢迎使用Cheese", base.gravity.TOP, 0, 0)
```



### 详细日志: `public static println(msg:string):void` :green_square:

**参数**:

- ⭐`any[]` (...args):消息

**用法示例**:

```javascript

const base = core.base;
base.println("欢迎使用Cheese")
```

### 日志: `console.log(...args:any[]):void` :green_square:

**参数**:

- ⭐`any[]` (...args):消息

**用法示例**:

```javascript
console.log("欢迎使用Cheese")
```



### 停止: `public static exit(id: string = 'all'): void` :white_check_mark:

**用法示例**:

```javascript

const base = core.base;
console.log("开始运行")
base.exit()
base.sleep(1000)
console.log("正常运行完毕")
```


### 判断是不是停止异常: `public static isExitException(e: any): void` :white_check_mark:

**用法示例**:

```javascript
const base = core.base;
try{
    console.log("开始运行")
    base.exit()
    base.sleep(1000)
    console.log("正常运行完毕") 
}catch (e) {
    base.isExitException(e)
}
```

### 强制停止: `public static terminate(id: string = 'all'): void` :white_check_mark:
- Node版引擎独有
:rotating_light: **危险**

**用法示例**:

```javascript

const base = core.base;
console.log("开始运行")
base.terminate()
base.sleep(1000)
console.log("正常运行完毕")
```

### 推到Ui进程运行: `public static runOnUi(callback: Callback): void` :white_check_mark:

**参数**:

- ⭐`Callback` (callback):代码回调

**用法示例**:

```javascript

const base = core.base;
base.runOnUi(() => {
    console.log("Ui线程")
})
```

### 启动Activity: `public static startActivity(activityId: string, iActivity: Callback): void` :white_check_mark:

**参数**:

- ⭐`string` (activityId):内置Activity的对应Id [0...9]
- ⭐`Callback` (callback):回调

**用法示例**:

```javascript

const base = core.base;
const xml = core.ui.xml;
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.startActivity("P0", (e) => {
    console.log("onCreate", e)
    e.context.setContentView(e.view)
})
```

### 将js字符串编译为V8字节码: `public static makeJsb(jsString: string): string` :white_check_mark:
- Node版引擎独有
**参数**:

- ⭐`string` (jsString):js字符串

**返回值**:

- :green_circle:`string`:js字节码
- :red_circle:null

**用法示例**:

```javascript

const base = core.base;
let jsb = base.makeJsb('console.log("111")')
console.log(jsb)
```

### 运行V8字节码: `public static runJsb(jsbString: any): void` :white_check_mark:
- Node版引擎独有
**参数**:

- ⭐`string` (jsbString):js字节码

**用法示例**:

```javascript

const base = core.base;
let jsb = base.makeJsb('console.log("111")')
base.runJsb(jsb)
```

### Rect矩形: `public static Rect(left: number, top: number, bottom: number, right: number): string` :white_check_mark:

**参数**:

- ⭐`number` (left):左
- ⭐`number` (top):上
- ⭐`number` (bottom):下
- ⭐`number` (right):右

**用法示例**:

```javascript

const base = core.base;
console.log(base.Rect(1, 2, 3, 4))
```

### Rect矩形1: `Rect1(left: number, top: number, bottom: number, right: number): any` :white_check_mark:

**参数**:

- ⭐`number` (left):左
- ⭐`number` (top):上
- ⭐`number` (bottom):下
- ⭐`number` (right):右

**用法示例**:

```javascript

const base = core.base;
console.log(base.Rect1(1, 2, 3, 4))
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
