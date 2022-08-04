let menu_icon = document.getElementById("menu-icon");
let menu = document.getElementById("_menu");
let middle = document.getElementById("middle");
let on_click = false;

function main() {
    if (on_click === false) {
        menu.style.display = "none";
    }
    menu_icon.addEventListener("click", function() {
        on_click = !on_click;
        console.log(on_click);
        // console.log(document.documentElement.scrollTop);
        // let reading_location = document.documentElement.scrollTop;
        if (!on_click) {
            menu.style.display = "none";
            middle.style.height = document.body.clientHeight + "px";
            middle.style.overflow = "visible";
        } else {
            menu.style.display = "block";
            menu.style.height = (document.documentElement.clientHeight - 70) + "px";
            menu.style.position = "fixed";
            menu.style.zIndex = "9999";
            middle.style.height = (document.documentElement.clientHeight - 140) + "px";
            middle.style.overflow = "hidden";
        }
    });
}

main();
console.log(screen.height);