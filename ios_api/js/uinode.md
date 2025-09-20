---
outline: deep
---

## UI节点操作相关

```javascript
const core = require('cheese-js');
const UiNode = core.uinode;
const node = new UiNode();
```

### 构造函数: `constructor(uiNode?: any)` :white_check_mark:

**参数**:

- `any` (uiNode): 可选，内部UI节点对象

**用法示例**:

```javascript
const core = require('cheese-js');
const UiNode = core.uinode;
const node = new UiNode();
```

### 获取节点唯一标识: `uid(): string` :white_check_mark:

**返回**:

- `string`: 节点UID

**用法示例**:

```javascript
const uid = node.uid();
console.log(`节点UID: ${uid}`);
```

### 查找UI节点: `find(selector: string): uinode` :white_check_mark:

**参数**:

- ⭐`string` (selector): 选择器

**返回**:

- `uinode`: 找到的UI节点实例

**用法示例**:

```javascript
const selector_json  = JSON.stringify({
    "Name": "商城", "Type": "Button"
})

const foundNode = node.find(selector_json );
console.log('节点查找完成');
```

### 获取页面源码: `source(): string` :white_check_mark:

**返回**:

- `string`: 页面源码

**用法示例**:

```javascript
const source = node.source();
console.log(`页面源码: ${source}`);
```

### 点击元素: `click(): boolean` :white_check_mark:

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.click();
console.log(`点击结果: ${result}`);
```

### 双击元素: `double_tap(): boolean` :white_check_mark:

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.double_tap();
console.log(`双击结果: ${result}`);
```

### 长按元素: `touch_and_hold(duration: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (duration): 持续时间(秒)

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.touch_and_hold(2);
console.log(`长按结果: ${result}`);
```

### 双指点击: `two_finger_tap(): boolean` :white_check_mark:

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.two_finger_tap();
console.log(`双指点击结果: ${result}`);
```

### 多次点击: `tap_with_number_of_taps(numberOfTaps: number, numberOfTouches: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (numberOfTaps): 点击次数
- ⭐`number` (numberOfTouches): 手指数量

**返回**:

- `boolean`: 操作是否成功

**用法示例**:
[UiNode.java](../../../../Documents/xwechat_files/wxid_mhg6hgcwpwnh22_0c12/msg/file/2025-09/UiNode.java)
```javascript
const result = node.tap_with_number_of_taps(3, 1);
console.log(`多次点击结果: ${result}`);
```

