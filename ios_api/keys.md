---
outline: deep
---

## 设备按键相关 API

```python
from cheese_core import Keys
```

### 按下Home键: `home() -> bool`  :white_check_mark:



**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Keys.home()
print("Home键操作结果:", result)
```