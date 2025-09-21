---
outline: deep
---

## UI 操作相关

```python
from cheese import UI
```

### 显示 UI 界面: `show(ui_content: str)`  :white_check_mark:

**参数**:

- ⭐`ui_content` (`str`): UI 内容字符串

**用法示例**:

```python
from cheese import UI

# 显示一个窗口
UI.show('<window title="My App">...</window>')
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败或显示失败

---

### 设置 UI 控件值: `set(control_id: str, value: str): bool`  :white_check_mark:

**参数**:

- ⭐`control_id` (`str`): 控件ID
- ⭐`value` (`str`): 要设置的值

**返回**:

- `bool`: 是否设置成功

**用法示例**:

```python
from cheese import UI

# 设置用户名输入框内容
success = UI.set("username_input", "JohnDoe")
print(f"设置结果: {success}")
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败

---

### 获取 UI 控件值: `get(control_id: str): Optional[str]`  :white_check_mark:

**参数**:

- ⭐`control_id` (`str`): 控件ID

**返回**:

- `Optional[str]`: 控件当前值，如果控件不存在返回 None

**用法示例**:

```python
from cheese import UI

# 获取用户名输入框当前内容
value = UI.get("username_input")
print(f"Current value: {value}")
```

**异常**:

- `RuntimeError`: 如果全局状态检查失败

---

### 注册 UI 回调: `register(ui_callback: any)`  :white_check_mark:

**参数**:

- ⭐`ui_callback` (`Callable`): UI 事件回调函数

**用法示例**:

```python
from cheese import UI

def on_ui_event(event):
    print(f"收到UI事件: {event}")

UI.register(on_ui_event)
```

---

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
           "id": "chickenMode",
           "label": "养鸡模式",
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
               "id": "followCount",
               "label": "关注次数",
               "value": "50", 
               "placeholder": "输入关注次数",
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