function updHeaderSize() {
    console.log("Size of header:" + document.getElementById("nav").offsetHeight)
    document.getElementById("content").style.marginTop = document.getElementById("nav").offsetHeight - 1 + "px";
}
updHeaderSize()
window.onresize = updHeaderSize



//-----------------------------------------------------------------------
document.color = "bg-light"
function updCollapsibleNav() {
    let cs = document.getElementById('myNavbar1').classList;
    cs.remove('bg-dark', 'bg-light')
    cs.add(document.color)
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//https://www.w3schools.com/js/js_cookies.asp
// You can probably tell which code is mine or not by looking at the semicolons. I'm too lazy to write them.
console.log("Theme:", getCookie("theme"))
if(getCookie("theme")==='bg-dark'){
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    document.color = "bg-dark"
    // store in document so it's globally accessible
}else{
    document.documentElement.setAttribute('data-bs-theme', 'light')
    document.color = "bg-light"
}
updCollapsibleNav()
let x = () => {
    console.log("Previous theme:", getCookie("theme"))
    if (getCookie("theme") == 'bg-dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        document.color = "bg-light"
        document.cookie = `theme=${document.color}`
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.color = "bg-dark"
        document.cookie = `theme=${document.color}`
    }
    //https://stackoverflow.com/questions/63082529/how-to-properly-introduce-a-light-dark-mode-in-bootstrap

    updCollapsibleNav()
}
document.getElementById('btnSwitch').addEventListener('click', x)

