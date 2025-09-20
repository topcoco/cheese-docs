---
outline: deep
---

## 键盘相关 API

```python
from cheese_core import Keyboard
```

### 文本输入: `send_keys(text: str) -> bool`  :white_check_mark:

**参数**:

- ⭐`str` (text): 要输入的文本内容

**返回**:

- `bool`: 输入是否成功

**用法示例**:

```python
test_text = "Hello World 123"
result = Keyboard.send_keys(test_text)
print("已发送文本:", test_text)
print("发送结果:", result)
```

---

### 关闭键盘: `dismiss() -> bool`  :white_check_mark:


**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
result = Keyboard.dismiss()
print("键盘关闭操作已执行")
print("关闭结果:", result)
```

---

### 按下键码: `press_button(key_code: int) -> bool`  :white_check_mark:

**参数**:

- ⭐`int` (key_code): 要按下的键码（数字）

**返回**:

- `bool`: 操作是否成功

**用法示例**:

```python
key_code = 99999
result = Keyboard.press_button(key_code)
print("按下键码:", key_code)
print("操作结果:", result)
```