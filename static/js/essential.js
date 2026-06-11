let select = document.getElementsByClassName("Templates")[0];
let prev_inf = document.getElementsByClassName("prev-inf")[0];
let prev_inf2 = document.getElementsByClassName("prev-inf2")[0];
let message = document.getElementsByClassName("message")[0];
let job = document.getElementById("job");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let linkedIn = document.getElementById("linkedIn");
let website = document.getElementById("website");
let summary = document.getElementById("summary");
let eduButton = document.getElementsByClassName("edu-button")[0];
let edu = document.getElementsByClassName("edu-info")[0];
// let helper = document.querySelector(".helper")[0];

import {edu_code,work_code,project_code} from "./Helper.js";
let updateTemplate = ()=>{
if(select.value=="Traditional"){
prev_inf.style.display = "block";
prev_inf2.style.display = "none";
message.style.display = "none";
}
else if(select.value=="Modern"){
 prev_inf.style.display = "none";
prev_inf2.style.display = "block";   
message.style.display = "none";
}
else{
prev_inf.style.display = "none";
prev_inf2.style.display = "none";  
message.style.display = "block";
}
}
window.addEventListener("DOMContentLoaded", updateTemplate);
select.addEventListener("change",updateTemplate);
// name 
let naam = document.getElementById("name");
let name2 = document.getElementById("name!");
let name3 = document.getElementById("name!!");
let nameoutput =""; 
naam.addEventListener("input",(res)=>{
nameoutput = naam.value ; 
if(nameoutput!=""){
name2.innerHTML = `<h1><b>${nameoutput}</b></h1>`;
name3.innerHTML = `<h1><b>${nameoutput}</b></h1>`;
name3.style.fontSize = "30px";
name3.style.fontWeight = "bolder";
name2.style.fontSize = "40px";
name2.style.fontWeight = "bolder";
name2.style.textAlign = "center";
}
else{
    name2.innerText = ``;
    name3.innerHTML = ``;
}
});

//job
let job2 = document.getElementById("job!");
let job3 = document.getElementById("job!!");
job2.style.fontSize = "25px";
let joboutput = "";
job.addEventListener("input",(res)=>{
joboutput = job.value ; 
if(joboutput!=""){
job2.innerHTML = `<b>${joboutput}</b>`;
job3.innerHTML = `<h5>${joboutput}</h5>`;
}
else{
    job2.innerText = ``;
    job3.innerHTML=``;
}
});

// address
let address2 = document.getElementById("address!");
address2.style.fontSize = "25px";
let address3 = document.getElementById("address!!");
let adressoutput = "";
address.addEventListener("input",(res)=>{
adressoutput = address.value ; 
if(adressoutput!=""){
address2.innerHTML = `| ${adressoutput}`;
address3.innerHTML = `<h6><i class="fa-solid fa-location-dot fa">&nbsp;&nbsp;</i>${adressoutput}</b>`;
address3.style.fontSize = "25px";
address3.style.color = "black";
}
else{
    address2.innerText = ``;
    address3.innerText = ``;
}
});

//phone
let phone2 = document.getElementById("phone!");
let phone3 = document.getElementById("phone!!");
let phone4 = document.getElementById("phone!!1");
phone2.style.fontSize = "25px";
let phoneoutput = "";
phone.addEventListener("input",(res)=>{
phoneoutput = phone.value ; 
if(phoneoutput!=""){
phone2.innerHTML = ` <b>| Ph:- </b>${phoneoutput}`;
phone3.innerHTML = `<h6><i class="fa-solid fa-phone fa">&nbsp;&nbsp;</i>${phoneoutput}</h6>`;
phone4.innerHTML = `<i class="fa-solid fa-phone fa">&nbsp;&nbsp;</i>${phoneoutput} | `;
phone4.style.fontSize = "20px";
phone3.style.fontSize = "10px";
}
else{
    phone2.innerHTML = ``;
    phone3.innerHTML = ``;
    phone4.innerHTML = ``;
}
});

