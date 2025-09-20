---
outline: deep
---

## UI元素节点相关 API

```python
from cheese_core import UiNode
```

### 元素查找与定位

#### 查找元素: `find(selector: str) -> UiNode`  :white_check_mark:

**参数**:

- ⭐`str` (selector): 元素选择器字符串（如JSON）

**返回**:

- `UiNode`: 找到的 UI 元素对象

**用法示例**:

```python
import json
from cheese_core import UiNode

selector_json = json.dumps({"Name": "商城", "Type": "Button"})
node = UiNode().find(selector_json)
```

---

### 点击与手势操作

#### 点击: `click() -> bool`

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.click()
print("点击结果:", result)
```

#### 坐标点击: `tap_element(x: int, y: int) -> bool`

**参数**:

- `x`: X坐标
- `y`: Y坐标

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.tap_element(100, 200)
print("坐标点击结果:", result)
```

#### 坐标点击(浮点): `tap_element_float(x: float, y: float) -> bool`

**参数**:

- `x`: X坐标
- `y`: Y坐标

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.tap_element_float(100.5, 200.5)
print("浮点坐标点击结果:", result)
```

#### 双击: `double_tap() -> bool`

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.double_tap()
print("双击结果:", result)
```

#### 长按: `touch_and_hold(duration: float) -> bool`

**参数**:

- `duration`: 长按持续时间（秒）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.touch_and_hold(1.5)
print("长按结果:", result)
```

#### 双指点击: `two_finger_tap() -> bool`

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.two_finger_tap()
print("双指点击结果:", result)
```

#### 多次点击: `tap_with_number_of_taps(taps: int, touches: int) -> bool`

**参数**:

- `taps`: 点击次数
- `touches`: 手指数量

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.tap_with_number_of_taps(2, 1)
print("多次点击结果:", result)
```

#### 用力按压: `force_touch(pressure: float, duration: float) -> bool`

**参数**:

- `pressure`: 压力值
- `duration`: 持续时间（秒）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.force_touch(0.5, 1.0)
print("压力触控结果:", result)
```

#### 坐标压力触控: `force_touch_float(x: float, y: float, pressure: float, duration: float) -> bool`

**参数**:

- `x`: X坐标
- `y`: Y坐标
- `pressure`: 压力值
- `duration`: 持续时间（秒）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.force_touch_float(100.0, 200.0, 0.5, 1.0)
print("指定坐标压力触控结果:", result)
```

---

### 文本输入与清除

#### 输入文本: `send_keys(text: str, frequency: int = 30) -> bool`

**参数**:

- `text`: 要发送的文本
- `frequency`: 按键频率（默认30）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.send_keys("test")
print("发送文本结果:", result)
```

#### 清空内容: `clear() -> bool`

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.clear()
print("清空内容结果:", result)
```

---

### 拖动与滑动操作

#### 拖动: `drag(from_x: int, from_y: int, to_x: int, to_y: int, duration: float) -> bool`

**参数**:

- `from_x`: 起始 X 坐标
- `from_y`: 起始 Y 坐标
- `to_x`: 目标 X 坐标
- `to_y`: 目标 Y 坐标
- `duration`: 拖动持续时间（秒）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.drag(0, 0, 100, 100, 1.0)
print("拖动结果:", result)
```

#### 浮点拖动: `drag_float(from_x: float, from_y: float, to_x: float, to_y: float, duration: float) -> bool`

**参数**:

- `from_x`: 起始 X 坐标
- `from_y`: 起始 Y 坐标
- `to_x`: 目标 X 坐标
- `to_y`: 目标 Y 坐标
- `duration`: 拖动持续时间（秒）

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.drag_float(0.0, 0.0, 100.0, 100.0, 1.0)
print("浮点拖动结果:", result)
```

#### 滑动: `swipe(from_x: int, from_y: int, to_x: int, to_y: int) -> bool`

**参数**:

- `from_x`: 起始 X 坐标
- `from_y`: 起始 Y 坐标
- `to_x`: 目标 X 坐标
- `to_y`: 目标 Y 坐标

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.swipe(100, 200, 300, 400)
print("滑动结果:", result)
```

#### 浮点滑动: `swipe_float(from_x: float, from_y: float, to_x: float, to_y: float) -> bool`

**参数**:

- `from_x`: 起始 X 坐标
- `from_y`: 起始 Y 坐标
- `to_x`: 目标 X 坐标
- `to_y`: 目标 Y 坐标

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.swipe_float(100.5, 200.5, 300.5, 400.5)
print("浮点滑动结果:", result)
```

#### 方向滑动: `swipe_direction(direction: int, velocity: float) -> bool`

**参数**:

- `direction`: 滑动方向
- `velocity`: 滑动速度

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.swipe_direction(1, 500.0)
print("方向滑动结果:", result)
```

#### 捏合: `pinch(scale: float, velocity: float) -> bool`

**参数**:

- `scale`: 缩放比例
- `velocity`: 速度

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.pinch(1.5, 500.0)
print("捏合结果:", result)
```

#### 捏合缩小: `pinch_to_zoom_out(scale: float) -> bool`

**参数**:

- `scale`: 缩放比例

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.pinch_to_zoom_out(0.8)
print("捏合缩小结果:", result)
```

