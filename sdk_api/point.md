---
outline: deep
---

## 坐标相关

```javascript
const core = require('cheese-js');
```

### 坐标滑动:`swipeToPoint(sx: number, sy: number, ex: number, ey: number, dur: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):开始 x
- ⭐`number` (y):开始 y
- ⭐`number` (x1):结束 x
- ⭐`number` (y1):结束 y
- ⭐`number` (dur):滑动时长(ms)

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.swipeToPoint(100, 200, 100, 800, 1000)) {
    console.log("滑动成功")
}
```

### 超级坐标滑动:`superSwipeToPoint(sx: number, sy: number, ex: number, ey: number, dur: number,xShake:number,yShake:number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):开始 x
- ⭐`number` (y):开始 y
- ⭐`number` (x1):结束 x
- ⭐`number` (y1):结束 y
- ⭐`number` (dur):滑动时长(ms)
- ⭐`number` (xShake):x抖动幅度
- ⭐`number` (yShake):y抖动幅度

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.superSwipeToPoint(200,600,300,600,2000,0,50)) {
    console.log("滑动成功")
}
```

### 坐标点击:`clickPoint(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):x 轴坐标
- ⭐`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.clickPoint(12, 15)) {
    console.log("点击成功")
}
```

### 坐标长按:`longClickPoint(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):x 轴坐标
- ⭐`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.longClickPoint(100, 200)) {
    console.log("点击成功")
}
```

### 触摸按下:`touchDown(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):x 轴坐标
- ⭐`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.touchDown(141, 864)) {
    console.log("按下成功")
}
```

### 触摸滑动:`touchMove(x: number, y: number): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):x 轴坐标
- ⭐`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.touchMove(200, 890)) {
    console.log("滑动成功")
}
```

### 触摸抬起:`touchUp(): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (x):x 轴坐标
- ⭐`number` (y):y 轴坐标

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.touchUp(12, 15)) {
    console.log("抬起成功")
}
```

### 触摸手势:`gesture(dur: number, array: Array<Pair<number, number>>): boolean` :white_check_mark:

:lock:**权限**: 无障碍

**参数**:

- ⭐`number` (dur):持续时间 毫秒
- ⭐`Array<Pair<number, number>>` (array): 手势列表对象

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:false

**用法示例**:

```javascript

const point = core.point;
if (point.gesture(2000,converters.pairArray(100,233,544,264))) {
    console.log("执行触摸成功")
}
```



