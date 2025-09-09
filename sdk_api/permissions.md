---
outline: deep
---

## 权限相关

```javascript
const core = require('cheese-js');
```

### 无障碍权限标签:`ACCESSIBILITY:number` :white_check_mark:

### 悬浮窗权限标签:`FLOAT:number` :white_check_mark:

### 录屏权限标签:`RECORDSCREEN:number` :white_check_mark:

### ROOT权限标签:`ROOT:number` :white_check_mark:

### 请求权限:`requestPermission(tag: number,timeout:number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (tag): 权限标签
- ⭐`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const permissions = core.permissions;
if (permissions.requestPermission(permissions.ACCESSIBILITY, 3)) {
    console.log("请求成功")
}

```

### 检查权限:`checkPermission(tag: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (tag): 权限标签

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const permissions = core.permissions;
if (permissions.checkPermission(permissions.ACCESSIBILITY)) {
    console.log("请求成功")
}

```