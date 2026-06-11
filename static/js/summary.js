let summary_btn = document.querySelector(".summary_btn");
let textarea = document.querySelector("textarea");
let summary = document.querySelector(".summary0")
summary_btn.onclick = async (e) => {
    e.preventDefault();
    if (textarea.value.trim() !== "") { 
        summary_btn.innerText = "processing...";
        summary_btn.disabled = true; 
        try {
            let res = await fetch("/summary", {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: textarea.value 
            });
            textarea.value = ""; 
            let data = await res.json();
            textarea.value = data.response; 
            summary.innerText = data.response; 
        } catch (error) {
            alert("try again later");
        } finally {
            summary_btn.innerText = "AI Summary"; 
            summary_btn.disabled = false;
        }
    }
};