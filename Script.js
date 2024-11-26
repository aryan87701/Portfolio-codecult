document.querySelectorAll('.nav-link').forEach(link =>{
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        })
        document.querySelectorAll('.nav-link').forEach(nav =>{nav.classList.remove('clicken')})
link.classList.add('clicken');})
})

const offmenu = document.querySelector('.nav-links')    
const hamburger = document.querySelector('#hamburger')
hamburger.addEventListener("click", () => {
    console.log('clicked');
    hamburger.classList.toggle('open');
    offmenu.classList.toggle('open');
    
})

