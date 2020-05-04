# 在Vue中读取本地文件内容

## 通过上传读取文件内容

```
<el-upload
	class="upload-demo"
	action="/"
	:disabled="this.fileList.length !== 0"
	:default-file-list="fileList"
	:before-upload="beforeUpload"
>
	<el-button size="small" type="primary">点击上传</el-button>
</el-upload>


beforeCreate() {
	// 读取文件
	FileReader.prototype.reading = function ({ encode } = pms) {
		let bytes = new Uint8Array(this.result);    //无符号整型数组
		let text = new TextDecoder(encode || 'UTF-8').decode(bytes);
		return text;
	};
	/* 重写readAsBinaryString函数 */
	FileReader.prototype.readAsBinaryString = function (f) {
		if (!this.onload)       //如果this未重写onload函数，则创建一个公共处理方式
			this.onload = e => {  //在this.onload函数中，完成公共处理
				let rs = this.reading();
			};
		this.readAsArrayBuffer(f);  //内部会回调this.onload方法
	};
}


beforeUpload(file) {
	this.fileList = [file]
	// 读取数据
	this.read(file);
	return false
},
read(f) {
	let rd = new FileReader();
	rd.onload = e => {
		//this.readAsArrayBuffer函数内，会回调this.onload函数。在这里处理结果
		let cont = rd.reading({ encode: 'GBK' });

		this.urls = cont.split("\n").map((item) => {
			return item.trim();
		})
		let formerData = this.textData;
		this.textData = formerData + "\n" + cont;
	};
	rd.readAsBinaryString(f);
}

```

## 直接读取本地文件

>要注意文件的存放位置，默认读public文件夹
```
readFile(filePath) {
	// 创建一个新的xhr对象
	let xhr = null
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest()
	} else {
		// eslint-disable-next-line
		xhr = new ActiveXObject('Microsoft.XMLHTTP')
	}
	const okStatus = document.location.protocol === 'file' ? 0 : 200
	xhr.open('GET', filePath, false)
	xhr.overrideMimeType('text/html;charset=utf-8')
	xhr.send(null)
	return xhr.status === okStatus ? xhr.responseText : null
}
```
