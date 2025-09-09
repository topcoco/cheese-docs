---
outline: deep
---

## 屏幕录制与截图相关 API

```python
from cheese_core import RecordScreen
```

### 请求屏幕录制权限: `request_permission(mode: int, time: int = 5) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (mode): 权限请求模式
    - 模式1：WDA截图权限申请
    - 模式2：直播截图权限申请
- ⭐`int` (time=5): 权限超时时间（秒，默认5秒）

**返回**:

- `bool`: 权限请求是否成功

**用法示例**:

```python
mode = 1  # WDA截图权限
result = RecordScreen.request_permission(mode, time=5)
print("权限请求结果:", result)
```

---

### 捕获屏幕截图: `capture_screen(mode: int, time: int = 5) -> PyImage`  :white_check_mark:
- 请求权限后至少延迟2秒才能进行截图否则大概率会截图失败
**参数**:

- ⭐`int` (mode): 截图模式
    - 模式1：WDA截图
    - 模式2：直播截图
- ⭐`int` (time=5): 截图等待时长（秒，默认5秒）

**返回**:

- `PyImage`: 屏幕截图对象（拥有 `width` 和 `height` 属性）

**用法示例**:

```python
mode = 2  # 直播截图
img = RecordScreen.capture_screen(mode, time=5)
print("截图宽度:", img.width)
print("截图高度:", img.height)
```