---
outline: deep
---

## 持久化相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 持久化数据:`save(name: string, key: string, value: any): void` :white_check_mark:

**参数**:

- ⭐`string` (name): 持久化文件
- ⭐`string` (key): 键
- ⭐`any` (value): 值

**用法示例**:

```javascript

const persistence = core.persistence;
persistence.save("user", "id1", true)
```

### 删除持久化数据:` rm(name: string, key: string): void` :white_check_mark:

**参数**:

- ⭐`string` (name): 持久化文件
- ⭐`string` (key): 键

**用法示例**:

```javascript

const persistence = core.persistence;
persistence.rm("user", "id1")
```

### 获取持久化数据:`get(name: string, key: string,type :Class<any>): any` :white_check_mark:

**参数**:

- ⭐`string` (name): 持久化文件
- ⭐`string` (key): 键
- ⭐`Class<any>` (type): 数据类型

**返回值**:

- :green_circle:`any`:持久化的数据
- :red_circle:null

**用法示例**:

```javascript

const persistence = core.persistence;
persistence.get("user", "id1", cls.Boolean)
```

