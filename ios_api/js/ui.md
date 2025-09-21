---
outline: deep
---

## UI 界面相关

```javascript
const core = require('cheese-js');
const ui = core.ui;
```

### 显示 UI 内容: `show(content: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (content): 要显示的 UI 内容

**返回**:

- `boolean`: 是否成功显示 UI 内容

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const result = ui.show("<html><body><h1>Hello World</h1></body></html>");
console.log(`显示结果: ${result}`);
```

### 注册回调: `register(callbackFn: (eventId: string) => string): void`  :white_check_mark:

**参数**:

- ⭐`function` (callbackFn): 回调函数，接收事件字符串，返回字符串

**返回**:

- `void`: 无返回值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
ui.register((eventId) => {
    console.log(`收到事件: ${eventId}`);
    return "处理完成";
});
```

### 设置 UI 元素值: `set(id: string, value: string): boolean`  :white_check_mark:

**参数**:

- ⭐`string` (id): UI 元素的 ID
- ⭐`string` (value): 要设置的值

**返回**:

- `boolean`: 是否成功设置元素值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const result = ui.set("input1", "Hello World");
console.log(`设置结果: ${result}`);
```

### 获取 UI 元素值: `get(content: string): string`  :white_check_mark:

**参数**:

- ⭐`string` (content): 要获取的内容标识

**返回**:

- `string`: 获取到的元素值

**用法示例**:

```javascript
const core = require('cheese-js');
const ui = core.ui;
const value = ui.get("input1");
console.log(`获取到的值: ${value}`);
```

### 基本脚本界面-Demo:
```json