//email
let email2 = document.getElementById("email!");
let email3 = document.getElementById("email!!");
let email4 = document.getElementById("email!!1");
let emailoutput = "";
email2.style.fontSize = "25px";
email.addEventListener("input",(res)=>{
emailoutput = email.value ; 
if(emailoutput!=""){
email2.innerHTML = ` <b> ${emailoutput}</b>`;
email3.innerHTML = ` <h6><i class="fa-regular fa-envelope fa">&nbsp;&nbsp;</i>${emailoutput}</h6>`;
email4.innerHTML = ` <i class="fa-regular fa-envelope fa">&nbsp;&nbsp;</i>${emailoutput} `;
email4.style.fontSize = "20px";
}
else{
    email2.innerText = ``;
      email4.innerText = ``;
    email3.innerText = ``;
}
});

//linkedin
let linkedIn2 = document.getElementById("linkedIn!");
let linkedIn3 = document.getElementById("linkedIn!!");
let linkedIn4 = document.getElementById("linkedIn!!1");
let linkedInoutput = "";
linkedIn.addEventListener("input",(res)=>{
linkedInoutput = linkedIn.value ; 
console.dir(linkedIn.value);
if(linkedInoutput!=""){
linkedIn2.innerHTML = `<b>linkedIN:- </b><a href="${linkedInoutput}" target = "_blank">${linkedInoutput}</a>`;
linkedIn3.innerHTML = `<i class="fa-brands fa-square-linkedin fa"></i>&nbsp;&nbsp;<a href="${linkedInoutput}" target = "_blank">${linkedInoutput}</a>`;
linkedIn4.innerHTML = `<i class="fa-brands fa-square-linkedin fa"></i>&nbsp;&nbsp;<a href="${linkedInoutput}" target = "_blank">${linkedInoutput}</a>`;
linkedIn4.style.fontSize = "20px";
}
else{
    linkedIn2.innerHTML =``;
      linkedIn4.innerHTML =``;
    linkedIn3.innerHTML =``;
}
});
// website
let website2 = document.getElementById("website!");
let website3 = document.getElementById("website!!");
let website4 = document.getElementById("website!!1");
let websiteoutput = "";
website.addEventListener("input",(res)=>{
websiteoutput = website.value ; 
if(websiteoutput!=""){
website2.innerHTML = ` <b>Website: </b><a href="${websiteoutput}">${websiteoutput}<a>`;
website3.innerHTML = `<h6><i class="fa-solid fa-laptop-code fa">&nbsp;&nbsp;</i> <a href="${websiteoutput}">${websiteoutput}<a></h6>`;
website4.innerHTML = `<i class="fa-solid fa-laptop-code fa">&nbsp;&nbsp;</i> <a href="${websiteoutput}">${websiteoutput}<a> | `;
website4.style.fontSize = "20px";
}
else{
website2.innerHTML = ``;
website3.innerHTML = ``;
website4.innerHTML = ``;
}
});

// summary
let summary2 = document.getElementById("summary!");
let summary3 = document.getElementsByClassName("summary!!")[0];
let summary_heading = document.getElementsByClassName("summary_heading!")[0];
let summaryoutput = "";
summary.addEventListener("input",(res)=>{
summaryoutput = summary.value ; 
if(summaryoutput!=""){
summary2.innerHTML = `<h2><b>Summary</b></h2><hr class="sumhr"><p>${summaryoutput}</p>`;
summary2.style.margin = "30px" ;
summary_heading.style.display = "block";
summary3.innerHTML = `${summaryoutput}`;
}
else{
    summary_heading.style.display = "none";
    summary2.innerHTML = ``;
    summary3.innerHTML = ``;

}
});

//projects
let project_counter = 1 ;
let projectButton = document.getElementsByClassName("project-button")[0];
let project = document.getElementsByClassName(`project-info`)[0];
projectButton.addEventListener("click" , ()=>{
let newproject = document.createElement("div");
newproject.classList.add("ess-info") ; 
newproject.classList.add("project-info");
newproject.innerHTML = project_code(project_counter);
project.insertAdjacentElement("afterend",newproject);
let project2 = document.getElementsByClassName("projecting!")[0]; 
let project3 = document.getElementsByClassName("projecting!!")[0]; 
let projectexp = document.createElement("div");
projectexp.classList.add(`projecty${project_counter}`);
projectexp.innerHTML =` 
<div class="project_name${project_counter}!"></div> 
 <div class="tech${project_counter}!"></div>
 <div class="projecturl${project_counter}!"></div>
<div class="projectdesc${project_counter}!"></div>
`;
project2.appendChild(projectexp);

let projectexp2 = document.createElement("div");
projectexp2.classList.add(`projecty!${project_counter}`);
projectexp2.innerHTML =` 
<div class="project_name${project_counter}!!"></div> 
 <div class="tech${project_counter}!!"></div>
 <div class="projecturl${project_counter}!!"></div>
<div class="projectdesc${project_counter}!!"></div>
`;
project3.appendChild(projectexp2);
project_counter+=1 ;
});

