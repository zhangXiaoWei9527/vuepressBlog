const nav = require("./nav.js");
const sidebar = require("./sidebar.js")

module.exports = {
	base: "/vuepressBlog/",
	title: '该着...',
	description: '个人博客',
	dest: './docs/.vuepress/dist',
	port: '8080',
	themeConfig: {//主题配置
		repo: 'zhangweigaizhe/vuepressBlog',
		nav,//头部导航
		sidebar, // 左侧导航
		sidebarDepth: 2,
		searchMaxSuggestoins: 10,
		serviceWorker: {
			updatePopup: {
				message: "有新的内容.",
				buttonText: '更新'
			}
		},
		editLinks: true,
		serviceWorker: true, // 是否开启 PWA
		smoothScroll: true, //页面滚动
		lastUpdated: '更新时间',//最后更新时间
		editLinkText: '在 GitHub 上编辑此页 ！'
	}
}