## 1. 安装全局vuepress
	npm install -g vuepress
## 2. 创建配置文件

1. 创建如下目录文件：

```
.
├── docs
│   ├── .vuepress 
│   │   ├── config.js
|   |   ├── nav.js
|   |   ├── sidebar.js
|	├── vuepress
|   |   ├── 01_初始化vuepress.md
└── package.json
```

2. 在config.js文件中的配置：


```
const nav = require("./nav.js");
const sidebar = require("./sidebar.js")

module.exports = {
	base:"/docs/",
	title: '该着。。。',
	description: '个人博客',
	dest: './dist',
	port: '8080',
	themeConfig: {//主题配置
		nav,//头部导航
		sidebar, // 左侧导航
		sidebarDepth: 2,
		lastUpdated: 'Last Updated',
		searchMaxSuggestoins: 10,
		serviceWorker: {
			updatePopup: {
				message: "有新的内容.",
				buttonText: '更新'
			}
		},
		editLinks: true,
		editLinkText: '在 GitHub 上编辑此页 ！'
	}
}
```

3. 在nav.js文件中配置

```
module.exports = [{
		text: '主页',
		link: '/'
	},
	{
		text: "vuepress指南",
		link: "../vuepress/01_初始化vuepress"
	},
	{
		text: "学习笔记",
		items: [{
			text: "前端",
			items: [{
				text: "Vue",
				link: ""
			}, {
				text: "React",
				link: ""
			}]
		}, {
			text: "后端",
			items: [{
				text: "java",
				link: ""
			}]
		}, {
			text: "其他",
			link: ""
		}]
	}
]
```

4. 在sidebar.js文件中配置：

```
module.exports = {
	'/vuepress/': [
		["01_初始化vuepress","初始化vuepress"]
	]
}
```
## 3. 运行vuepress

```
vuepress dev docs
```