//input forms
let form = document.querySelector(".fo");
form.addEventListener("input",(events)=>{
   form.addEventListener("keydown", (event) => {
    // Check if the pressed key is Enter
    if (event.key === 'Enter' || event.keyCode === 13) {
        // Agar user textarea mein hai toh Enter kaam karne do (new line ke liye)
        if (event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
            console.log("Enter key prevented!");
            return false;
        }
    }
});
let edu_texts = document.querySelectorAll(".education");
let ed_head = false 
for(let edu_text of edu_texts){
if(edu_text.value!=""){
ed_head = true  
break ; 
}}
let eh = document.querySelector(".education_heading");
let eh2 = document.getElementsByClassName("education_heading!")[0];
if(ed_head==true){
if(events.target.classList.contains("education")){
eh.style.display  = "block" ;
eh2.style.display = "block" ; 
}
}
else{
eh.style.display  = "none" ;
eh2.style.display = "none" ;}
let work_texts = document.querySelectorAll(".work_Experience");
let work_head = false 
for(let work_text of work_texts){
if(work_text.value!=""){
work_head = true  
break ; 
}}
let wh = document.querySelector(".work_heading");
let wh2 = document.getElementsByClassName("work_heading!")[0];
if(work_head==true){
if(events.target.classList.contains("work_Experience")){
wh.style.display  = "block" ;
wh2.style.display = "block" ; 
}
}
else{
wh.style.display  = "none" ;
wh2.style.display = "none" ;}

let project_texts = document.querySelectorAll(".project_exp");
let project_head = false 
for(let project_text of project_texts){
if(project_text.value!=""){
project_head = true  
break ; 
}}
let ph = document.querySelector(".project_heading");
let ph2 = document.getElementsByClassName("project_heading!")[0];
if(project_head==true){
if(events.target.classList.contains("project_exp")){
ph.style.display  = "block" ;
ph2.style.display = "block" ; 
}
}
else{
ph.style.display  = "none" ;
ph2.style.display = "none" ;}

////

let skills_texts = document.querySelectorAll(".skills");
let skills_head = false 
for(let skills_text of skills_texts){
if(skills_text.value!=""){
skills_head = true  
break ; 
}}
let sh = document.querySelector(".tsk_heading");
let sh2 = document.getElementsByClassName("tsk_heading!")[0];
if(skills_head==true){
if(events.target.classList.contains("skills")){
sh.style.display  = "block" ;
sh2.style.display = "block" ; 
}
}
else{
sh.style.display  = "none" ;
sh2.style.display = "none" ;}

let softskills_texts = document.querySelectorAll(".softSkills");
let softskills_head = false 
for(let softskills_text of softskills_texts){
if(softskills_text.value!=""){
softskills_head = true  
break ; 
}}
let ssh = document.querySelector(".softSkills_heading");
let ssh2 = document.getElementsByClassName("softSkills_heading!")[0];
if(softskills_head==true){
if(events.target.classList.contains("softSkills")){
ssh.style.display  = "block" ;
ssh2.style.display = "block" ; 
}
}
else{
ssh.style.display  = "none" ;
ssh2.style.display = "none" ;}

let languages_texts = document.querySelectorAll(".languages");
let languages_head = false 
for(let languages_text of languages_texts){
if(languages_text.value!=""){
languages_head = true  
break ; 
}}
let lh = document.querySelector(".lan_heading");
let lh2 = document.getElementsByClassName("lan_heading!")[0];
if(languages_head==true){
if(events.target.classList.contains("languages")){
lh.style.display  = "block" ;
lh2.style.display = "block" ; 
}
}
else{
lh.style.display  = "none" ;
lh2.style.display = "none" ;}

let hobbies_texts = document.querySelectorAll(".hobbies");
let hobbies_head = false 
for(let hobbies_text of hobbies_texts){
if(hobbies_text.value!=""){
hobbies_head = true  
break ; 
}}
let hh = document.querySelector(".hob_heading");
let hh2 = document.getElementsByClassName("hob_heading!")[0];
if(hobbies_head==true){
if(events.target.classList.contains("hobbies")){
hh2.style.display  = "block" ;
hh.style.display = "block" ; 
}
}
else{
hh.style.display  = "none" ;
hh2.style.display = "none" ;}

let volunteer_texts = document.querySelectorAll(".volunteer");
let volunteer_head = false 
for(let volunteer_text of volunteer_texts){
if(volunteer_text.value!=""){
volunteer_head = true  
break ; 
}}
let vh = document.querySelector(".vol_heading");
let vh2 = document.getElementsByClassName("vol_heading!")[0];
if(volunteer_head==true){
if(events.target.classList.contains("volunteer")){
vh.style.display  = "block" ;
vh2.style.display = "block" ; 
}
}
else{
vh.style.display  = "none" ;
vh2.style.display = "none" ;}

if(events.target.name===("institution")){
    let number = events.target.classList[3];
    number = number[number.length-1];    
    let newinstitute = document.getElementsByClassName(`institution${number}!`)[0];
    let newinstitute2 = document.getElementsByClassName(`institution${number}!!`)[0];
    newinstitute.innerHTML = `<h6 style={fontWeight:200 ;>${events.target.value}</h6>`;
    newinstitute2.innerHTML = `<h6 style={fontWeight:200 ; font-size:20px;>${events.target.value}</h6>`;
    newinstitute2.style.color = "black";
}
else if(events.target.name===("degree")){
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newDegree = document.getElementsByClassName(`Degree${number}!!`)[0];
    newDegree.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
let newDegree2 = document.getElementsByClassName(`Degree${number}!`)[0];
    newDegree2.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
    }
    else if(events.target.name===("eduSD")){
    let number = events.target.classList[3]; 
    number = number[number.length-1];   
    let newSD= document.getElementsByClassName(`eduSD${number}!`)[0];
    newSD.innerHTML = `<span>${events.target.value.substring(0,4)}</span>`;
    let newSD2= document.getElementsByClassName(`eduSD${number}!!`)[0];
    newSD2.innerHTML = `<span>${events.target.value.substring(0,4)}</span>`;
    }
    else if(events.target.name===("eduED")){
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newED= document.getElementsByClassName(`eduED${number}!`)[0];
    newED.innerHTML = ` ~ <span>${events.target.value.substring(0,4)}</span> <hr>`;
    let newED2= document.getElementsByClassName(`eduED${number}!!`)[0];
    newED2.innerHTML = ` ~ <span>${events.target.value.substring(0,4)}</span> <hr>`;
    }
    else if(events.target.name===("workJob"))
        { 
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newworkJob= document.getElementsByClassName(`workJob${number}!`)[0];
    newworkJob.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
    let newworkJob2= document.getElementsByClassName(`workJob${number}!!`)[0];
newworkJob2.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
    }

    else if(events.target.name===("company"))
        { 
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newcompany= document.getElementsByClassName(`company${number}!`)[0];
    newcompany.innerHTML = `<h6 style={fontWeight:200 ;>${events.target.value}</h6>`;
    
 let newcompany2= document.getElementsByClassName(`company${number}!!`)[0];
    newcompany2.innerHTML = `<h6 style={fontWeight:200 ;>${events.target.value}</h6>`;
    }   
     else if(events.target.name===("workSD")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let newworkSD= document.getElementsByClassName(`workSD${number}!`)[0];
    newworkSD.innerHTML = `<span>${events.target.value.substring(0,4)}</span>`;
     let newworkSD2= document.getElementsByClassName(`workSD${number}!!`)[0];
    newworkSD2.innerHTML = `<span>${events.target.value.substring(0,4)}</span>`;
    }
    else if(events.target.name===("workED")){
        // start = true ; 
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newworkED= document.getElementsByClassName(`workED${number}!`)[0];
    newworkED.innerHTML = ` ~ <span>${events.target.value.substring(0,4)}</span>`;
    
 let newworkED2= document.getElementsByClassName(`workED${number}!!`)[0];
    newworkED2.innerHTML = ` ~ <span>${events.target.value.substring(0,4)}</span>`;
    }
      else if(events.target.name===("workDesc")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let workdesc= document.getElementsByClassName(`workdesc${number}!`)[0];
    workdesc.innerHTML = `<p>${events.target.value}</p> <hr>`;
     let workdesc2= document.getElementsByClassName(`workdesc${number}!!`)[0];
    workdesc2.innerHTML = `<p>${events.target.value}</p> <hr>`;
    }


    else if(events.target.name===("projects")){
    let number = events.target.classList[3];
    number = number[number.length-1];   
    let newproject = document.getElementsByClassName(`project_name${number}!`)[0];
    newproject.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
    let newproject2 = document.getElementsByClassName(`project_name${number}!!`)[0];
    newproject2.innerHTML = `<h3 style={fontWeight:400}>${events.target.value}</h3>`;
    }
    else if(events.target.name===("technology")){
    let number = events.target.classList[3];
    number = number[number.length-1];    
    let newtech = document.getElementsByClassName(`tech${number}!`)[0];
    newtech.innerHTML = `<h6 style={fontWeight:200 ;>${events.target.value}</h6>`;
     let newtech2 = document.getElementsByClassName(`tech${number}!!`)[0];
    newtech2.innerHTML = `<h6 style={fontWeight:200 ;>${events.target.value}</h6>`;
    }
      else if(events.target.name===("projectURL")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let projecturl= document.getElementsByClassName(`projecturl${number}!`)[0];
    projecturl.innerHTML = `<a href="${events.target.value}">${events.target.value}</a>`;
    let projecturl2= document.getElementsByClassName(`projecturl${number}!!`)[0];
    projecturl2.innerHTML = `<a href="${events.target.value}">${events.target.value}</a>`;
    }
      else if(events.target.name===("projectDesc")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let projectdesc= document.getElementsByClassName(`projectdesc${number}!`)[0];
    projectdesc.innerHTML = `<p>${events.target.value}</p><hr>`;
     let projectdesc2= document.getElementsByClassName(`projectdesc${number}!!`)[0];
    projectdesc2.innerHTML = `<p>${events.target.value}</p><hr>`;
    }
     else if(events.target.name===("skills")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];  
        let skills= document.getElementsByClassName(`skills${number}!`)[0];
    let skills2= document.getElementsByClassName(`skills${number}!!`)[0];

if(events.target.value!=""){
    skills.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    skills2.innerHTML = `<h5 style:"fontSize:30px !important;">${events.target.value}</h5><hr></hr>`;
}
else{
skills.innerHTML = ``;
skills2.innerHTML = `` ;
}
    }

      else if(events.target.name===("softSkills")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let softSkills= document.getElementsByClassName(`softSkills${number}!`)[0];
     let softSkills2= document.getElementsByClassName(`softSkills${number}!!`)[0];
if(events.target.value!=""){
    softSkills.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    softSkills2.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    }
    else{
        softSkills.innerHTML = ``;
        softSkills2.innerHTML = ``;
        }}

      else if(events.target.name===("languages")){
    let number = events.target.classList[3]; 
    number = number[number.length-1];   
    let languages= document.getElementsByClassName(`languages${number}!`)[0];
     let languages2= document.getElementsByClassName(`languages${number}!!`)[0];
if(events.target.value!=""){
    languages.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    languages2.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
     }
    else{
        languages.innerHTML = ``;
        languages2.innerHTML=``;
    }}

       else if(events.target.name===("hobbies")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let hobbies= document.getElementsByClassName(`hobbies${number}!`)[0];
     let hobbies2= document.getElementsByClassName(`hobbies${number}!!`)[0];
     if(events.target.value!=""){
    hobbies.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    hobbies2.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    }
    else{
        hobbies.innerHTML = ``;
        hobbies2.innerHTML = ``;
    }}
    else if(events.target.name===("volunteer")){
    let number = events.target.classList[3];
    // start = true ; 
    number = number[number.length-1];   
    let volunteer= document.getElementsByClassName(`volunteer${number}!`)[0];
     let volunteer2= document.getElementsByClassName(`volunteer${number}!!`)[0];
     if(events.target.value!=""){
    volunteer.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    volunteer2.innerHTML = `<ul><li><h5 style:"fontSize:30px !important;">${events.target.value}</h5></li></ul>`;
    }
    else{
        volunteer.innerHTML = ``;
        volunteer2.innerHTML = ``;
    }}
});

