---
outline: deep
---

## 路径相关 API

```python
from cheese_core import Path
```

### 获取资源目录路径: `assets_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: 资源目录的绝对路径，路径中包含 "assets"

**用法示例**:

```python
path = Path.assets_directory()
print("资源目录路径:", path)
```

---

### 获取日志目录路径: `log_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: 日志目录的绝对路径，路径中包含 "log"

**用法示例**:

```python
path = Path.log_directory()
print("日志目录路径:", path)
```

---

### 获取 Python 目录路径: `py_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: Python目录的绝对路径，路径中包含 "python"

**用法示例**:

```python
path = Path.py_directory()
print("Python目录路径:", path)
```

---

### 获取主程序目录路径: `main_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: 主程序目录的绝对路径，路径中包含 "main"

**用法示例**:

```python
path = Path.main_directory()
print("主程序目录路径:", path)
```

---

### 获取 UI 资源目录路径: `ui_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: UI资源目录的绝对路径，路径中包含 "ui"

**用法示例**:

```python
path = Path.ui_directory()
print("UI资源目录路径:", path)
```

---

### 获取工作目录路径: `working_directory() -> str`  :white_check_mark:

**参数**:

- 无

**返回**:

- `str`: 工作目录的绝对路径，路径中包含 "home"

**用法示例**:

```python
path = Path.working_directory()
print("工作目录路径:", path)
```