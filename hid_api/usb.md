---
outline: deep
---


## lINUX-USB相关

## 设备相关 

### 查找设备:`[connect]http://localhost:1314/device/connect?uid=1&id=USB\VID_18D1\PID_4EE7\HT79D1A02216` :white_check_mark:

**参数**:
- :star: (uid):自定义设备uid
- :star: (id):设备id

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 初始化设备:`[init]http://localhost:1314/device/init?uid=1&w=720&h=1920` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (w):宽
- :star: (h):高
  **返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

## 鼠标事件

### 坐标点击:`[click]http://localhost:1314/mouse/click?uid=1&x=133&y=308` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 按下:`[press]http://localhost:1314/mouse/press?uid=1&x=133&y=308` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 释放:`[release]http://localhost:1314/mouse/release?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 坐标滑动:`[swipe]http://localhost:1314/mouse/swipe?uid=1&x=133&y=308&ex=133&ey=122` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):开始坐标x
- :star: (y):开始坐标y
- :star: (ex):目标坐标x
- :star: (ey):目标坐标y

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


## 键盘事件

### 写:`[write]http://localhost:1314/keyboard/write?uid=1&modifiers=0&keycode=[4] ` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (modifier):修饰符
- :star: (keycode):键名(一次最多6个建)

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 主页键:`[home]http://localhost:1314/keyboard/home?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (modifier):修饰符
- :star: (keycode):键名(一次最多6个建)

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 返回键:`[back]http://localhost:1314/keyboard/back?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid


**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 后台键:`[recent]http://localhost:1314/keyboard/recent?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid


**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 复制键:`[copy]http://localhost:1314/keyboard/copy?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid


**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null





### 粘贴键:`[paste]http://localhost:1314/keyboard/paste?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid


**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 截屏键:`[screenShot]http://localhost:1314/keyboard/screenShot?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid


**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 按下:`[press]http://localhost:1314/keyboard/press?uid=1&modifier=0&keycode=[4] ` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (modifier):修饰符
- :star: (keycode):键名(一次最多6个建)

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 释放:`[release]http://localhost:1314/keyboard/release?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null




## WINDOWS-USB相关

## 设备相关

### 查找设备:`[find]http://localhost:1314/device/find?uid=1&id=USB\VID_18D1\PID_4EE7\HT79D1A02216` :white_check_mark:

**参数**:
- :star: (uid):自定义设备uid
- :star: (id):设备id

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


### 初始化设备:`[init]http://localhost:1314/device/init?uid=1&w=720&h=1920` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (w):宽
- :star: (h):高
**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

## 鼠标事件

### 坐标点击:`[click]http://localhost:1314/mouse/click?uid=1&x=133&y=308` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 按下:`[press]http://localhost:1314/mouse/press?uid=1&x=133&y=308` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 释放:`[release]http://localhost:1314/mouse/release?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 坐标滑动:`[swipe]http://localhost:1314/mouse/swipe?uid=1&x=133&y=308&ex=133&ey=122` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (x):开始坐标x
- :star: (y):开始坐标y
- :star: (ex):目标坐标x
- :star: (ey):目标坐标y

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null


## 键盘事件

### 写:`[write]http://localhost:1314/keyboard/write?uid=1&modifiers=0&keycode=[4] ` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (modifier):修饰符
- :star: (keycode):键名(一次最多6个建)

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 按下:`[press]http://localhost:1314/keyboard/press?uid=1&modifier=0&keycode=[4] ` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid
- :star: (modifier):修饰符
- :star: (keycode):键名(一次最多6个建)

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### 释放:`[release]http://localhost:1314/keyboard/release?uid=1` :white_check_mark:

**参数**:
- :star: (uid):对应设备uid

**返回值**:
- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

## Esp32UsbHid相关