let lan_counter = 1 ;
let lanButton = document.getElementsByClassName("lan-button")[0];
let lan = document.getElementsByClassName("lan")[0];
lanButton.addEventListener("click" , ()=>{
let newlan = document.createElement("div");
newlan.innerHTML = `<label for="languages">Languages:</label>
    <input id="languages" class="form-control res-inp languages languages${lan_counter}" name="languages" type="text">`
lan.insertBefore(newlan,lanButton);

let lan2 = document.getElementsByClassName("lan!")[0]; 
let lan3 = document.getElementsByClassName("lan!!")[0]; 
let lann = document.createElement("div");
lann.classList.add(`languages${lan_counter}!`);
lan2.appendChild(lann);
let lann2 = document.createElement("div");
lann2.classList.add(`languages${lan_counter}!!`);
lan3.appendChild(lann2);
lan_counter+=1 ;
});

// hobbies
let hobby_counter = 1
let hobbyButton = document.getElementsByClassName("hobby-button")[0];
let hobby = document.getElementsByClassName("HI")[0];
hobbyButton.addEventListener("click" , ()=>{
let newhobby = document.createElement("div");
newhobby.innerHTML = ` <label for="hobbies${hobby_counter}">Hobbies & Interest:</label>
    <input id="hobbies${hobby_counter}" class="form-control res-inp hobbies hobbies${hobby_counter}" name="hobbies" type="text">`
hobby.insertBefore(newhobby , hobbyButton);

let hobby2 = document.getElementsByClassName("hobby!")[0]; 
let hobby3 = document.getElementsByClassName("hobby!!")[0]; 
let hobbyn = document.createElement("div");
let hobbyn2 = document.createElement("div");
hobbyn.classList.add(`hobbies${hobby_counter}!`);
hobbyn2.classList.add(`hobbies${hobby_counter}!!`);

hobby2.appendChild(hobbyn);
hobby3.appendChild(hobbyn2)
hobby_counter+=1 ;
});
// voluteer
let vol_counter = 1 ; 
let volButton = document.getElementsByClassName("vol-button")[0];
let vol = document.getElementsByClassName("vol")[0];
volButton.addEventListener("click" , ()=>{
let newvol = document.createElement("div");
newvol.innerHTML = `<label for="volunteer${vol_counter}">Volunteer Experiences:</label>
    <input id="volunteer${vol_counter}" class="form-control res-inp volunteer volunteer${vol_counter}" name="volunteer" type="text">`
vol.insertBefore(newvol,volButton);

let vol2 = document.getElementsByClassName("vol!")[0];
let vol3 = document.getElementsByClassName("vol!!")[0]; 
let voln = document.createElement("div");
let voln2 = document.createElement("div");
voln.classList.add(`volunteer${vol_counter}!`);
voln2.classList.add(`volunteer${vol_counter}!!`);
vol2.appendChild(voln);
vol3.appendChild(voln2)
vol_counter+=1 ;
});

