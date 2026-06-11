let signin = document.querySelector(".signin")
let signup = document.querySelector(".signup")
let signup_submit= document.querySelector(".signup_submit")
let dont2 = document.querySelector(".dont")
let donti = document.querySelector(".donti")
let dontii = document.querySelector(".dontii")
error2 = document.querySelector(".error2")
error = document.querySelector(".error")
let signin_btn = document.querySelector(".signin_btn")
let signup_btn = document.querySelector(".signup_btn")
signin_btn.addEventListener("click",()=>{
signup.style.zIndex = 2 
signin.style.zIndex = 1
signin.style.position = "absolute"
signin.style.marginLeft="320px"
signin.style.opacity = 0
setTimeout(() => {
dont2.style.marginLeft="0px"
dont2.style.marginRight="410px"
dont2.style.borderRadius = "17px 150px 150px 17px"
},1000);
setTimeout(() => {
donti.style.display = "block"
dontii.style.display = "none"
},3000);
setTimeout(() => {
signup.style.position = "absolute"
signup.style.marginLeft ="320px"
signup.style.opacity = 1
},5001);
});

signup_btn.addEventListener("click", () => {
signup.style.zIndex = 1
signin.style.zIndex = 2
signup.style.position = "absolute"
signup.style.marginLeft = "0px"
signup.style.opacity = 0
setTimeout(() => {
dont2.style.marginRight="0px"
dont2.style.marginLeft="410px"
dont2.style.borderRadius = "150px 17px 17px 150px"
},1000);
setTimeout(() => {
donti.style.display = "none"
dontii.style.display = "block"
},3000);
setTimeout(() => {
signin.style.position = "absolute"
signin.style.marginLeft ="0px"
signin.style.opacity = 1
},5001);
});

github_btn = document.querySelectorAll(".git_login")
github_btn.forEach(git => {
    git.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5000/login/gitHub";
});
});

microsoft_btn = document.querySelectorAll(".ms_login")
microsoft_btn.forEach(microsoft => {
    microsoft.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5000/login/microsoft";
});
});

google_btn = document.querySelectorAll(".google_login")
google_btn.forEach(google => {
    google.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5000/login/google";
});
});


window.addEventListener("click",()=>{
error.innerText=""
});
window.addEventListener("load",()=>{
if(error2.innerText != ""){
      setTimeout(()=>{
    },3000)
    signin_btn.click()
}
});