## AutoJs插件方式
```javascript
"nodejs"
const $java = $autojs.java;
async function main(){
    await $java.loadDex('/sdcard/embedded.apk');
    const env = com.Usb.Env
    const device = com.Usb.Device
    const mouse = com.Usb.Mouse
    const Keyboard = com.Usb.Keyboard
    //设备相关方法
    env.INSTANCE.init(context) //初始化
    device.INSTANCE.connect() //连接当前设备的蓝牙
    device.INSTANCE.state() //板子状态
    //鼠标相关方法
    mouse.INSTANCE.click(100,200) //点击
    mouse.INSTANCE.down(100,200) //按下
    mouse.INSTANCE.move(100,200) //滑动
    mouse.INSTANCE.up() //抬起
    mouse.INSTANCE.swipe(100, 200, 300, 400) //滑动
    mouse.INSTANCE.swipe1(100, 200, 300, 400,10,1000) //滑动1
    mouse.INSTANCE.press() //长按
    mouse.INSTANCE.release() //释放
    //键盘相关方法
    Keyboard.INSTANCE.home() //主页键
    Keyboard.INSTANCE.back() //返回键
    Keyboard.INSTANCE.recent() //后台键
    Keyboard.INSTANCE.enter() //回车键
    Keyboard.INSTANCE.paste() //粘贴键
    Keyboard.INSTANCE.copy() //拷贝键
}
main()
```
## 懒人插件方式

```lua
import('java.io.File')
import('java.lang.*')
import('java.util.Arrays')
import('android.content.Context')
import('android.hardware.Sensor')
import('android.hardware.SensorEvent')
import('android.hardware.SensorEventListener')
import('android.hardware.SensorManager')
import('com.nx.assist.lua.LuaEngine')

local function main()
    local loader = LuaEngine.loadApk("embedded.apk")
    local env=loader.loadClass("com.Usb$Env")
    local device = loader.loadClass("com.Usb$Device")
    local mouse = loader.loadClass("com.Usb$Mouse")
    local Keyboard = loader.loadClass("com.Usb$Keyboard")
    -- 设备相关方法
    env.INSTANCE.init(context)  -- 初始化
    device.INSTANCE.connect()   -- 连接当前设备的蓝牙
    device.INSTANCE.state()     -- 板子状态
    -- 鼠标相关方法
    mouse.INSTANCE.click(100, 200)  -- 点击
    mouse.INSTANCE.down(100, 200)   -- 按下
    mouse.INSTANCE.move(100, 200)   -- 滑动
    mouse.INSTANCE.up()             -- 抬起
    mouse.INSTANCE.swipe(100, 200, 300, 400)  -- 滑动
    mouse.INSTANCE.swipe1(100, 200, 300, 400, 10, 1000)  -- 滑动1
    mouse.INSTANCE.press()          -- 长按
    mouse.INSTANCE.release()        -- 释放
    -- 键盘相关方法
    Keyboard.INSTANCE.home()        -- 主页键
    Keyboard.INSTANCE.back()        -- 返回键
    Keyboard.INSTANCE.recent()      -- 后台键
    Keyboard.INSTANCE.enter()       -- 回车键
    Keyboard.INSTANCE.paste()       -- 粘贴键
    Keyboard.INSTANCE.copy()        -- 拷贝键
end

main()


```


## AiWork插件方式
```javascript
function main(){
    rhino.loadDex('/sdcard/embedded.apk');
    const env = com.Usb.Env
    const device = com.Usb.Device
    const mouse = com.Usb.Mouse
    const Keyboard = com.Usb.Keyboard
    //设备相关方法
    env.INSTANCE.init(context) //初始化
    device.INSTANCE.connect() //连接当前设备的蓝牙
    device.INSTANCE.state() //板子状态
    //鼠标相关方法
    mouse.INSTANCE.click(100,200) //点击
    mouse.INSTANCE.down(100,200) //按下
    mouse.INSTANCE.move(100,200) //滑动
    mouse.INSTANCE.up() //抬起
    mouse.INSTANCE.swipe(100, 200, 300, 400) //滑动
    mouse.INSTANCE.swipe1(100, 200, 300, 400,10,1000) //滑动1
    mouse.INSTANCE.press() //长按
    mouse.INSTANCE.release() //释放
    //键盘相关方法
    Keyboard.INSTANCE.home() //主页键
    Keyboard.INSTANCE.back() //返回键
    Keyboard.INSTANCE.recent() //后台键
    Keyboard.INSTANCE.enter() //回车键
    Keyboard.INSTANCE.paste() //粘贴键
    Keyboard.INSTANCE.copy() //拷贝键
}
main()
```



