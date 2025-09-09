---
outline: deep
---

## 资源相关

```python
from cheese_core import Assets, Path
```

### 读取文件: `read(file_name: str): str`  :white_check_mark:

**参数**:

- ⭐`str` (file_name): 要读取的文件名

**返回**:

- `str`: 文件内容

**用法示例**:

```python
from cheese_core import Assets
content = Assets.read("test_resource.txt")
print(f"文件内容: {content}")
```

### 复制文件: `copy(src: str, dest: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (src): 源文件路径或文件名
- ⭐`str` (dest): 目标文件路径

**返回**:

- `bool`: 是否成功复制

**用法示例**:

```python
from cheese_core import Assets, Path
dest_path = os.path.join(Path.assets_directory(), "test.txt")
result = Assets.copy("test_resource.txt", dest_path)
print(f"文件复制结果: {result}")
```

### 判断是否为目录: `is_folder(path: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (path): 文件夹路径

**返回**:

- `bool`: 是否为文件夹

**用法示例**:

```python
from cheese_core import Assets
result = Assets.is_folder("test")
print(f"是否为目录: {result}")
```

### 判断是否为文件: `is_file(path: str): bool`  :white_check_mark:

**参数**:

- ⭐`str` (path): 文件路径

**返回**:

- `bool`: 是否为文件

**用法示例**:

```python
from cheese_core import Assets
result = Assets.is_file("test_resource.txt")
print(f"是否为文件: {result}")
```