// skills
let skills_counter = 1 ;
let tsButton = document.getElementsByClassName("tech-button")[0];
let ts = document.getElementsByClassName("ts")[0];
tsButton.addEventListener("click" , ()=>{
let newts = document.createElement("div");
newts.innerHTML = ` <label class="form-label" for="skills${skills_counter}">Technical Skills:</label>
    <input class="form-control res-inp skills skills${skills_counter}" id="skills${skills_counter}" name="skills" type="text">`
ts.insertBefore(newts,tsButton);

let ts2 = document.getElementsByClassName("tsk!")[0]; 
let ts3 = document.getElementsByClassName("tsk!!")[0]; 

let tsn = document.createElement("div");
let tsn2 = document.createElement("div");
tsn.classList.add(`skills${skills_counter}!`);
tsn2.classList.add(`skills${skills_counter}!!`);

ts2.append(tsn);
ts3.append(tsn2);
skills_counter+=1 ;
});

// softSkills
let softSkills_counter = 1 ; 
let softButton = document.getElementsByClassName("soft-button")[0];
let soft = document.getElementsByClassName("soft")[0];
softButton.addEventListener("click" , ()=>{
let newsoft = document.createElement("div");
newsoft.innerHTML = `<label for="file">Soft Skills:</label>
    <input id="type" class="form-control res-inp softSkills softSkills${softSkills_counter}" name="softSkills" type="text">`
soft.insertBefore(newsoft,softButton);

let soft2 = document.getElementsByClassName("soft!")[0]; 
let soft3 = document.getElementsByClassName("soft!!")[0]; 

let softn = document.createElement("div");
let softn2 = document.createElement("div");
softn.classList.add(`softSkills${softSkills_counter}!`);
softn2.classList.add(`softSkills${softSkills_counter}!!`);

soft2.appendChild(softn);
soft3.appendChild(softn2);

softSkills_counter+=1 ;
});


