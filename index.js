const click = document.querySelector(".click");
const miniVScode = document.querySelector(".mini_vscode");

click.onmouseover = function() {
    miniVScode.className = "mini_vscode_show";
}

click.onmouseout = function() {
    setTimeout(function() {
        miniVScode.className = "mini_vscode";
    },300)
}
