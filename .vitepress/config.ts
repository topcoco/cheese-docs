import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    // plugins:[pagefindPlugin()],
    base: '/',
    title: "Cheese",
    description: "自动化测试框架",
    head: [
        ['link', { rel: 'icon', href: '../images/icon.png' }],

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
                text: 'Ai',
                link: '/other/ai'
            },
            {
                text: '指南',
                collapsed: false,
                items: [
                    { text: '图标描述', link: '/other/icon-description' },
                    { text: 'Android使用教程', link: '/guide/android' },
                    { text: 'IOS使用教程', link: '/guide/ios' },

                    // { text: '玩转异步和同步?', link: '/other/async-and-sync' },
                ]
            },



            // {
            //     text: '高深玩法',
            //     collapsed: true,
            //     items: [
            //         {text: '搭建一个网页并交互', link: '/advanced/web'},
            //     ]
            // },


            {
                text: '安卓文档',
                collapsed: true,
                items: [

                    {
                        text: 'adb adb函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/adb' },

                        ]
                    },

                    {
                        text: 'app 应用函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/app' },
                        ]
                    },
                    {
                        text: 'assets 静态资源函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/assets' },
                        ]
                    },

                    {
                        text: 'base 基础函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/base' },
                        ]
                    },

                    {
                        text: 'canvas 画布函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/canvas' },
                        ]
                    },


                    {
                        text: 'color 颜色函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/color' },
                        ]
                    },

                    {
                        text: 'converters 转换函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/converters' },
                        ]
                    },


                    {
                        text: 'device 设备函数',
                        collapsed: true,
                        items: [

                            { text: '展开所有方法', link: '/sdk_api/device' },

                        ]
                    },

                    {
                        text: 'env 环境函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/env' },
                        ]
                    },
                    {
                        text: 'events 事件函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/events' },
                        ]
                    },


                    {
                        text: 'files 文件函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/files' },

                        ]
                    },


                    {
                        text: 'floatingwindow 悬浮窗函数',
                        collapsed: true,
                        items: [

                            { text: '展开所有方法', link: '/sdk_api/floatingwindow' },
                        ]
                    },

                    {
                        text: 'http 网络函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/http' },
                        ]
                    },

                    {
                        text: 'image 图像函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/image' },
                        ]
                    },

                    {
                        text: 'keyboard.md 键盘函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/keyboard.md' },

                        ]
                    },
                    {
                        text: 'keys 按键函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/keys' },
                        ]
                    },


                    {
                        text: 'ocr Ocr函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/ocr' },
                        ]
                    },



                    {
                        text: 'path 文件系统函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/path' },
                        ]
                    },

                    {
                        text: 'permissions 权限函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/permissions' },


                        ]
                    },
                    {
                        text: 'persistentstore 持久化函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/persistentstore' },


                        ]
                    },

                    {
                        text: 'plugins 插件函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/plugins' },


                        ]
                    },
                    {
                        text: 'point 坐标函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/point' },


                        ]
                    },



                    {
                        text: 'recordscreen 录屏函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/recordscreen' },

                        ]
                    },

                    {
                        text: 'root Root函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/root' },

                        ]
                    },

                    {
                        text: 'thread 线程函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/thread' },
                        ]
                    },


                    {
                        text: 'toolwindow 工具窗口函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/toolwindow' },

                        ]
                    },


                    {
                        text: 'uinode Ui节点函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/uinode' },
                        ]
                    },



                    {
                        text: 'websocket websocket函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/websocket' },

                        ]
                    },


                    {
                        text: 'webview web视图函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/webview' },

                        ]
                    },


                    {
                        text: 'yolo Yolo函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/yolo' },
                        ]
                    },



                    {
                        text: 'zip 解压函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/sdk_api/zip' },

                        ]
                    },


                ]
            },
            {
                text: 'IOS文档',
                collapsed: true,
                items: [
                    {
                        text: 'app 应用函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/app' }
                        ]
                    },
                    {
                        text: 'assets 静态资源函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/assets' }
                        ]
                    },
                    {
                        text: 'base 基础函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/base' }
                        ]
                    },
                    {
                        text: 'device 设备函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/device' }
                        ]
                    },
                    {
                        text: 'http 网络函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/http' }
                        ]
                    },
                    {
                        text: 'image 图像函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/image' }
                        ]
                    },
                    {
                        text: 'keyboard 键盘函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/keyboard' }
                        ]
                    },
                    {
                        text: 'keys 按键函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/keys' }
                        ]
                    },
                    {
                        text: 'ocr Ocr函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/ocr' }
                        ]
                    },
                    {
                        text: 'path 文件系统函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/path' }
                        ]
                    },
                    {
                        text: 'point 坐标函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/point' }
                        ]
                    },
                    {
                        text: 'recordscreen 录屏函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/recordscreen' }
                        ]
                    },
                    {
                        text: 'ui 界面函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/ui' }
                        ]
                    },
                    {
                        text: 'uinode Ui节点函数',
                        collapsed: true,
                        items: [
                            { text: '展开所有方法', link: '/ios_api/uinode' }
                        ]
                    }
                ]
            },
            {
                text: 'HiD文档',
                collapsed: true,
                items: [
                    { text: 'usb 文档', link: '/hid_api/usb' },
                    { text: 'bt 文档', link: '/hid_api/bt' },
                ]
            },
            {
                text: '开源依赖',
                collapsed: true,
                items: [
                    { text: '开源信息', link: '/other/depend' },
                ]
            },
            {
                text: '更新记录',
                collapsed: true,
                items: [
                    { text: 'Core更新记录', link: '/version/core' },
                    { text: 'VScode插件更新记录', link: '/version/vscode' },
                    { text: 'IDEA插件更新记录', link: '/version/idea' },

                ]
            }
        ],


        socialLinks: [
            { icon: 'github', link: 'https://github.com/topcoco' }
        ]
    },
})
