let hamburger = document.querySelector(".hamburger")
let sbm = document.querySelector(".sbm")
hamburger.addEventListener("change",()=>{
    if (hamburger.style.display=="none")sbm.style.display="none";
})
hamburger.addEventListener("click",()=>{
    sbm.classList.toggle("displaysbm");
})