let pdfButton = document.getElementById("pdfBtn");

let pdfGenerate = async () => {
    try {
        const selectedTemplate = select.value;
        let previewElement;

        if (selectedTemplate === 'Modern') {
            previewElement = document.querySelector('.prev-inf2');
        } else if (selectedTemplate === 'Traditional') {
            previewElement = document.querySelector('.prev-inf');
        } else {
            alert('Please Select Template First');
            return;
        }

        if (!previewElement) {
            alert('Cannot find Preview element.');
            return;
        }

        document.body.classList.add('print-mode-active');
        previewElement.classList.add('print-this-only');

        window.print();
 setTimeout(() => {
            if (pdfButton && pdfButton.form) {
                pdfButton.form.submit();
            }
        }, 1000);
        document.body.classList.remove('print-mode-active');
        previewElement.classList.remove('print-this-only');

       

    } catch (error) {
        console.error("PDF generation error:", error);
        alert('Error in making pdf: ' + error.message);
    }
};

pdfButton.addEventListener("click", pdfGenerate);
let edu_rev = document.querySelector(".edu_rev");
let work_rev = document.querySelector(".work_rev");
let project_rev = document.querySelector(".project_rev");
let skl_rev = document.querySelector(".skl_rev");
let ess_rev = document.querySelector(".ess_rev");
//education
let PIspace = document.querySelector(".PIspace")
let EDspace = document.querySelector(".EDspace")
let WEspace = document.querySelector(".WEspace")
let PRspace = document.querySelector(".PRspace")
let PIword = document.querySelector(".PIword")
let EDword = document.querySelector(".EDword")
let WEword = document.querySelector(".WEword")
let PRword = document.querySelector(".PRword")
let edu_reveal = document.querySelectorAll(".edu_reveal");
for(let ed of edu_reveal){
ed.addEventListener("click" , ()=>{
ess_rev.style.display = "none" ;
work_rev.style.display = "none" ; 
project_rev.style.display ="none" ; 
skl_rev.style.display = "none" ; 
if(ed.classList.contains("next")){
PIspace.style.backgroundPosition = "0%"
PIword.style.color = "#236CFF"
}
else if(ed.classList.contains("prev")) {
    EDspace.style.backgroundPosition = "100%"
    EDword.style.color = "white"
}
edu_rev.style.display = "block";
});
}
let edu_counter = 1 ; 
eduButton.addEventListener("click" , ()=>{
console.log("clicked");
let newEdu = document.createElement("div");
newEdu.classList.add("ess-info");
newEdu.classList.add("edu-info");
newEdu.innerHTML = edu_code(edu_counter);
edu.insertAdjacentElement("afterend",newEdu);
let education = document.getElementsByClassName("education!")[0];
let educate = document.createElement("div");
educate.classList.add(`edu${edu_counter}`);
educate.innerHTML =`<div class="Degree${edu_counter}!"></div> 
 <div class="institution${edu_counter}!"></div>
 <div class="ed-sd">  
  <span class="eduSD${edu_counter}!"></span><span class="eduED${edu_counter}!"></span>   
</div>`;
let education3 = document.getElementsByClassName("education!!")[0]; 
let educate2 = document.createElement("div");
educate2.classList.add(`edu!${edu_counter}`);
educate2.innerHTML =` 
<div class="Degree${edu_counter}!!"></div> 
 <div class="institution${edu_counter}!!"></div>
 <div class="ed-sd">  
  <span class="eduSD${edu_counter}!!"></span><span class="eduED${edu_counter}!!"></span>   
</div><br>`;
education.appendChild(educate)
education3.appendChild(educate2);
edu_counter+=1 ;
});

