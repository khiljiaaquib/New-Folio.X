let zyra_btn = document.querySelector(".Zyra-AI")
let xmark = document.querySelector(".fa-xmark")
let btn = document.querySelector("#sendBtn")
let chat = document.querySelector("#chatOutput")
let input = document.querySelector("#userInput")
let zyra_interface = document.querySelector(".zyra-interface")
window.addEventListener("load",async()=>{
    res =await fetch("/getSessionData")
    data= await res.json()
    if(data!=0&&data!="0"){
        chat.innerHTML=data
    }
});
zyra_btn.addEventListener("click",()=>{
zyra_interface.classList.toggle("display")
zyra_btn.style.display ="none"
})
xmark.addEventListener("click",()=>{
    zyra_btn.click()
    setTimeout(()=>{
zyra_btn.style.display ="inline-flex"
    },2000)
})
btn.addEventListener("click",async(e)=>{
    let div = document.createElement("div")
    div.textContent = input.value
    div.classList.add("userMessage")
    chat.appendChild(div)
    let html = chat.innerHTML;
    fetch("/updateSessionData",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                "chat_html":html
            })
    })
});

document.querySelector(".formAI").onsubmit = async(e)=>{
                e.preventDefault();
                console.log("hii");
                let formData = new FormData(e.target);
                let res = await fetch("/ask",{
                    method:"POST",
                    body:formData 
                });
                input.value=""
                let data = await res.json()
                let answer = document.createElement("div")
                answer.innerText = data.response ;
                answer.classList.add("message")
                answer.classList.add("bot")
                chat.appendChild(answer)
                console.log(data.response);
                let html = chat.innerHTML;
                fetch("/updateSessionData",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {
                "chat_html":html
            })
    })
        };
