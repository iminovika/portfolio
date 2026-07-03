// Плавное появление блоков

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.card,.project-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});