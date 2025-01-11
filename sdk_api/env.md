---
    outline: deep
---

## 环境相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### sdk版本:`sdk_version: string` :white_check_mark:

**用法示例**:

```javascript


const env = core.env;
console.log("SDK版本", env.sdk_version)
```

### cheese-core版本:`core_version: string` :white_check_mark:

**用法示例**:

```javascript


const env = core.env;
console.log("cheese-core版本", env.core_version)
```

### cheese-context:`context: any` :white_check_mark:

**用法示例**:

```javascript


const env = core.env;
console.log("context版本", env.context)
```

### cheese-application:`application: string` :white_check_mark:

**用法示例**:

```javascript


const env = core.env;
console.log("context版本", env.application)
```

### cheese-activity:`activity: string` :white_check_mark:

**用法示例**:

```javascript

const env = core.env;
console.log("context版本", env.activity)
```

### cheese-accessibilityService:`accessibilityService: string` :white_check_mark:

**用法示例**:

```javascript

const env = core.env;
console.log("context版本", env.accessibilityService)
```

### cheese-javaObjects:`javaObjects: string` :white_check_mark:

**用法示例**:

```javascript

const env = core.env;
console.log("context版本", env.javaObjects)
```

### cheese-jsObjects:`jsObjects: string` :white_check_mark:

**用法示例**:

```javascript

const env = core.env;
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

env.jsObjects.put("1", person1)
```

### cheese-settings:`settings: string` :white_check_mark:

**用法示例**:

```javascript

const env = core.env;
console.log("当前的引擎名", env.settings.name)
```