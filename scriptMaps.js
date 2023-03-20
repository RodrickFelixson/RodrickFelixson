window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals.classList.remove('active')
        }
    }
}

// document.querySelector("#open-popup").addEventListener("click", function(){
//     document.body.classList.add("active-popup")
// })

// document.querySelector(".popup .close-btn").addEventListener("click", function(){
//     document.body.classList.remove("active-popup")
// })

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
    console.log("ck1")

}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active")
    console.log("ck")
}

function togglePopup3(){
    document.getElementById("popup-3").classList.toggle("active")
}

function togglePopup4(){
    document.getElementById("popup-4").classList.toggle("active")
}