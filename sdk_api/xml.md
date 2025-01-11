---
outline: deep
---
## XmlUi相关

```javascript
//Node版引擎导入方式
import core from 'cheese-node';
//JS版引擎导入方式
const core = require('cheese-js');
```

### 解析Xml: `parseXml(xml:string): View` :white_check_mark:

**参数**:
- ⭐`string` (xml):xml路径 ore xml字符串

  **返回值**:
- :green_circle:`View`:View对象
- :red_circle:null

**用法示例**:

```javascript

const xml = core.ui.xml;
/**方式1*/
console.log(xml.parseXml("/storage/emulated/0/Pictures/ui.xml"))

/**方式2*/
console.log(xml.parseXml(`
<LinearLayout height="match_parent" width="match_parent" orientation="vertical" gravity="center">
    <Button height="wrap_content" text="第一个按钮" width="wrap_content" />
    <Button height="wrap_content" id="t2" text="第二个按钮" width="wrap_content" />
    <EditText height="wrap_content" width="200dp" hint="我是提示输入内容" />
    <TextView height="wrap_content" text="我是文本" width="wrap_content" background="red" />
</LinearLayout>
`))
```



### 监听按钮点击: `setOnClickListener(callback:Callback): void` :white_check_mark:

**参数**:

- ⭐`Callback` (callback):回调

**用法示例**:

```javascript

const xml = core.ui.xml;
const base = core.base;
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.startActivity("P0", (e) => {
    console.log("onCreate", e)
    e.activity.setContentView(e.view)
    let button = e.activity.findViewById(xml.getID("t2"));
    button.setOnClickListener(() => {
        console.log("帅比")
    });

})
```


### 监听下拉框: `setOnItemSelectedListener(callback:Callback): void` :white_check_mark:

**参数**:

- ⭐`Callback` (callback):回调

**用法示例**:

```javascript

const xml = core.ui.xml;
const base = core.base;
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.startActivity("P0", (e) => {
  console.log("onCreate", e)
  e.activity.setContentView(e.view)
  let spinner = e.activity.findViewById(xml.getID("t2"));
  spinner.setOnItemSelectedListener({
    onItemSelected: (parent, view, position, id) => {
      let selectedItem = parent.getItemAtPosition(position).toString();
      console.log(selectedItem)
    },
    onNothingSelected: (parent) => {
      console.log("帅比")

    }
  });

})
```


### 获取输入框内容: `getText(): Editable` :white_check_mark:

**返回值**:

- :green_circle:`Editable`: Editable对象
- :red_circle: null

**用法示例**:

```javascript

const xml = core.ui.xml;
const base = core.base;
xml.parseXml("/storage/emulated/0/Pictures/ui.xml")
base.startActivity("P0", (e) => {
  console.log("onCreate", e)
  e.activity.setContentView(e.view)
  let editText = e.activity.findViewById(xml.getID("t2"));
  let text=editText.getText().toString();
  if (!text.isEmpty()) {
     console.log(text)
  }
})
```