{
   "type": "ScrollableColumn",
   "style": {
     "padding": { "all": 20 },
     "backgroundColor": "#fafbfc"
   },
   "children": [
     {
       "type": "Column",
       "alignment": "CenterHorizontally",
       "style": {
        "width": "fillMaxWidth",
         "padding": { "all": 24 },
         "borderRadius": 24,
         
         "margin": { "bottom": 24 }
       },
       "children": [
         {
           "type": "Text",
           "text": "🤖 脚本控制UI示例",
           "textStyle": "headlineMedium",
           "fontWeight": "Bold",
           "textAlign": "center",
           "style": {
             "textColor": "#1e293b"
           }
         },
         {
           "type": "Text",
           "text": "智能化配置，一键运行",
           "textStyle": "bodyLarge",
           "textAlign": "center",
           "style": {
             "textColor": "#64748b",
             "padding": { "top": 8 }
           }
         }
       ]
     },

     {
       "type": "ExpandableCard",
       "id": "scriptSettings",
       "title": "脚本配置",
       "subtitle": "基础运行参数设置",
       "isExpanded": true,
       "icon": "settings",
       "style": {
         "margin": { "bottom": 20 }
       },
       "children": [
         {
           "type": "Switch",
           "id": "WDAMode",
           "label": "WDA模式",
           "checked": true,
           "style": {
             "margin": { "bottom": 20 }
           }
         },

         {
           "type": "Text",
           "text": "⚙️ 操作设备配置",
           "textStyle": "titleMedium",
           "fontWeight": "SemiBold",
           "style": {
             "textColor": "#1e293b",
             "padding": { "bottom": 16, "top": 8 }
           }
         },

         {
           "type": "Row",
           "arrangement": "SpaceEvenly",
           "alignment": "CenterVertically",
           "style": {
             "padding": { "bottom": 24 }
           },
           "children": [
             {
               "type": "Checkbox",
               "id": "upDownScroll",
               "label": "上下滑动",
               "checked": true,
               "style": {
                 "weight": 1,
                 "margin": { "end": 4 }
               }
             },
             {
               "type": "Checkbox",
               "id": "leftRightScroll",
               "label": "左右滑动",
               "checked": false,
               "style": {
                 "weight": 1,
                 "margin": { "horizontal": 4 }
               }
             },
             {
               "type": "Checkbox",
               "id": "clickAction",
               "label": "点击操作",
               "checked": true,
               "style": {
                 "weight": 1,
                 "margin": { "start": 4 }
               }
             }
           ]
         },

         {
           "type": "Text",
           "text": "🔧 运行参数设置",
           "textStyle": "titleMedium",
           "fontWeight": "SemiBold",
           "style": {
             "textColor": "#1e293b",
             "padding": { "bottom": 16 }
           }
         },

         {
           "type": "Row",
           "arrangement": "SpaceBetween",
           "alignment": "Bottom",
           "style": {
             "padding": { "bottom": 8 }
           },
           "children": [
             {
               "type": "TextField",
               "id": "loopCount",
               "label": "循环次数",
               "value": "10",
               "placeholder": "输入次数",
               "keyboardType": "number",
               "leadingIcon": "refresh",
               "style": {
                 "weight": 1,
                 "margin": { "end": 12 }
               }
             },
             {
               "type": "DropdownMenu",
               "id": "hidDevice",
               "label": "HID设备",
               "placeholder": "选择设备",
               "selectedIndex": 0,
               "options": [
                 { "text": "ESP32-C3", "value": "esp32c3", "icon": "settings" },
                 { "text": "ESP32-S3", "value": "esp32s3", "icon": "settings" },
                 { "text": "无设备", "value": "none", "icon": "close" }
               ],
               "style": {
                 "weight": 1,
                 "margin": { "start": 12 }
               }
             }
           ]
         }
       ]
     },

     {
       "type": "ExpandableCard",
       "id": "douyinSettings", 
       "title": "抖音设置",
       "subtitle": "抖音平台专属配置",
       "isExpanded": false,
       "icon": "play",
       "style": {
         "margin": { "bottom": 24 }
       },
       "children": [
         {
           "type": "Text",
           "text": "👥 性别偏好选择",
           "textStyle": "titleMedium",
           "fontWeight": "SemiBold",
           "style": {
             "textColor": "#1e293b",
             "padding": { "bottom": 16 }
           }
         },

         {
           "type": "RadioGroup",
           "id": "gender",
           "orientation": "Horizontal",
           "selectedIndex": 0,
           "options": [
             { "text": "男性", "value": "male", "icon": "person" },
             { "text": "女性", "value": "female", "icon": "person" }
           ],
           "style": {
             "margin": { "bottom": 20 }
           }
         },
         {
                  "type": "Slider",
                  "id": "fontSize",
                  "label": "字体大小",
                  "value": 16,
                  "valueRange": { "start": 12, "end": 24 },
                  "showValue": true,
                  "style": {
                    "padding": { "bottom": 16 }
                  }
        },

         {
           "type": "Text",
           "text": "📊 运行参数配置",
           "textStyle": "titleMedium",
           "fontWeight": "SemiBold",
           "style": {
             "textColor": "#1e293b",
             "padding": { "bottom": 16 }
           }
         },

         {
           "type": "Row",
           "arrangement": "SpaceBetween",
           "alignment": "CenterVertically",
           "children": [
             {
               "type": "TextField",
               "id": "runCount",
               "label": "运行次数",
               "value": "100",
               "placeholder": "输入运行次数",
               "keyboardType": "number",
               "leadingIcon": "play",
               "style": {
                 "weight": 1,
                 "margin": { "end": 12 }
               }
             },
             {
               "type": "TextField",
               "id": "swipeNum",
               "label": "滑动次数",
               "value": "50", 
               "placeholder": "输入滑动次数",
               "keyboardType": "number",
               "leadingIcon": "favorite",
               "style": {
                 "weight": 1,
                 "margin": { "start": 12 }
               }
             }
           ]
         }
       ]
     },

{
  "type": "Column",
  "alignment": "CenterHorizontally",
  "arrangement": "SpaceEvenly", 
  "style": {
    "padding": { "all": 24 },
    "backgroundColor": "#ffffff",
    "borderRadius": 24,
    "margin": { "bottom": 20 }
  },
  "children": [
    {
      "type": "Text",
      "text": "🚀 操作面板",
      "textStyle": "titleLarge",
      "fontWeight": "Bold",
      "textAlign": "center",
      "style": {
        "textColor": "#1e293b",
        "padding": { "vertical": 16 } 
      }
    },

    {
      "type": "Column",  
      "arrangement": "spaceBetween",
      "style": {
        "width": "fillMaxWidth"
      },
      "children": [
        {
          "type": "Row",
          "arrangement": "Center",
          "alignment": "CenterVertically",
          "style": {
            "padding": { "horizontal": 16, "vertical": 8 } 
          },
          "children": [
            {
              "type": "Button",
              "text": "运行脚本",
              "icon": "play",
              "variant": "Filled",
              "size": "Large",
              "onClick": "runScript",
              "style": {
                "weight": 1,
                "height": "52dp",
                "borderRadius": 18,
                "margin": { "end": 8 }
              }
            },
            {
              "type": "Button",
              "text": "保存设置",
              "icon": "save",
              "variant": "Outlined",
              "size": "Large",
              "onClick": "saveSettings",
              "style": {
                "weight": 1,
                "height": "52dp",
                "borderRadius": 18,
                "margin": { "start": 8 }
              }
            }
          ]
        },

        {
          "type": "Row",
          "arrangement": "Center",
          "alignment": "CenterVertically",
          "style": {
            "padding": { "horizontal": 16, "vertical": 8 } 
          },
          "children": [
            {
              "type": "Button",
              "text": "重置配置",
              "icon": "refresh",
              "variant": "Outlined",
              "size": "Large",
              "onClick": "resetSettings",
              "style": {
                "weight": 1,
                "height": "52dp",
                "borderRadius": 18,
                "margin": { "end": 8 }
              }
            },
            {
              "type": "Button",
              "text": "导出配置",
              "icon": "download",
              "variant": "Outlined",
              "size": "Large",
              "onClick": "exportSettings",
              "style": {
                "weight": 1,
                "height": "52dp",
                "borderRadius": 18,
                "margin": { "start": 8 }
              }
            }
          ]
        }
      ]
    }
  ]
}
]
}

```