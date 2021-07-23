document.getElementById("submit").onclick = function () {
    var ID = document.getElementById("id_").value;
    var pass = document.getElementById("pass_").value;
    if (ID === "2101385" && pass === "yang1409*") {
        location.href = "start.html";
    } else {
        alert("로그인 실패!");
    }
};
