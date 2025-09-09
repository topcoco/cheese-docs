---
outline: deep
---

## 屏幕坐标点相关 API

```python
from cheese_core import Point
```

### 单点点击: `tap(x: int, y: int) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (x): 横坐标
- ⭐`int` (y): 纵坐标

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Point.tap(100, 200)
print("单点点击结果:", result)
```

---

### 双击: `double_tap(x: int, y: int) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (x): 横坐标
- ⭐`int` (y): 纵坐标

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Point.double_tap(150, 250)
print("双击结果:", result)
```

---

### 长按: `touch_and_hold(x: int, y: int, duration: float) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (x): 横坐标
- ⭐`int` (y): 纵坐标
- ⭐`float` (duration): 按住时间（秒）

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Point.touch_and_hold(200, 300, 1.5)
print("长按结果:", result)
```

---

### 滑动操作: `swipe(x1: int, y1: int, x2: int, y2: int) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (x1): 起点横坐标
- ⭐`int` (y1): 起点纵坐标
- ⭐`int` (x2): 终点横坐标
- ⭐`int` (y2): 终点纵坐标

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Point.swipe(100, 200, 300, 400)
print("滑动结果:", result)
```

---

### 拖拽操作: `drag(x1: int, y1: int, x2: int, y2: int, duration: float) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (x1): 起点横坐标
- ⭐`int` (y1): 起点纵坐标
- ⭐`int` (x2): 终点横坐标
- ⭐`int` (y2): 终点纵坐标
- ⭐`float` (duration): 拖拽总时长（秒）

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Point.drag(50, 50, 250, 250, 0.5)
print("拖拽结果:", result)
```

---

### 坐标元组点击: `tap_point(point: tuple[int, int]) -> bool`  :white_check_mark:

**参数**:

- ⭐`tuple[int, int]` (point): (x, y) 坐标元组

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
test_point = (120, 240)
result = Point.tap_point(test_point)
print("元组点击结果:", result)
```

---

### 两点间滑动: `swipe_between(from_point: tuple[int, int], to_point: tuple[int, int]) -> bool`  :white_check_mark:

**参数**:

- ⭐`tuple[int, int]` (from_point): 起点坐标元组
- ⭐`tuple[int, int]` (to_point): 终点坐标元组

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
from_point = (10, 20)
to_point = (30, 40)
result = Point.swipe_between(from_point, to_point)
print("两点间滑动结果:", result)
```