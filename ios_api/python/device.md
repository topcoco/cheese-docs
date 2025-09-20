---
outline: deep
---

## 设备相关

```python
from cheese_core import Device
```

### 获取设备信息: `device_info(): dict`  :white_check_mark:

**返回**:

- `dict`: 设备信息字典

**用法示例**:

```python
from cheese_core import Device
info = Device.device_info()
print(f"设备信息: {info}")
```

### 获取屏幕宽度: `get_screen_width(): int`  :white_check_mark:

**返回**:

- `int`: 屏幕宽度(px)

**用法示例**:

```python
from cheese_core import Device
width = Device.get_screen_width()
print(f"屏幕宽度: {width}")
```

### 获取屏幕高度: `get_screen_height(): int`  :white_check_mark:

**返回**:

- `int`: 屏幕高度(px)

**用法示例**:

```python
from cheese_core import Device
height = Device.get_screen_height()
print(f"屏幕高度: {height}")
```

### 获取屏幕缩放比例: `get_screen_scale(): float`  :white_check_mark:

**返回**:

- `float`: 屏幕缩放比例（例如1, 1.5）

**用法示例**:

```python
from cheese_core import Device
scale = Device.get_screen_scale()
print(f"屏幕缩放比例: {scale}")
```

### 获取电池信息: `battery_info(): dict`  :white_check_mark:

**返回**:

- `dict`: 电池信息

**用法示例**:

```python
from cheese_core import Device
info = Device.battery_info()
print(f"电池信息: {info}")
```

### 获取窗口尺寸: `window_size(): (width: float, height: float)`  :white_check_mark:

**返回**:

- `tuple`: 窗口宽度和高度

**用法示例**:

```python
from cheese_core import Device
width, height = Device.window_size()
print(f"窗口尺寸: {width}x{height}")
```

### 截图: `screenshot(): str`  :white_check_mark:

**返回**:

- `str`: base64 格式的截图数据

**用法示例**:

```python
from cheese_core import Device
screenshot = Device.screenshot()
print(f"截图数据长度: {len(screenshot)} 字符")
```

### 检查是否锁定: `is_locked(): bool`  :white_check_mark:

**返回**:

- `bool`: 是否锁定

**用法示例**:

```python
from cheese_core import Device
is_locked = Device.is_locked()
print(f"设备锁定状态: {is_locked}")
```

### 获取剪贴板内容: `get_pasteboard(): str`  :white_check_mark:

**返回**:

- `str`: 剪贴板内容

**用法示例**:

```python
from cheese_core import Device
content = Device.get_pasteboard()
print(f"剪贴板内容: '{content}'")
```

### 锁定设备: `lock(): bool`  :white_check_mark:

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
from cheese_core import Device
result = Device.lock()
print(f"锁定操作结果: {result}")
```

### 解锁设备: `unlock(): bool`  :white_check_mark:

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
from cheese_core import Device
result = Device.unlock()
print(f"解锁操作结果: {result}")
```

### 设置剪贴板内容: `set_pasteboard(content: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (content): 要设置的剪贴板内容

**返回**:

- `bool`: 是否成功设置

**用法示例**:

```python
from cheese_core import Device
test_content = "Python测试内容123"
result = Device.set_pasteboard(test_content)
print(f"设置剪贴板结果: {result}")
current_content = Device.get_pasteboard()
print(f"设置后剪贴板内容: '{current_content}'")
```
