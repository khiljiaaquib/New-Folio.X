let checks = document.querySelectorAll(".company_select_div")
let form  = document.querySelector(".form")
checks.forEach((check)=>{
check.addEventListener("click",()=>{
form.submit();
});
});
