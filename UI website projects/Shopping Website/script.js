const toggle = document.querySelector(".toggle")
// console.log(toggle)
const navbar = document.getElementById("nav")
// console.log(navbar)
const close = document.querySelector(".close")

if(toggle){
    toggle.addEventListener("click",()=>{
        navbar.classList.add('active')
    })
}

if(close){
    close.addEventListener("click",()=>{
        navbar.classList.remove('active')
    })
}