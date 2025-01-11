---
outline: deep
---

## 工作线程相关 - Node版引擎独有

```javascript
import core from 'cheese-node';
```

### 创建Worker线程: `create(path: string,filename?:string): WorkerUtils` :white_check_mark:

**参数**:

- ⭐`string` (path): 绝对路径或上级路径
`string` (filename): 文件名

**返回值**:

- :green_circle:`ClassUtils`: ClassUtils对象
- :red_circle:null

**用法示例**:

```javascript
//test.ts

const base = core.base;
const env = core.env;
// 获取对象并打印名称
console.log(env.jsObjects.get("1").name);

// 无限循环
while (true) {
    base.sleep(1000); // 暂停1秒
    console.log("worker多线程");
}

```
```javascript
// main.js

const base = core.base;
const worker = core.worker;
const env = core.env;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 创建worker进程并传递对象
let person1 = new Person("Alice", 30);
env.jsObjects.put("1", person1);
worker.create(os.JS_DIRECTORY.path + "/test.js");

```

