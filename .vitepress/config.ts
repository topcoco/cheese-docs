import {defineConfig} from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    // plugins:[pagefindPlugin()],
    base: '/',
    title: "Cheese",
    description: "自动化测试框架",
    head: [
        ['link', {rel: 'icon', href: '../images/icon.png'}],
        ['script', {
            type: 'text/javascript',
            src: 'https://ai.codeocean.net/js/iframe.js',
            id: 'chatbot-iframe',
            'data-bot-src': 'https://ai.codeocean.net/chat/share?shareId=hq7cuciwe2j1axxdo3uwg1tx',
            'data-default-open': 'false',
            'data-drag': 'false',
            'data-open-icon': 'data:image/svg+xml;base64,PHN2ZyB0PSIxNjkwNTMyNzg1NjY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQxMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNTEyIDMyQzI0Ny4wNCAzMiAzMiAyMjQgMzIgNDY0QTQxMC4yNCA0MTAuMjQgMCAwIDAgMTcyLjQ4IDc2OEwxNjAgOTY1LjEyYTI1LjI4IDI1LjI4IDAgMCAwIDM5LjA0IDIyLjRsMTY4LTExMkE1MjguNjQgNTI4LjY0IDAgMCAwIDUxMiA4OTZjMjY0Ljk2IDAgNDgwLTE5MiA0ODAtNDMyUzc3Ni45NiAzMiA1MTIgMzJ6IG0yNDQuOCA0MTZsLTM2MS42IDMwMS43NmExMi40OCAxMi40OCAwIDAgMS0xOS44NC0xMi40OGw1OS4yLTIzMy45MmgtMTYwYTEyLjQ4IDEyLjQ4IDAgMCAxLTcuMzYtMjMuMzZsMzYxLjYtMzAxLjc2YTEyLjQ4IDEyLjQ4IDAgMCAxIDE5Ljg0IDEyLjQ4bC01OS4yIDIzMy45MmgxNjBhMTIuNDggMTIuNDggMCAwIDEgOCAyMi4wOHoiIGZpbGw9IiM0ZTgzZmQiIHAtaWQ9IjQxMzMiPjwvcGF0aD48L3N2Zz4=',
            'data-close-icon': 'data:image/svg+xml;base64,PHN2ZyB0PSIxNjkwNTM1NDQxNTI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjYzNjciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNTEyIDEwMjRBNTEyIDUxMiAwIDEgMSA1MTIgMGE1MTIgNTEyIDAgMCAxIDAgMTAyNHpNMzA1Ljk1NjU3MSAzNzAuMzk1NDI5TDQ0Ny40ODggNTEyIDMwNS45NTY1NzEgNjUzLjYwNDU3MWE0NS41NjggNDUuNTY4IDAgMSAwIDY0LjQzODg1OCA2NC40Mzg4NThMNTEyIDU3Ni41MTJsMTQxLjYwNDU3MSAxNDEuNTMxNDI5YTQ1LjU2OCA0NS41NjggMCAwIDAgNjQuNDM4ODU4LTY0LjQzODg1OEw1NzYuNTEyIDUxMmwxNDEuNTMxNDI5LTE0MS42MDQ1NzFhNDUuNTY4IDQ1LjU2OCAwIDEgMC02NC40Mzg4NTgtNjQuNDM4ODU4TDUxMiA0NDcuNDg4IDM3MC4zOTU0MjkgMzA1Ljk1NjU3MWE0NS41NjggNDUuNTY4IDAgMCAwLTY0LjQzODg1OCA2NC40Mzg4NTh6IiBmaWxsPSIjNGU4M2ZkIiBwLWlkPSI2MzY4Ij48L3BhdGg+PC9zdmc+',
            defer: true
        }]
    ],
    themeConfig: {

        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // {text: '主页', link: '/'},
            // {text: 'Sdk更新记录', link: '/sdk-version'},
            // {text: 'Vscode插件更新记录', link: '/vs-version'},
            // {text: '安卓文档', link: '/android'},
            // {text: 'IOS文档', link: '/ios'},
            // {text: 'Usb-Hid文档', link: '/usb-hid-pc'},
            // {text: '开源许可信息', link: '/open-source-libraries'},
        ],

        sidebar: [
            {
                text: '使用手册',
                collapsed: true,
                items: [
                    {text: '图标描述', link: '/other/icon-description'},
                    {text: '玩转异步和同步?', link: '/other/async-and-sync'},
                ]
            },

            {
                text: '高深玩法',
                collapsed: true,
                items: [
                    {text: '搭建一个网页并交互', link: '/advanced/web'},
                ]
            },


            {
                text: '安卓文档',
                collapsed: true,
                items: [
                    {
                        text: 'env 环境函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/env'},
                        ]
                    },
                    {
                        text: 'events 事件函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/events'},
                        ]
                    },
                    {
                        text: 'yolo Yolo函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/yolo'},
                        ]
                    },
                    {
                        text: 'termux 终端函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/termux'},
                        ]
                    },
                    {
                        text: 'app 应用函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/app'},
                        ]
                    },

                    {
                        text: 'assets 资产函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/assets'},
                        ]
                    },


                    {
                        text: 'cls 类函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/cls'},
                        ]
                    },

                    {
                        text: 'cv 图色函数',
                        collapsed: true,
                        items: [
                            {text: 'color 颜色函数', link: '/sdk_api/cv/colors'},
                            {text: 'images 图片函数', link: '/sdk_api/cv/images'},
                        ]
                    },


                    {
                        text: 'device 设备函数',
                        collapsed: true,
                        items: [

                            {text: '展开所有方法', link: '/sdk_api/device'},

                        ]
                    },


                    {
                        text: 'files 文件函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/files'},

                        ]
                    },

                    {
                        text: 'floaty 悬浮窗函数',
                        collapsed: true,
                        items: [

                            {text: '展开所有方法', link: '/sdk_api/floaty'},
                        ]
                    },
                    {
                        text: 'frida 应用安全函数',
                        collapsed: true,
                        items: [

                            {text: '展开所有方法', link: '/sdk_api/frida'},
                        ]
                    },

                    {
                        text: 'base 基础函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/base'},
                        ]
                    },

                    {
                        text: 'http 网络函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/http'},
                        ]
                    },


                    {
                        text: 'keyboard 键盘函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/keyboard'},

                        ]
                    },
                    {
                        text: 'keys 按键函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/keys'},
                        ]
                    },
                    {
                        text: 'ocr Ocr函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/ocr'},
                        ]
                    },
                    {
                        text: 'os 文件系统函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/os'},
                        ]
                    },

                    {
                        text: 'uinode Ui节点函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/uinode'},
                        ]
                    },
                    {
                        text: 'point 坐标函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/point'},


                        ]
                    },
                    {
                        text: 'plugins 插件函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/plugins'},


                        ]
                    },

                    {
                        text: 'permissions 权限函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/permissions'},


                        ]
                    },
                    {
                        text: 'persistence 持久化函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/persistence'},


                        ]
                    },

                    {
                        text: 'recordscreen 录屏函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/recordscreen'},

                        ]
                    },
                    {
                        text: 'release 释放函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/release'},


                        ]
                    },

                    {
                        text: 'root Root函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/root'},

                        ]
                    },
                    {
                        text: 'websocket websocket函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/websocket'},

                        ]
                    },

                    {
                        text: 'time 时间函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/time'},
                        ]
                    },
                    {
                        text: 'converters 转换函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/converters'},
                        ]
                    },

                    {
                        text: 'xml xml界面函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/xml'},

                        ]
                    },
                    {
                        text: 'toolwindow 工具窗口函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/toolwindow'},

                        ]
                    },
                    {
                        text: 'webview web视图函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/webview'},

                        ]
                    },
                    {
                        text: 'worker 工作线程函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/worker'},

                        ]
                    },
                    {
                        text: 'zip 解压函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/zip'},

                        ]
                    },


                ]
            },
            {
                text: 'IOS文档',
                collapsed: true,
                items: [

                    {text: '开发中'},

                ]
            },
            {
                text: 'HiD文档',
                collapsed: true,
                items: [
                    {text: 'usb 文档', link: '/hid_api/usb'},
                    {text: 'bt 文档', link: '/hid_api/bt'},
                ]
            },
            {
                text: '开源依赖',
                collapsed: true,
                items: [
                    {text: '开源信息', link: '/other/depend'},
                ]
            },
            {
                text: '更新记录',
                collapsed: true,
                items: [
                    {text: 'Core更新记录', link: '/version/core'},
                    {text: 'VScode插件更新记录', link: '/version/vscode'},
                    {text: 'IDEA插件更新记录', link: '/version/idea'},

                ]
            }
        ],


        socialLinks: [
            {icon: 'github', link: 'https://github.com/topcoco'}
        ]
    },
})