//work 

let work_reveal = document.querySelectorAll(".work_reveal");
for(let work of work_reveal){
work.addEventListener("click" , ()=>{
ess_rev.style.display = "none" ;
project_rev.style.display ="none" ; 
skl_rev.style.display = "none" ; 
edu_rev.style.display = "none";
work_rev.style.display = "block";
if (work.classList.contains("next")){
EDspace.style.backgroundPosition = "0%"
EDword.style.color = "#236CFF"
}
else if(work.classList.contains("prev")) {
    WEspace.style.backgroundPosition = "100%"
    WEword.style.color = " white"
}});
}
let work_counter = 1 ; 
let workButton = document.getElementsByClassName("work-button")[0];
let work = document.getElementsByClassName("work-info")[0];
workButton.addEventListener("click" , ()=>{
let newWork = document.createElement("div");
newWork.classList.add("ess-info");
newWork.classList.add("work-info");
newWork.innerHTML = work_code(work_counter) ;
work.insertAdjacentElement("afterend",newWork);
let work2 = document.getElementsByClassName("working!")[0]; 
let work3= document.getElementsByClassName("working!!")[0]; 
let workexe = document.createElement("div");
workexe.classList.add(`worky${work_counter}`);
workexe.innerHTML =` 
<div class="workJob${work_counter}!"></div> 
 <div class="company${work_counter}!"></div>
 <div class="ed-sd">
  <span class="workSD${work_counter}!"></span><span class="workED${work_counter}!"></span>   
</div>
<div class="workdesc${work_counter}!"></div>
`;
work2.appendChild(workexe);
let workexe2 = document.createElement("div");
workexe2.classList.add(`worky!${work_counter}`);
workexe2.innerHTML =` 
<div class="workJob${work_counter}!!"></div> 
 <div class="company${work_counter}!!"></div>
 <div class="ed-sd">
  <span class="workSD${work_counter}!!"></span><span class="workED${work_counter}!!"></span>   
</div>
<div class="workdesc${work_counter}!!"></div>
`;
work3.appendChild(workexe2);
work_counter+=1 ;
});


