---
outline: deep
---

## UI 操作相关

```python
from cheese import UI
```

### 显示 UI 界面: `show(ui_content: str)`  :white_check_mark:

**参数**:

- ⭐`ui_content` (`str`): UI 内容字符串

**用法示例**:

```python
from cheese import UI

# 显示一个窗口
UI.show('<window title="My App">...</window>')
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败或显示失败

---

### 设置 UI 控件值: `set(control_id: str, value: str): bool`  :white_check_mark:

**参数**:

- ⭐`control_id` (`str`): 控件ID
- ⭐`value` (`str`): 要设置的值

**返回**:

- `bool`: 是否设置成功

**用法示例**:

```python
from cheese import UI

# 设置用户名输入框内容
success = UI.set("username_input", "JohnDoe")
print(f"设置结果: {success}")
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败

---

### 获取 UI 控件值: `get(control_id: str): Optional[str]`  :white_check_mark:

**参数**:

- ⭐`control_id` (`str`): 控件ID

**返回**:

- `Optional[str]`: 控件当前值，如果控件不存在返回 None

**用法示例**:

```python
from cheese import UI

# 获取用户名输入框当前内容
value = UI.get("username_input")
print(f"Current value: {value}")
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败

---

### 注册 UI 回调: `register(ui_callback: any)`  :white_check_mark:

**参数**:

- ⭐`ui_callback` (`Callable`): UI 事件回调函数

**用法示例**:

```python
from cheese import UI

def on_ui_event(event):
    print(f"收到UI事件: {event}")

UI.register(on_ui_event)
```

---