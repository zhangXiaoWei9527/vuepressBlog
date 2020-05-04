module.exports = {
	'/vuepress/': [{
			title: "初始化vuepress",
			collapsable: false,
			children:[
				"01_初始化vuepress"
			]
		},{
			title: "部署vuepress",
			collapsable: false,
			children:[
				"02_部署vuepress"
			]
		}
	],
	"/TypeScript/": [{
		title: '初识 TypeScript', // 标题
		collapsable: false, // 下级列表不可折叠
		children: [ // 下级列表
			'chapter1/01_初识TS',
			'chapter1/02_安装TS',
			'chapter1/03_HelloWorld',
			'chapter1/04_webpack打包',
		]
	}, {
		title: 'TypeScript 常用语法',
		collapsable: false,
		children: [
			'chapter2/1_type',
			'chapter2/2_interface',
			'chapter2/3_class',
			'chapter2/4_function',
			'chapter2/5_generic',
			'chapter2/6_other',
		]
	}, {
		title: 'React & Vue',
		collapsable: false,
		children: [
			'chapter3/1_react',
			'chapter3/2_vue',
		]
	}],
	"/Vue/":[
		'/Vue/Vue'
	]
}