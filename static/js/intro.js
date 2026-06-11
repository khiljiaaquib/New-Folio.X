let spans = document.querySelectorAll("span");
let slogan = document.getElementsByClassName("slogan")[0];
let ring = document.getElementsByClassName("ring")[0];
let button = document.querySelector("button");

spans.forEach((span)=>{
span.style.position = "absolute";
span.style.left=`${Math.floor(Math.random()*200)+20}px`;
span.style.top=`${Math.floor(Math.random()*200)+0}px`;
span.style.right=`${Math.floor(Math.random()*100)+30}px`;
span.style.bottom=`${Math.floor(Math.random()*100)+20}px`;
span.style.transitionDuration ="3s";
})
setTimeout(()=>{
spans.forEach((span)=>{
span.style.position = "relative";
span.style.left=`0px`;
span.style.top=`0px`;
span.style.right=`0px`;
span.style.bottom=`0px`;
})
},1);
setTimeout(()=>{
slogan.style.opacity =1;
},3001);
setTimeout(()=>{
ring.style.opacity =1;
},4001);
setTimeout(()=>{
button.style.opacity =1;
},5001);