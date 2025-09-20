---
outline: deep
---

## HTTP GET请求示例

```python
import ssl
import certifi
from urllib import request

# 目标URL
url = "https://www.baidu.com/"

# 使用 certifi.where() 提供权威 CA 证书，创建 SSL 上下文，确保安全连接
context = ssl.create_default_context(cafile=certifi.where())

# 发送 GET 请求并读取响应
with request.urlopen(url, context=context) as response:
    print(response.read()[:100])  # 只输出前100字节
```

---

### 参数说明

- **url**: 请求的目标地址
- **context**: SSL安全上下文，使用`certifi.where()`证书
- **response.read()**: 读取响应内容

---

## HTTP POST请求示例

```python
import ssl
import certifi
from urllib import request, parse

# 目标URL
url = "https://www.baidu.com/"

# POST请求体数据（字典形式）
data = {
    'key1': 'value1',
    'key2': 'value2'
}

# 编码为URL参数格式
post_data = parse.urlencode(data).encode('utf-8')

# 使用 certifi.where() 提供权威 CA 证书，创建 SSL 上下文，确保安全连接
context = ssl.create_default_context(cafile=certifi.where())

# 构建请求对象，指定 method 为 POST
req = request.Request(url, data=post_data, method="POST")

# 发送请求并读取响应
with request.urlopen(req, context=context) as response:
    print(response.read()[:100])  # 只输出前100字节
```

---

### 参数说明

- **url**: 请求的目标地址
- **data**: POST 提交的数据（以字典形式）
- **context**: SSL安全上下文，使用`certifi.where()`证书
- **request.Request**: 构建自定义请求，可设定为POST
- **response.read()**: 读取响应内容

---

### 用法示例

如需发送表单数据或 JSON 数据，请根据 API 要求调整 `data` 参数和 `headers`。

**发送 JSON 数据示例**:

```python
import ssl
import certifi
import json
from urllib import request

url = "https://www.baidu.com/"
data = json.dumps({'key': 'value'}).encode('utf-8')
context = ssl.create_default_context(cafile=certifi.where())
req = request.Request(
    url,
    data=data,
    method="POST",
    headers={'Content-Type': 'application/json'}
)
with request.urlopen(req, context=context) as response:
    print(response.read())
```

---

## 下载文件示例

```python
import ssl
import certifi
from urllib import request

# 文件下载URL
file_url = "https://www.example.com/somefile.zip"
save_path = "downloaded_file.zip"

# 使用 certifi.where() 提供权威 CA 证书，创建 SSL 上下文
context = ssl.create_default_context(cafile=certifi.where())

# 下载文件并保存
with request.urlopen(file_url, context=context) as response, open(save_path, "wb") as out_file:
    out_file.write(response.read())

print(f"文件下载完成，保存为: {save_path}")
```

---

### 参数说明

- **file_url**: 需要下载的文件地址
- **save_path**: 本地保存路径
- **context**: SSL安全上下文，使用`certifi.where()`证书
- **open(save_path, "wb")**: 以二进制写入方式保存文件

---