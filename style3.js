let darkMode = false

function switchMode(){
    if (darkMode === false) {
        darkMode = true;
        let src = document.getElementById("icon").setAttribute("src","/images/star_icon.png")
        let head = document.head.innerHTML + '<link rel="stylesheet" href="/css/style3_dark.css">'

        document.head.innerHTML = head;    
    } else {
        darkMode = false
        let src = document.getElementById("icon").setAttribute("src","/images/moon-icon.png")
        let head = document.head.innerHTML + '<link rel="stylesheet" href="/css/style3.css">'
        document.head.innerHTML = head;
    
    }   
        console .log(head)
}