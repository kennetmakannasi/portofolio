//Function navbar

function navbar1(){
    location.replace("index.html")
}
function navbar2(){
    location.replace("Profil.html")
}
function navbar3(){
    location.replace("kontak.html")
}

//function redirect sosmed

function gh(){
    location.replace("https://github.com/kennetmakannasi")
}
function ig(){
    location.replace("https://www.instagram.com/heagentkenet/")
}
function x(){
    location.replace("https://twitter.com/HeagentKenneth")
}


//function slide bar sosmed

//buka
function open1(){
    document.getElementById("icons2gh").style.width="275px"
    document.getElementById("st1").style.opacity="1"
    document.getElementById("st1").style.transition="1.7s"
}
function open2(){
    document.getElementById("icons2ig").style.width="275px"
    document.getElementById("st2").style.opacity="1"
    document.getElementById("st2").style.transition="1.7s"
}
function open3(){
    document.getElementById("icons2x").style.width="275px"
    document.getElementById("st3").style.opacity="1"
    document.getElementById("st3").style.transition="1.7s"
}


//tutup
function close1(){
    document.getElementById("icons2gh").style.width="0"
    document.getElementById("st1").style.opacity="0"
    document.getElementById("st1").style.transition="0.2s"
}
function close2(){
    document.getElementById("icons2ig").style.width="0"
    document.getElementById("st2").style.opacity="0"
    document.getElementById("st2").style.transition="0.2s"
}
function close3(){
    document.getElementById("icons2x").style.width="0"
    document.getElementById("st3").style.opacity="0"
    document.getElementById("st3").style.transition="0.2s"
}