## EasyClick插件方式
```javascript
function main(){
    loadDex("embedded.apk")
    const env = com.Usb.Env
    const device = com.Usb.Device
    const mouse = com.Usb.Mouse
    const Keyboard = com.Usb.Keyboard
    //设备相关方法
    env.INSTANCE.init(context) //初始化
    device.INSTANCE.connect() //连接当前设备的蓝牙
    device.INSTANCE.state() //板子状态
    //鼠标相关方法
    mouse.INSTANCE.click(100,200) //点击
    mouse.INSTANCE.down(100,200) //按下
    mouse.INSTANCE.move(100,200) //滑动
    mouse.INSTANCE.up() //抬起
    mouse.INSTANCE.swipe(100, 200, 300, 400) //滑动
    mouse.INSTANCE.swipe1(100, 200, 300, 400,10,1000) //滑动1
    mouse.INSTANCE.press() //长按
    mouse.INSTANCE.release() //释放
    //键盘相关方法
    Keyboard.INSTANCE.home() //主页键
    Keyboard.INSTANCE.back() //返回键
    Keyboard.INSTANCE.recent() //后台键
    Keyboard.INSTANCE.enter() //回车键
    Keyboard.INSTANCE.paste() //粘贴键
    Keyboard.INSTANCE.copy() //拷贝键
}
main()
```

## AScript插件方式
```python
from java.lang import Class
from ascript.android.system import R
from ascript.android import plug

# 加载 APK
clazz_loader = plug.load_apk("/sdcard/embedded.apk")
# 获取类
env = Class.forName("com.Usb$Env", True, clazz_loader)
device = Class.forName("com.Usb$Device", True, clazz_loader)
mouse = Class.forName("com.Usb$Mouse", True, clazz_loader)
Keyboard = Class.forName("com.Usb$Keyboard", True, clazz_loader)

env_field = env.getDeclaredField("INSTANCE")
env_field.setAccessible(True)

device_field = device.getDeclaredField("INSTANCE")
device_field.setAccessible(True)

mouse_field = mouse.getDeclaredField("INSTANCE")
mouse_field.setAccessible(True)

keyboard_field = Keyboard.getDeclaredField("INSTANCE")
keyboard_field.setAccessible(True)

//初始化
init_method = env.getMethod("init", Class.forName("android.content.Context"))
init_method.invoke(env_field.get(None), R.context)
//连接当前设备的蓝牙
connect_method = env.getMethod("connect")
connect_method.invoke(device_field.get(None))
//板子状态
state_method = env.getMethod("state")
state_method.invoke(device_field.get(None))
//点击
click_method = mouse.getMethod("click", Class.forName("java.lang.Double"), Class.forName("java.lang.Double"))
click_method.invoke(mouse_field.get(None), 100.0, 200.0)
//滑动1
swipe1_method =  mouse.getMethod(
    "swipe1",  # 方法名称
    Class.forName("java.lang.Double"),  
    Class.forName("java.lang.Double"),  
    Class.forName("java.lang.Double"),  
    Class.forName("java.lang.Double"),  
    Class.forName("java.lang.Double"), 
    Class.forName("java.lang.Long")    
)
swipe1_method.invoke(mouse_field.get(None), 100.0, 200.0, 300.0, 400.0, 10.0, 1000)
//按下
down_method = mouse.getMethod("down", 
                                  Class.forName("java.lang.Double"), 
                                  Class.forName("java.lang.Double"))
down_method.invoke(mouse_field.get(None), 100.0, 200.0)
//滑动
move_method = mouse.getMethod("move", 
                                  Class.forName("java.lang.Double"), 
                                  Class.forName("java.lang.Double"))
move_method.invoke(mouse_field.get(None), 150.0, 250.0)
//抬起
up_method = mouse.getMethod("up")
up_method.invoke(mouse_field.get(None))

 press_method = mouse.getMethod("press", 
                                   Class.forName("java.lang.Double"), 
                                   Class.forName("java.lang.Double"))
press_method.invoke(mouse_field.get(None), 200.0, 300.0)
//释放
release_method = mouse.getMethod("release")
release_method.invoke(mouse_field.get(None))
//复制键
copy_method = Keyboard.getMethod("copy")
copy_method.invoke(keyboard_field.get(None))
//粘贴键
paste_method = Keyboard.getMethod("paste")
paste_method.invoke(keyboard_field.get(None))
//主页键
home_method = Keyboard.getMethod("home")
home_method.invoke(keyboard_field.get(None))
//回车键
enter_method = Keyboard.getMethod("enter")
enter_method.invoke(keyboard_field.get(None))
//返回键
back_method = Keyboard.getMethod("back")
back_method.invoke(keyboard_field.get(None))
//后台键
recent_method = Keyboard.getMethod("recent")
recent_method.invoke(keyboard_field.get(None))
```


