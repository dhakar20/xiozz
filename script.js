```javascript id="2vh6c8"
// ===============================
// XIOZ TECH SCRIPT
// ===============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

if(nav.style.display === "flex"){

nav.style.display = "none";

}else{

nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.position = "absolute";
nav.style.top = "80px";
nav.style.right = "20px";
nav.style.background = "#151d2f";
nav.style.padding = "20px";
nav.style.borderRadius = "12px";

}

});

}

// ===============================
// Header Scroll Effect
// ===============================

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.padding = "15px 8%";
header.style.boxShadow =
"0 10px 20px rgba(0,0,0,0.3)";

}else{

header.style.padding = "20px 8%";
header.style.boxShadow = "none";

}

});

// ===============================
// Reveal Animation
// ===============================

const revealElements =
document.querySelectorAll(
".card,.stat-box,.hero-content,.cta"
);

function reveal(){

const windowHeight = window.innerHeight;

revealElements.forEach((el)=>{

const top =
el.getBoundingClientRect().top;

if(top < windowHeight - 100){

el.style.opacity = "1";
el.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach((el)=>{

el.style.opacity = "0";
el.style.transform =
"translateY(40px)";
el.style.transition =
"all 0.8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ===============================
// Active Navigation
// ===============================

const links =
document.querySelectorAll("nav a");

links.forEach(link=>{

if(
link.href === window.location.href
){

link.style.color = "#00bfff";

}

});

// ===============================
// Contact Form Validation
// ===============================

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.querySelector("#name");

const email =
document.querySelector("#email");

const message =
document.querySelector("#message");

if(
!name.value ||
!email.value ||
!message.value
){

alert(
"Please fill all fields."
);

return;

}

if(
!email.value.includes("@")
){

alert(
"Please enter a valid email."
);

return;

}

alert(
"Message sent successfully!"
);

form.reset();

}
);

}

// ===============================
// Counter Animation
// ===============================

const counters =
document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
parseInt(counter.innerText);

if(isNaN(target))
return;

let current =
+counter.getAttribute(
"data-count"
) || 0;

const increment =
target / 50;

if(current < target){

current += increment;

counter.innerText =
Math.ceil(current);

counter.setAttribute(
"data-count",
current
);

setTimeout(
updateCounter,
20
);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.background = "#00bfff";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// ===============================
// Console Branding
// ===============================

console.log(
"%cXIOZ TECH",
"color:#00bfff;font-size:24px;font-weight:bold;"
);

console.log(
"Building the Future with AI, Games and Software."
);
```
