let menu_icon = document.getElementById("menu-icon");
let menu = document.getElementById("_menu");
let middle = document.getElementById("middle");
let content = document.getElementById("content");

let sidebar = document.getElementById("sidebar");
let outline = document.getElementById("outline");
let on_click = false;

if (on_click === false) {
    menu.style.display = "none";
}

function toggle_menu() {
    on_click = !on_click;
    // console.log(document.documentElement.scrollTop);
    // let reading_location = document.documentElement.scrollTop;
    if (!on_click) {
        menu.style.display = "none";
        middle.style.display = "block";
    } else {
        middle.style.display = "none";
        menu.style.display = "block";
        menu.style.position = "fixed";
    }
};

function resize() {
    content.style.minHeight = (document.documentElement.clientHeight - 70) + "px";
    outline.style.maxHeight = (document.documentElement.clientHeight - 140) + "px";
    menu.style.minHeight = (document.documentElement.clientHeight - 70) + "px";
}

menu_icon.addEventListener("click", toggle_menu);

// set the minimum height to window height
// https://www.php.cn/div-tutorial-270802.html
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        resize();
        
        window.onresize = function () {
            resize();
            // close menu if width exceeds xs limit
            if (document.documentElement.clientWidth > 767 && on_click) {
                toggle_menu();
            }
        };
    }
};