const io=new IntersectionObserver((entries)=>{entries.forEach((e)=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.14});document.querySelectorAll('.section,.reveal').forEach((el)=>io.observe(el));
const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');menuBtn?.addEventListener('click',()=>nav.classList.toggle('show'));