## Cheese插件方式和HTTP调用方式
## 设备相关
### *连接当前手机连接的蓝牙设备:

### http方式:`http://localhost:8080/usb/device/connect` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### cheese插件方式:`[connect]` :white_check_mark:

```javascript
import core from 'cheese-core';
const plugins = core.plugins;
const env = core.env;
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
}

```

### rhino引擎方式:`[connect]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
```

### *使用mac连接蓝牙:

### http方式:`[macConnect]http://localhost:8080/usb/device/macConnect?mac=37:asc:as:ed` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### cheese插件方式:`[macConnect]` :white_check_mark:

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.macConnect(device.INSTANCE.getMac("1312312")))
}

```

### rhino引擎方式:`[macConnect]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.macConnect(device.INSTANCE.getMac("1312312")))
```



### *固件状态

### http方式:`[state]http://localhost:8080/usb/device/state` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": true,
  "data": "0.0.1"
  }

- :red_circle::null

### cheese插件方式:`[state]` :white_check_mark:

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    usb_env.INSTANCE.init(env.context)
  if (device.INSTANCE.connect()) {
    console.log(device.INSTANCE.state())
  }
}

```

### rhino引擎方式:`[state]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
usb_env.INSTANCE.init(env.context)

if (device.INSTANCE.connect()) {
    console.log(device.INSTANCE.state())
}
```

### *重启设备

### *http方式:`[restart]http://localhost:8080/usb/device/restart` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": "true"
  }

- :red_circle::null

### cheese插件方式:`[restart]` :white_check_mark:

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        device.INSTANCE.restart()
    }

}

```

### rhino引擎方式:`[restart]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    device.INSTANCE.restart()
}

```

## 鼠标相关

### *点击:

### http方式:`[click]http://localhost:8080/usb/mouse/click?x=546&y=1004` :white_check_mark:

**参数**:

- :star: (x):x坐标
- :star: (y):y坐标

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式:`[click]` :white_check_mark:

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.click(200, 300)
    }
}

```

### rhino引擎方式:`[click]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
device.INSTANCE.connect()
if (device.INSTANCE.state()) {
    mouse.INSTANCE.click(200, 300)
}

```

### *触摸按下:

### http方式: `[down]http://localhost:8080/usb/mouse/down?x=546&y=1004` :white_check_mark:

**参数**:

- :star: (x): x 坐标
- :star: (y): y 坐标

**返回值**:

- :green_circle: 成功返回：
    ```json
    {
      "code": 200,
      "msg": "成功",
      "data": true
    }
    ```
- :red_circle: 失败返回：
    ```json
    null
    ```

### cheese插件方式: `[down]` :white_check_mark:

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.down(200, 300)
    }
}
```

### rhino引擎方式:`[down]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
device.INSTANCE.connect()
if (device.INSTANCE.state()) {
    mouse.INSTANCE.down(200, 300)
}

```

### 触摸滑动

### http方式`[move]http://localhost:8080/usb/mouse/move?x=546&y=1004` :white_check_mark:

**参数**:

- :star: (x): x坐标
- :star: (y): y坐标

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[move]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.move(200, 300)
    }
}

```

### rhino引擎方式:`[move]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.move(200, 300)
}

```

### 触摸抬起

### http方式 `[up]`

`http://localhost:8080/usb/mouse/up` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[up]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.up()
    }
}


```

### rhino引擎方式:`[up]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.up()
}

```

### 滑动

### http方式 `[swipe]`

`http://localhost:8080/usb/mouse/swipe?x=462&y=1461&ex=546&ey=1058` :white_check_mark:

**参数**:

- :star: (x): 开始x坐标
- :star: (y): 开始y坐标
- :star: (ex): 结束x坐标
- :star: (ey): 结束y坐标

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "版本号",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[swipe]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.swipe(100, 200, 300, 400)
    }
}

```

### rhino引擎方式:`[swipe]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.swipe(100, 200, 300, 400)
}

```



### 滑动1

### http方式 `[swipe1]`

`http://localhost:8080/usb/mouse/swipe1?x=462&y=1461&ex=546&ey=1058&s=10&d=1000` :white_check_mark:

**参数**:

