const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const body = document.getElementsByTagName('body');
const smallnav = document.getElementById('sm-navbar');
const close2 = document.getElementById('close2');

// detecting the page name 
const pagePath = window.location.pathname;

pageName = pagePath.split('/').pop(); // the file name that we're gonna compare to the value of href attribute 

for (let i=0; i < nav.childElementCount; i++) {
    if(nav.children[i].children[0].getAttribute('href') === pageName) {
        nav.children[i].children[0].classList.add('active');
}}

bar.addEventListener('click', ()=> {
    nav.classList.add('active');
    smallnav.classList.add('active');
})

close.addEventListener('click', ()=> {
    nav.classList.remove('active');
})

close2.addEventListener('click', ()=> {
    smallnav.classList.remove('active');
})

// closing the nav menu when we click outside of the opened nav menu
document.addEventListener('click', (event)=> {
    if(!(nav === event.target) && (event.target != bar) && !(smallnav === event.target)){
        nav.classList.remove('active');
        smallnav.classList.remove('active');
    }
});







