let sect2 = document.getElementById('sect2');
let btn = document.getElementById('scrollV');
btn.addEventListener('click', ()=>{
	sect2.scrollIntoView({behavior: "smooth"});
})
let btn2 = document.getElementById('scrollProjLink');
btn2.addEventListener('click', ()=>{
	sect2.scrollIntoView({behavior: "smooth"});
})



let sect3 = document.getElementById('sect3');
let btn3 = document.getElementById('scrollContact');
btn3.addEventListener('click', ()=>{
	sect3.scrollIntoView({behavior: "smooth"});
})


let sect1 = document.getElementById('sect1');
let btn4 = document.getElementById('scrollHome');
btn4.addEventListener('click', ()=>{
	sect1.scrollIntoView({behavior: "smooth"});
})