- :star: (x): 开始x坐标
- :star: (y): 开始y坐标
- :star: (ex): 结束x坐标
- :star: (ey): 结束y坐标
- :star: (s): 滑动步数
- :star: (d): 滑动总耗时（毫秒）

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "版本号",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[swipe1]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.swipe1(100, 200, 300, 400)
    }
}

```

### rhino引擎方式:`[swipe]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.swipe1(100, 200, 300, 400)
}

```


### 坐标长按

### http方式 `[press]`

`http://localhost:8080/usb/mouse/press?x=546&y=1004` :white_check_mark:

**参数**:

- :star: (x): x坐标
- :star: (y): y坐标

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[press]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.press(100, 200)
    }
}

```

### rhino引擎方式:`[press]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.press(100, 200)
}


```

### 释放坐标长按

### http方式 `[release]`

`http://localhost:8080/usb/mouse/release` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[release]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let mouse = cls.findClass("coco.cheese.embedded.Usb$Mouse").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        mouse.INSTANCE.release()
    }
}

```

### rhino引擎方式:`[release]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let mouse = com.Usb.Mouse
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    mouse.INSTANCE.release()
}

```

## 键盘相关

### 返回键

### http方式 `[back]`

`http://localhost:8080/usb/keyboard/back` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[back]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.back()
    }
}
```

### rhino引擎方式:`[back]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.back()
}

```

### 主页键

### http方式 `[home]`

`http://localhost:8080/usb/keyboard/home` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[home]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.home()
    }
}
```

### rhino引擎方式:`[home]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.home()
}

```

### 后台键

### http方式 `[recent]`

`http://localhost:8080/usb/keyboard/recent` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[recent]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.recent()
    }
}
```

### rhino引擎方式:`[recent]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.recent()
}

```

### 回车键

### http方式 `[enter]`

`http://localhost:8080/usb/keyboard/enter` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[enter]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.enter()
    }
}
```

### rhino引擎方式:`[enter]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.enter()
}

```

### 粘贴键

### http方式 `[paste]`

`http://localhost:8080/usb/keyboard/paste` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[paste]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.paste()
    }
}
```

### rhino引擎方式:`[paste]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.paste()
}

```

### 拷贝键

### http方式 `[copy]`

`http://localhost:8080/usb/keyboard/copy` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[copy]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.copy()
    }
}
```

### rhino引擎方式:`[copy]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.copy()
}

```

### 输入打印文本

### http方式 `[print]`

`http://localhost:8080/usb/keyboard/print?text=hello` :white_check_mark:

**参数**:

- :star: (text): 文本信息

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[print]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.print("hello")
    }
}

```

### rhino引擎方式:`[print]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.print("hello")
}

```

### 释放所有按键

### http方式 `[release]`

`http://localhost:8080/usb/keyboard/release` :white_check_mark:

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[release]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.release()
    }
}


```

### rhino引擎方式:`[release]` :white_check_mark:

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.release()
}
```

### 长按指定按键

### http方式 `[press]`

`http://localhost:8080/usb/keyboard/press?key=a` :white_check_mark:

**参数**:

- :star: (key): 键名

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[press]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.press("a")
    }
}


```

### rhino引擎方式  `[press]`

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.press("a")
}
```

### 输入按键

### http方式 `[write]`

`http://localhost:8080/usb/keyboard/write?key=a` :white_check_mark:

**参数**:

- :star: (key): 键名

**返回值**:

- :green_circle::{
  "code": 200,
  "msg": "成功",
  "data": true
  }

- :red_circle::null

### cheese插件方式 `[write]`

```javascript
if (plugins.install("/storage/emulated/0/MT2/apks/cheese-embedded.apk")) {
    console.log("插件加载成功")
    let usb_env = cls.findClass("coco.cheese.embedded.Usb$Env").clz
    let device = cls.findClass("coco.cheese.embedded.Usb$Device").clz
    let Keyboard = cls.findClass("coco.cheese.embedded.Usb$Keyboard").clz
    usb_env.INSTANCE.init(env.context)
    console.log(device.INSTANCE.connect())
    if (device.INSTANCE.state()) {
        Keyboard.INSTANCE.write("a")
    }
}


```

### rhino引擎方式  `[write]`

```javascript
let usb_env = com.Usb.Env
let device = com.Usb.Device
let Keyboard = com.Usb.Keyboard
usb_env.INSTANCE.init(env.context)
console.log(device.INSTANCE.connect())
if (device.INSTANCE.state()) {
    Keyboard.INSTANCE.write("a")
}
```

