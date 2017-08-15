var username = document.getElementById("name");
var nullname = document.getElementById("nullname");
var pwd = document.getElementById("pwd");
var nullpwd = document.getElementById("nullpwd");
var load = document.getElementById("load");
var btn = document.getElementById("btn");

function demo() {

	if(username.value == "") {
		nullname.innerHTML = "账号不为空";
		username.focus();
		return false;
	}
	if(pwd.value == "") {
		nullpwd.innerHTML = "密码不能为空";
		pwd.focus();
		return false;
	}

	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			if(username.value == data[0].user && pwd.value == data[0].password) {
				location.href = "login.html";
			} else if(username.value == data[1].user && pwd.value == data[1].password) {
				location.href = "login.html";
			} else {
				nullpwd.innerHTML = "密码或用户名不正确";
			}

		}
	}
	xmlhttp.open("GET", "js/json.json", true);
	xmlhttp.send();
}
username.onblur = function() {
	nullname.innerHTML = "";
	if(username.value == "") {
		nullname.innerHTML = "账号不为空";
		username.focus();
		return false;
	}
}
pwd.onblur = function() {
	nullpwd.innerHTML = "";
	if(pwd.value == "") {
		nullpwd.innerHTML = "密码不能为空";
		pwd.focus();
		return false;
	}
}