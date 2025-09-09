---
outline: deep
---

## 悬浮窗相关

```javascript
const core = require('cheese-js');
```

### 请求悬浮窗权限:`requestPermission(timeout: number): boolean` :white_check_mark:

**参数**:

- ⭐`number` (timeout): 超时时间/s

**返回值**:

- :green_circle:`boolean`: true
- :red_circle:`boolean`: false

**用法示例**:

```javascript

const floatingwindow = core.floatingwindow;
if (floatingwindow.requestPermission(3)) {
    console.log("请求成功")
}

```

### 检查悬浮窗权限:`checkPermission(): boolean` :white_check_mark:

**返回值**:

- :green_circle:`boolean`:true
- :red_circle:`boolean`:fasle

**用法示例**:

```javascript

const floaty = core.floaty;
if (floaty.checkPermission()) {
    console.log("悬浮窗权限正常")
}
```

### 悬浮窗根:`with(): EasyWindow<any>` :white_check_mark:

**扩展方法**:
- 宽:`setWidth(width:number)`
- 高:`setHeight(height:number)`
- 显示类型:`setWindowType()`
- 标记:`addWindowFlags()`
- 显示时长:`setDuration()`
- 可拖动:`setDraggable()`

**返回值**:

- :green_circle:`EasyWindow<any>`:悬浮窗根对象
- :red_circle:null

**用法示例**:

```javascript
const core = require('cheese-js'); //导入核心模块
//我们利用rhino的反射功能直接反射android的view相关api创建一个按钮+输入框的简单页面 并用悬浮窗展示出来
const env = core.env;
var LinearLayout = android.widget.LinearLayout;
var EditText = android.widget.EditText;
var Button = android.widget.Button;
var Toast = android.widget.Toast;
var Gravity = android.view.Gravity;
var Color = android.graphics.Color;
var ShapeDrawable = android.graphics.drawable.ShapeDrawable;
var RoundRectShape = android.graphics.drawable.shapes.RoundRectShape;

// 创建主布局
var mainLayout = new LinearLayout(env.activity);
mainLayout.setOrientation(LinearLayout.VERTICAL);
mainLayout.setGravity(Gravity.CENTER);
mainLayout.setPadding(32, 32, 32, 32);
mainLayout.setBackgroundColor(Color.parseColor("#F5F5F5"));

// 创建圆角背景
var outerRadii = [20, 20, 20, 20, 20, 20, 20, 20];
var roundRectShape = new RoundRectShape(outerRadii, null, null);
var shapeDrawable = new ShapeDrawable(roundRectShape);
if (android.os.Build.VERSION.SDK_INT >= 29) {
    shapeDrawable.getPaint().setColor(Color.pack(Color.WHITE));
} else {
    shapeDrawable.getPaint().setColor(Color.WHITE);
}





// 创建输入框
var editText = new EditText(env.activity);
editText.setHint("请输入内容");
editText.setBackground(shapeDrawable);
editText.setPadding(24, 24, 24, 24);
editText.setTextSize(16);
editText.setTextColor(Color.parseColor("#333333"));
editText.setHintTextColor(Color.parseColor("#999999"));

// 创建按钮
var button = new Button(env.activity);
button.setText("提交");
button.setTextSize(16);
button.setTextColor(Color.WHITE);
button.setPadding(32, 16, 32, 16);

// 创建按钮背景
var buttonOuterRadii = [40, 40, 40, 40, 40, 40, 40, 40];
var buttonRoundRectShape = new RoundRectShape(buttonOuterRadii, null, null);
var buttonShapeDrawable = new ShapeDrawable(buttonRoundRectShape);
if (android.os.Build.VERSION.SDK_INT >= 29) {
    buttonShapeDrawable.getPaint().setColor(android.graphics.Color.pack(android.graphics.Color.parseColor("#6200EE")));
} else {
    buttonShapeDrawable.getPaint().setColor(android.graphics.Color.parseColor("#6200EE"));
}

button.setBackground(buttonShapeDrawable);

// 设置按钮点击事件
button.setOnClickListener(function() {
    var text = editText.getText().toString();
    if (text.length() > 0) {
        Toast.makeText(env.activity, "您输入了: " + text, Toast.LENGTH_SHORT).show();
    } else {
        Toast.makeText(env.activity, "请输入内容", Toast.LENGTH_SHORT).show();
    }
});

// 设置布局参数
var layoutParams = new LinearLayout.LayoutParams(
    LinearLayout.LayoutParams.MATCH_PARENT,
    LinearLayout.LayoutParams.WRAP_CONTENT
);
layoutParams.setMargins(0, 0, 0, 24);

// 添加视图到主布局
mainLayout.addView(editText, layoutParams);
mainLayout.addView(button, layoutParams);

// 创建并显示悬浮窗
const floatingwindow = new core.floatingwindow;
floatingwindow.with()
    .setContentView(mainLayout)
    .addWindowFlags(
        floatingwindow.FLAG_NOT_TOUCH_MODAL
    )
    .setWindowType(floatingwindow.TYPE_APPLICATION_OVERLAY)
    .setWidth(500)
    .setHeight(600)
    .setSoftInputMode(floatingwindow.SOFT_INPUT_STATE_ALWAYS_VISIBLE)

floatingwindow.show();
```
