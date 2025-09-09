---
outline: deep
---

## 应用相关

```python
from cheese_core import App
```

### 启动应用: `launch(bundle_id: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `bool`: 是否成功启动应用

**用法示例**:

```python
from cheese_core import App
result = App.launch("com.apple.Calculator")
print(f"启动结果: {result}")
```

### 终止应用: `terminate(bundle_id: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `bool`: 是否成功终止应用

**用法示例**:

```python
from cheese_core import App
result = App.terminate("com.apple.Calculator")
print(f"终止结果: {result}")
```

### 激活应用: `activate(bundle_id: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `bool`: 是否成功激活应用（即切换到前台）

**用法示例**:

```python
from cheese_core import App
result = App.activate("com.apple.Calculator")
print(f"激活结果: {result}")
```

### 获取应用状态: `state(bundle_id: str): str`  :white_check_mark:

**参数**:

- ⭐`str` (bundle_id): 应用的 Bundle ID，例如 `"com.apple.Calculator"`

**返回**:

- `str`: 应用的状态信息（具体值依赖系统实现）

**用法示例**:

```python
from cheese_core import App
state = App.state("com.apple.Calculator")
print(f"应用状态: {state}")
```
