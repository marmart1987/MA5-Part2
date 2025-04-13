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
if (getCookie("theme") === 'bg-dark') {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    document.color = "bg-dark"
    // store in document so it's globally accessible
} else {
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

//---------------------

document.addEventListener('scroll', scroll)

function scroll() {
    console.log("a")
    const el = document.getElementsByClassName("sI")
    console.log(el)
    for (let i = 0; i < el.length; i++) {
        const element = el[i]
        var rect = element.getBoundingClientRect();
        console.log((rect.bottom), window.innerHeight);
        if(rect.bottom < window.innerHeight){
            console.log('GJJJJJJJJJM')
            setInterval( () => {

            element.style.opacity--
            }, 100)
        }
    }
}
// forEach(element => {
//     console.log(element.position())
// });

// //     $('.hideme').each(function (i) {

//         var bottom_of_object = $(this).position().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height();

//         /* If the object is completely visible in the window, fade it it */
//         if (bottom_of_window > bottom_of_object) {

//             $(this).animate({ 'opacity': '1' }, 1500);

//         }

//     });