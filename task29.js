/**
 * Created by jiangyiming on 4/14/16.
 */
window.onload = function () {
    var oBtn = document.getElementById("btn");
    oBtn.addEventListener("click", check, false);//加按钮事件
};

function check() {
    var oInput = document.getElementById("input");
    var str = oInput.value.trim();
    var oSpan = document.getElementsByTagName("span")[0];

    var length = str.replace(/[^\x00-\xff]/g, "ym").length;//统计用户输入的字数,接下来进行一系列判断

    if (length == 0) {
        oSpan.innerHTML = "名称不能为空";
        oSpan.style.color = "red";
        oInput.style.borderColor = "red";
    } else if (length < 4) {
        oSpan.innerHTML = "输入的字符少于4位";
        oSpan.style.color = "red";
        oInput.style.borderColor = "red";
    } else if (length > 26) {
        oSpan.innerHTML = "输入的字符多于26位";
        oSpan.style.color = "red";
        oInput.style.borderColor = "red";
    } else {
        var reg = /[^\w\u4e00-\u9fa5]/g;//判断用户是否有输入中英文数字下划线之外的内容

        if (reg.test(str)) {
            oSpan.innerHTML = '含有非法字符！';
            oSpan.style.color = "red";
            oInput.style.borderColor = "red";

        } else {
            oSpan.innerHTML = '名称输入格式正确！';
            oSpan.style.color = "green";
            oInput.style.borderColor = "green";
        }

    }

}

