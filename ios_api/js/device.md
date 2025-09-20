---
outline: deep
---

## 设备相关

```javascript
const core = require('cheese-js');
const device = core.device;
```

### 获取屏幕高度: `get_screen_height(): number`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `number`: 设备屏幕的高度（像素）

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const height = device.get_screen_height();
console.log(`屏幕高度: ${height}`);
```

### 获取屏幕缩放比例: `get_screen_scale(): number`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `number`: 屏幕的缩放比例

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const scale = device.get_screen_scale();
console.log(`屏幕缩放比例: ${scale}`);
```

### 获取屏幕宽度: `get_screen_width(): number`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `number`: 设备屏幕的宽度（像素）

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const width = device.get_screen_width();
console.log(`屏幕宽度: ${width}`);
```

### 获取设备信息: `device_info(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 设备信息的字符串表示

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const info = device.device_info();
console.log(`设备信息: ${info}`);
```

### 获取电池信息: `battery_info(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 电池信息的字符串表示

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const batteryInfo = device.battery_info();
console.log(`电池信息: ${batteryInfo}`);
```

### 获取窗口大小: `window_size(): Size`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `Size`: 一个包含宽度和高度的对象
    - `width()`: 窗口宽度
    - `height()`: 窗口高度

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const size = device.window_size();
console.log(`窗口宽度: ${size.width()}, 窗口高度: ${size.height()}`);
```

### 截屏: `screenshot(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 截图的文件路径

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const screenshotPath = device.screenshot();
console.log(`截图保存路径: ${screenshotPath}`);
```

### 判断设备是否锁定: `is_locked(): boolean`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `boolean`: 设备是否处于锁定状态

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const locked = device.is_locked();
console.log(`设备是否锁定: ${locked}`);
```

### 获取剪贴板内容: `get_pasteboard(): string`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `string`: 剪贴板的文本内容

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const clipboard = device.get_pasteboard();
console.log(`剪贴板内容: ${clipboard}`);
```

### 解锁设备: `unlock(): boolean`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `boolean`: 是否成功解锁设备

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const result = device.unlock();
console.log(`解锁结果: ${result}`);
```

### 锁定设备: `lock(): boolean`  :white_check_mark:

**参数**:

- 无参数

**返回**:

- `boolean`: 是否成功锁定设备

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const result = device.lock();
console.log(`锁定结果: ${result}`);
```

### 设置剪贴板内容: `set_pasteboard(content: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (content): 要设置到剪贴板的文本内容

**返回**:

- `boolean`: 是否成功设置剪贴板内容

**用法示例**:

```javascript
const core = require('cheese-js');
const device = core.device;
const result = device.set_pasteboard("Hello World");
console.log(`设置剪贴板结果: ${result}`);
```