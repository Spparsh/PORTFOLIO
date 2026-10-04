const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const glow=document.getElementById('cursorGlow');window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const menu=document.getElementById('menuBtn'),links=document.getElementById('navLinks');menu.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
