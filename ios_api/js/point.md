---
outline: deep
---

## 坐标点操作相关

```javascript
const core = require('cheese-js');
const point = core.point;
```

### 点击操作: `tap(x: number, y: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (x): 点击位置的 X 坐标
- ⭐`number` (y): 点击位置的 Y 坐标

**返回**:

- `boolean`: 是否成功执行点击操作

**用法示例**:

```javascript
const core = require('cheese-js');
const point = core.point;
const result = point.tap(100, 200);
console.log(`点击结果: ${result}`);
```

### 双击操作: `double_tap(x: number, y: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (x): 双击位置的 X 坐标
- ⭐`number` (y): 双击位置的 Y 坐标

**返回**:

- `boolean`: 是否成功执行双击操作

**用法示例**:

```javascript
const core = require('cheese-js');
const point = core.point;
const result = point.double_tap(150, 300);
console.log(`双击结果: ${result}`);
```

### 长按操作: `touch_and_hold(x: number, y: number, durationSeconds: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (x): 长按位置的 X 坐标
- ⭐`number` (y): 长按位置的 Y 坐标
- ⭐`number` (durationSeconds): 长按持续时间（秒）

**返回**:

- `boolean`: 是否成功执行长按操作

**用法示例**:

```javascript
const core = require('cheese-js');
const point = core.point;
const result = point.touch_and_hold(200, 400, 2);
console.log(`长按结果: ${result}`);
```

### 滑动操作: `swipe(fromX: number, fromY: number, toX: number, toY: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 滑动起始位置的 X 坐标
- ⭐`number` (fromY): 滑动起始位置的 Y 坐标
- ⭐`number` (toX): 滑动结束位置的 X 坐标
- ⭐`number` (toY): 滑动结束位置的 Y 坐标

**返回**:

- `boolean`: 是否成功执行滑动操作

**用法示例**:

```javascript
const core = require('cheese-js');
const point = core.point;
const result = point.swipe(100, 300, 400, 300);
console.log(`滑动结果: ${result}`);
```

### 拖拽操作: `drag(fromX: number, fromY: number, toX: number, toY: number, durationSeconds: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 拖拽起始位置的 X 坐标
- ⭐`number` (fromY): 拖拽起始位置的 Y 坐标
- ⭐`number` (toX): 拖拽结束位置的 X 坐标
- ⭐`number` (toY): 拖拽结束位置的 Y 坐标
- ⭐`number` (durationSeconds): 拖拽持续时间（秒）

**返回**:

- `boolean`: 是否成功执行拖拽操作

**用法示例**:

```javascript
const core = require('cheese-js');
const point = core.point;
const result = point.drag(50, 100, 250, 400, 1.5);
console.log(`拖拽结果: ${result}`);
```