### 压力触摸: `force_touch(pressure: number, duration: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (pressure): 压力值
- ⭐`number` (duration): 持续时间(秒)

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.force_touch(0.8, 1);
console.log(`压力触摸结果: ${result}`);
```

### 在指定位置压力触摸: `force_touch_float(x: number, y: number, pressure: number, duration: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (x): X坐标
- ⭐`number` (y): Y坐标
- ⭐`number` (pressure): 压力值
- ⭐`number` (duration): 持续时间(秒)

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.force_touch_float(100, 200, 0.8, 1);
console.log(`指定位置压力触摸结果: ${result}`);
```

### 向元素发送文本: `send_keys_to_element(text: string, frequency: number): boolean` :white_check_mark:

**参数**:

- ⭐`string` (text): 要发送的文本
- ⭐`number` (frequency): 输入频率

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.send_keys_to_element('Hello World', 50);
console.log(`文本输入结果: ${result}`);
```

### 清除元素内容: `clear_element(): boolean` :white_check_mark:

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.clear_element();
console.log(`清除内容结果: ${result}`);
```

### 拖动元素: `drag_element(fromX: number, fromY: number, toX: number, toY: number, duration: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 起始X坐标
- ⭐`number` (fromY): 起始Y坐标
- ⭐`number` (toX): 目标X坐标
- ⭐`number` (toY): 目标Y坐标
- ⭐`number` (duration): 持续时间(秒)

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.drag_element(0, 0, 100, 100, 1);
console.log(`拖动元素结果: ${result}`);
```

### 拖动元素(浮点坐标): `drag_float(fromX: number, fromY: number, toX: number, toY: number, duration: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 起始X坐标
- ⭐`number` (fromY): 起始Y坐标
- ⭐`number` (toX): 目标X坐标
- ⭐`number` (toY): 目标Y坐标
- ⭐`number` (duration): 持续时间(秒)

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.drag_float(0.1, 0.1, 0.9, 0.9, 1.5);
console.log(`浮点拖动结果: ${result}`);
```

### 滑动元素: `swipe_element(fromX: number, fromY: number, toX: number, toY: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 起始X坐标
- ⭐`number` (fromY): 起始Y坐标
- ⭐`number` (toX): 目标X坐标
- ⭐`number` (toY): 目标Y坐标

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.swipe_element(100, 200, 300, 200);
console.log(`滑动元素结果: ${result}`);
```

### 滑动元素(浮点坐标): `swipe_float(fromX: number, fromY: number, toX: number, toY: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (fromX): 起始X坐标
- ⭐`number` (fromY): 起始Y坐标
- ⭐`number` (toX): 目标X坐标
- ⭐`number` (toY): 目标Y坐标

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.swipe_float(0.2, 0.5, 0.8, 0.5);
console.log(`浮点滑动结果: ${result}`);
```

### 按方向滑动: `swipe_direction(direction: number, velocity: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (direction): 方向
- ⭐`number` (velocity): 速度

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.swipe_direction(1, 500);
console.log(`方向滑动结果: ${result}`);
```

### 捏合手势: `pinch(scale: number, velocity: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (scale): 缩放比例
- ⭐`number` (velocity): 速度

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.pinch(0.5, 100);
console.log(`捏合手势结果: ${result}`);
```

### 缩小手势: `pinch_to_zoom_out(scale: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (scale): 缩放比例

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.pinch_to_zoom_out(0.8);
console.log(`缩小手势结果: ${result}`);
```

### 旋转手势: `rotate(rotation: number, velocity: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (rotation): 旋转角度
- ⭐`number` (velocity): 速度

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.rotate(90, 50);
console.log(`旋转手势结果: ${result}`);
```

### 选择滚轮选项: `picker_wheel_select(order: number, offset: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (order): 顺序
- ⭐`number` (offset): 偏移量

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.picker_wheel_select(1, 2);
console.log(`滚轮选择结果: ${result}`);
```

### 通过名称滚动到元素: `scroll_to_element_by_name(name: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (name): 元素名称

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.scroll_to_element_by_name('Submit Button');
console.log(`滚动到元素结果: ${result}`);
```

### 通过谓词滚动到元素: `scroll_to_element_by_predicate(predicate: string): boolean` :white_check_mark:

**参数**:

- ⭐`string` (predicate): 谓词表达式

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.scroll_to_element_by_predicate('name == "Submit"');
console.log(`谓词滚动结果: ${result}`);
```

### 滚动到可见: `scroll_to_visible(): boolean` :white_check_mark:

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.scroll_to_visible();
console.log(`滚动到可见结果: ${result}`);
```

### 按方向滚动: `scroll_direction(direction: number, distance: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (direction): 方向
- ⭐`number` (distance): 距离

**返回**:

- `boolean`: 操作是否成功

**用法示例**:

```javascript
const result = node.scroll_direction(1, 100);
console.log(`方向滚动结果: ${result}`);
```

### 查找子元素: `find_child_element(selectorJSON: string): string` :white_check_mark:

**参数**:

- ⭐`string` (selectorJSON): 选择器JSON

**返回**:

- `string`: 子元素信息

**用法示例**:

```javascript
const childInfo = node.find_child_element('{"type": "button"}');
console.log(`子元素信息: ${childInfo}`);
```

### 查找多个子元素: `find_child_elements(selectorJSON: string): string` :white_check_mark:

**参数**:

- ⭐`string` (selectorJSON): 选择器JSON

**返回**:

- `string`: 子元素信息列表

**用法示例**:

```javascript
const childrenInfo = node.find_child_elements('{"type": "button"}');
console.log(`子元素列表: ${childrenInfo}`);
```

### 查找可见单元格: `find_visible_cells(): string` :white_check_mark:

**返回**:

- `string`: 可见单元格信息

**用法示例**:

```javascript
const cells = node.find_visible_cells();
console.log(`可见单元格: ${cells}`);
```

### 获取元素矩形信息: `get_element_rect(): string` :white_check_mark:

**返回**:

- `string`: 元素矩形信息

**用法示例**:

```javascript
const rect = node.get_element_rect();
console.log(`元素矩形: ${rect}`);
```

### 获取元素位置: `get_element_location(): string` :white_check_mark:

**返回**:

- `string`: 元素位置信息

**用法示例**:

```javascript
const location = node.get_element_location();
console.log(`元素位置: ${location}`);
```

### 获取元素大小: `get_element_size(): string` :white_check_mark:

**返回**:

- `string`: 元素大小信息

**用法示例**:

```javascript
const size = node.get_element_size();
console.log(`元素大小: ${size}`);
```

### 获取元素文本: `get_element_text(): string` :white_check_mark:

**返回**:

- `string`: 元素文本

**用法示例**:

```javascript
const text = node.get_element_text();
console.log(`元素文本: ${text}`);
```

### 获取元素类型名称: `getElementTypeName(): string` :white_check_mark:

**返回**:

- `string`: 元素类型名称

**用法示例**:

```javascript
const typeName = node.getElementTypeName();
console.log(`元素类型: ${typeName}`);
```

### 检查元素是否启用: `is_enabled(): boolean | null` :white_check_mark:

**返回**:

- `boolean | null`: 是否启用(可能返回null)

**用法示例**:

```javascript
const enabled = node.is_enabled();
console.log(`元素是否启用: ${enabled}`);
```

### 检查元素是否显示: `is_displayed(): boolean | null` :white_check_mark:

**返回**:

- `boolean | null`: 是否显示(可能返回null)

**用法示例**:

```javascript
const displayed = node.is_displayed();
console.log(`元素是否显示: ${displayed}`);
```

### 检查元素是否被选中: `is_selected(): boolean | null` :white_check_mark:

**返回**:

- `boolean | null`: 是否被选中(可能返回null)

**用法示例**:

```javascript
const selected = node.is_selected();
console.log(`元素是否被选中: ${selected}`);
```

### 检查元素是否可访问: `is_accessible(): boolean | null` :white_check_mark:

**返回**:

- `boolean | null`: 是否可访问(可能返回null)

**用法示例**:

```javascript
const accessible = node.is_accessible();
console.log(`元素是否可访问: ${accessible}`);
```

### 检查元素是否是辅助功能容器: `is_accessibility_container(): boolean | null` :white_check_mark:

**返回**:

- `boolean | null`: 是否是辅助功能容器(可能返回null)

**用法示例**:

```javascript
const isContainer = node.is_accessibility_container();
console.log(`是否为辅助功能容器: ${isContainer}`);
```

### 获取元素属性: `get_element_attribute(attributeName: string): string` :white_check_mark:

**参数**:

- ⭐`string` (attributeName): 属性名称

**返回**:

- `string`: 属性值

**用法示例**:

```javascript
const value = node.get_element_attribute('value');
console.log(`属性值: ${value}`);
```

### 获取元素UID: `get_element_uid(): string` :white_check_mark:

**返回**:

- `string`: 元素UID

**用法示例**:

```javascript
const uid = node.get_element_uid();
console.log(`元素UID: ${uid}`);
```

### 获取元素截图: `take_element_screenshot(): string` :white_check_mark:

**返回**:

- `string`: 截图base64数据

**用法示例**:

```javascript
const screenshot = node.take_element_screenshot();
console.log(`截图数据长度: ${screenshot.length}`);
```

### 清除元素缓存: `clear_element_cache(): void` :white_check_mark:

**返回**:

- `void`: 无返回值

**用法示例**:

```javascript
node.clear_element_cache();
console.log('元素缓存已清除');
```