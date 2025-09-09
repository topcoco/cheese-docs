---
outline: deep
---

## 基础相关

```python
from cheese_core import Base
```

### 休眠: `sleep(tim: number): void`  :white_check_mark:

**参数**:

- ⭐`number` (millisecond):休眠时间(ms)

**用法示例**:

```python
from cheese_core import Base
delay_ms = 1000  # 1000毫秒 = 1秒
start_time = time.perf_counter()
Base.sleep(delay_ms)
elapsed_ms = (time.perf_counter() - start_time) * 1000  # 转为毫秒
print(f"\n请求延时: {delay_ms}ms, 实际耗时: {elapsed_ms:.2f}ms")
```

### 打印日志: `printt(msg: str): void`  :white_check_mark:

**参数**:

- ⭐`str` (msg):打印消息内容

**用法示例**:

```python
from cheese_core import Base
test_msg = "测试打印功能 - Hello from Python"
Base.printt(test_msg)
```

### 退出脚本: `exit(): void`  :white_check_mark:



**用法示例**:

```python
try:
    Base.exit()
    # 如果执行到这里说明exit没有立即终止程序
except Exception as e:
    self.fail(f"退出时出现意外错误: {str(e)}")
```