#### 旋转: `rotate(rotation: float, velocity: float) -> bool`

**参数**:

- `rotation`: 旋转角度
- `velocity`: 旋转速度

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.rotate(90.0, 500.0)
print("旋转结果:", result)
```

#### 滚轮选取: `picker_wheel_select(order: int, offset: int) -> bool`

**参数**:

- `order`: 顺序
- `offset`: 偏移量

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.picker_wheel_select(1, 10)
print("滚轮选择结果:", result)
```

---

### 滚动操作

#### 按名称滚动到元素: `scroll_to_element_by_name(name: str) -> bool`

**参数**:

- `name`: 元素名称

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.scroll_to_element_by_name("首页")
print("滚动到元素结果:", result)
```

#### 按谓词滚动到元素: `scroll_to_element_by_predicate(predicate: str) -> bool`

**参数**:

- `predicate`: 谓词表达式

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.scroll_to_element_by_predicate("Type == 'Button'")
print("滚动到元素结果:", result)
```

#### 滚动到可见区域: `scroll_to_visible() -> bool`

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.scroll_to_visible()
print("滚动到可见区域结果:", result)
```

#### 按方向滚动: `scroll_direction(direction: int, distance: float) -> bool`

**参数**:

- `direction`: 滚动方向
- `distance`: 滚动距离

**返回**:

- `bool`: 是否操作成功

**用法示例**:

```python
result = node.scroll_direction(1, 500.0)
print("方向滚动结果:", result)
```

---

### 子元素操作

#### 查找子元素: `find_child_element(parent_uid: str, selector: str) -> UiNode`

**参数**:

- `parent_uid`: 父节点UID
- `selector`: 子元素选择器

**返回**:

- `UiNode`: 找到的子元素

**用法示例**:

```python
child = node.find_child_element("", "child_selector")
print("子元素:", child)
```

#### 查找可见单元格: `find_visible_cells() -> list`

**返回**:

- `list`: 找到的单元格元素列表

**用法示例**:

```python
cells = node.find_visible_cells()
print("可见单元格:", cells)
```

---

### 属性与状态获取

#### 获取矩形区域: `get_rect() -> ElementRect`

**返回**:

- `ElementRect`: 元素的矩形区域

**用法示例**:

```python
rect = node.get_rect()
print("矩形区域:", rect)
```

#### 获取位置: `get_location() -> ElementLocation`

**返回**:

- `ElementLocation`: 元素的位置坐标

**用法示例**:

```python
location = node.get_location()
print("位置:", location)
```

#### 获取尺寸: `get_size() -> ElementSize`

**返回**:

- `ElementSize`: 元素的尺寸

**用法示例**:

```python
size = node.get_size()
print("尺寸:", size)
```

#### 获取文本: `get_text() -> str`

**返回**:

- `str`: 元素的文本内容

**用法示例**:

```python
text = node.get_text()
print("文本内容:", text)
```

#### 获取类型: `get_type() -> str`

**返回**:

- `str`: 元素的类型

**用法示例**:

```python
element_type = node.get_type()
print("元素类型:", element_type)
```

#### 是否启用: `is_enabled() -> bool`

**返回**:

- `bool`: 是否启用

**用法示例**:

```python
enabled = node.is_enabled()
print("是否启用:", enabled)
```

#### 是否显示: `is_displayed() -> bool`

**返回**:

- `bool`: 是否显示

**用法示例**:

```python
displayed = node.is_displayed()
print("是否显示:", displayed)
```

#### 是否选中: `is_selected() -> bool`

**返回**:

- `bool`: 是否被选中

**用法示例**:

```python
selected = node.is_selected()
print("是否选中:", selected)
```

#### 是否可访问: `is_accessible() -> bool`

**返回**:

- `bool`: 是否可访问

**用法示例**:

```python
accessible = node.is_accessible()
print("是否可访问:", accessible)
```

#### 是否辅助功能容器: `is_accessibility_container() -> bool`

**返回**:

- `bool`: 是否为辅助功能容器

**用法示例**:

```python
container = node.is_accessibility_container()
print("是否辅助功能容器:", container)
```

#### 获取属性: `get_attribute(attribute: str) -> str`

**参数**:

- `attribute`: 属性名

**返回**:

- `str`: 属性值

**用法示例**:

```python
value = node.get_attribute("Name")
print("属性值:", value)
```

#### 获取UID: `get_uid() -> str`

**返回**:

- `str`: 元素UID

**用法示例**:

```python
uid = node.get_uid()
print("UID:", uid)
```

---

### 截图与缓存

#### 元素截图: `take_screenshot() -> str`

**返回**:

- `str`: base64 编码的 PNG 截图

**用法示例**:

```python
screenshot = node.take_screenshot()
print("截图路径:", screenshot)
```

#### 清空缓存: `clear_cache() -> None`

**用法示例**:

```python
UiNode.clear_cache()
print("已清空缓存")
```