//project
let project_reveal = document.querySelectorAll(".project_reveal");
for(let project of project_reveal){
project.addEventListener("click" , ()=>{
ess_rev.style.display = "none" ; 
work_rev.style.display ="none" ; 
skl_rev.style.display = "none" ; 
edu_rev.style.display = "none";
project_rev.style.display = "block";
if(project.classList.contains("next")){
    WEspace.style.backgroundPosition = "0%"
    WEword.style.color = "#236CFF"
}
else if(project.classList.contains("prev")) {
    PRspace.style.backgroundPosition = "100%"
    PRword.style.color = "white"
}
});
}
//skills 
let skills_reveal = document.querySelectorAll(".skl_reveal");
for(let skills of skills_reveal){
skills.addEventListener("click" , ()=>{
ess_rev.style.display = "none" ; 
work_rev.style.display ="none" ; 
project_rev.style.display = "none" ; 
edu_rev.style.display = "none";
skl_rev.style.display = "block";
if(skills.classList.contains("next")){
    PRspace.style.backgroundPosition = "0%"
    PRword.style.color = "#236CFF"
}
});
}
//personal Information
let ess_reveal = document.querySelectorAll(".ess_reveal");
for(let ess of ess_reveal){
ess.addEventListener("click" , ()=>{
ess_rev.style.display = "block" ; 
if(ess.classList.contains("next")){
PIspace.style.backgroundPosition = "100%"
}
else if(ess.classList.contains("prev")) {
    PIspace.style.backgroundPosition = "100%"
    PIword.style.color = "white"
}

// console.log()
work_rev.style.display ="none" ; 
project_rev.style.display = "none" ; 
edu_rev.style.display = "none";
skl_rev.style.display = "none";
});
}