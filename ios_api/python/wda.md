---
outline: deep
---

## 基础相关

```python
from cheese_core import WDA
```

### 初始化WDA: `init():bool`  :white_check_mark:

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
from cheese_core import WDA

if WDA.init():
    print("WDA初始化成功")
else:
    print("WDA初始化失败")
```

### 获取错误信息: `get_error(): str`  :white_check_mark:

**返回**:

- `str`: WDA错误信息

**用法示例**:

```python
from cheese_core import WDA

error_msg = WDA.get_error()
if error_msg:
    print(f"WDA错误信息: {error_msg}")
else:
    print("没有错误信息")
```