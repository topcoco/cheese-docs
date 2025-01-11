---
outline: deep
---

- cheese提供的方法百分99的方法都是有同步和异步两种,您可以自由选择喜欢的方式来进行编写


- 为了更快的理解异步和同步的区别我这边分别写了两段代码Async和Sync部分的代码,可以直观的看出区别,首先他们的写法不同,这一点一眼就能看出,好像异步的代码看起来更多了,异步的方法后面会加上Async来表示这个方法是一个异步方法,但是注意哈同步方法后面为了简洁是不加Sync的,直接写方法名就可以

- 您可以手动感受一下,复制下面的这两段代码分别运行,运行成功之后您会发现,他们的运行机制似乎不太一样,异步的执行流程是会直接在控制台打印开始和结束,然后打印节点的信息和节点的范围,而同步的会顺序执行 这个符合大部分人的习惯,他会先打印开始,然后打印节点的信息和节点的范围,然后在打印结束

- 经过上面的了解,您应该已经大体了解了,其实异步的底层封装是用了线程的机制来运行耗时任务,保证不会阻塞到主线程,执行完成之后会回调结果或者错误给到我们,而同步就是按照顺序执行
- 同步没什么好说的我们大部分的习惯是写同步,然后一些耗时的任务放到多线程运行,由于js是单线程语言所以有异步,当然异步也可以实现等待我们的耗时异步方法,具体怎么做可以看下面await部分代码,首先需要把你要使用await的部分放到一个异步方法中,在这个方法中对你需要等待的异步方法前面加上await就可以了 这样这个运行结果就是先打印开始,然后打印节点的信息和节点的范围,然后在打印结束



## Async(异步)
```typescript
//Async Test
import core from 'cheese-core';
const uinode = new core.uinode();
console.log("开始")
uinode.forEachNodeAsync((e: core.uinode['uiobj']) =>{
return e.text("Via").or
}).then(result=>{
console.log(result.obj)
console.log(result.getBounds())
}).catch(error =>{
    console.log(error)
})
console.log("结束")
```


## Sync(同步)
```typescript
//Sync Test
import core from 'cheese-core';
const uinode = new core.uinode();
console.log("开始")
let v = uinode.forEachNode((e: core.uinode['uiobj']) =>{
return e.text("Via").or
})
console.log(v.obj)
console.log(v.getBounds())
console.log("结束")
```

## await(等待)
```typescript
//await Test
import core from 'cheese-core';
const uinode = new core.uinode();
async function test() {
console.log("开始")
await uinode.forEachNodeAsync((e: core.uinode['uiobj']) =>{
return e.text("Via").or
}).then(result=>{
console.log(result.obj)
console.log(result.getBounds())
}).catch(error =>{
    console.log(error)
})
console.log("结束")
}
test()
```