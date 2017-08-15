/////////////////////////////111
//$(function() {
//	$.ajax({
//		url: "https://bllli.cn:23456/api/v1.0/system/new_version",
//		type: "Post",
//		async: false,
//		data:{"id":id,"name":name}
//		// dataType: "json",
//		success: function(data) {
//			//返回的数据用data.d获取内容 
//			str = data.d;
//		},
//		error: function(err) {
//			alert(err);
//		}
//	});
//		
//});
/////////////////////////////////222
//function Test(strMsg1, strMsg2) {　
//	var str = “value”;
//	$.ajax({
//		type: "Post",
//		url: "Demo.aspx/GetStr",
//		async: false,
//		//方法传参的写法一定要对，与后台一致，区分大小写，不能为数组等，str1为形参的名字,str2为第二个形参的名字 
//		data: "{'str1':'" + strMsg1 + "','str2':'" + strMsg2 + "'}",
//		contentType: "application/json; charset=utf-8",
//		dataType: "json",
//		success: function(data) {
//			//返回的数据用data.d获取内容 
//			str = data.d;
//		},
//		error: function(err) {
//			alert(err);
//		}
//	});　
//	return str;
//}

///////////////////////////////////333
//function Test(strMsg1, strMsg2) {
//	$.ajax({
//		url: "https://bllli.cn:23456/api/v1.0/system/new_version",
//		type: "Post",
//		async: true,
//		//方法传参的写法一定要对，与后台一致，区分大小写，不能为数组等，str1为形参的名字,str2为第二个形参的名字 
//		data: "{'str1':'" + strMsg1 + "','str2':'" + strMsg2 + "'}",
//		contentType: "application/json; charset=utf-8",
//		dataType: "json",
//		success: function(data) {
//			//返回的数据用data.d获取内容 
//			alert(data.d);
//		},
//		error: function(err) {
//			alert(err);
//		}
//	});　　 //隐藏加载动画
//	$("#pageloading").hide();
//}

///////////////////////////////////444
//$(function() {
//	$.ajax({
//		url: "https://bllli.cn:23456/api/v1.0/system/new_version",
//		type: "Post",
//		data: "id=xxx",
//		cache: false,
//		async: false,
//		success: function(result) {
//			A: 接收后台返回的数组
//			var data = eval(result);
//			if(typeof(data) != "undefined" && data.length > 0) {
//				for(var i = 0; i < data.length; i++) {
//					data[i]["id"];
//					data[i]["name"];
//				}
//			}
//			B: 后台返回字符串则直接接收
//		},
//		error: function() {
//			alert("table loading error...");
//		}
//	});
//});
///////////////////////////////////////////////////////铭
	$(function() {
		var settings = {
			async: true,
			crossDomain: true,
			url: "https://bllli.cn:23456/api/v1.0/users/myself",
			//method: "GET",
			type: "Get",
			headers: {
				"authorization": "Basic NDE0MDIwNjEzOTpjZHMydzg5Mw=="
			}
		}
	
		$.ajax(settings).done(function(response) {
			console.log(response);
		});
	});


	$(function() {
		var data = null;
	
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
	
		xhr.addEventListener("readystatechange", function() {
			if(this.readyState === 4) {
				console.log(this.responseText);
			}
		});
	
		xhr.open("GET", "https://bllli.cn:23456/api/v1.0/score?score_type=all ");
		xhr.setRequestHeader("authorization", "Basic NDE0MDIwNjEzOTpjZHMydzg5Mw==");
		xhr.setRequestHeader("cache-control", "no-cache");
		xhr.setRequestHeader("postman-token", "a15e9afe-1c55-a78b-7ea6-317eb0a6eb80");
		xhr.send(data);
	
	});














