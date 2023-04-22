const hamburgerMenu=document.querySelector('#navigation .nav-icon');
const navContent=document.querySelector('#nav-content');
const closeNbtn=document.querySelector('#nav-content .close-btn');
const links=document.querySelectorAll('#nav-content nav ul li a');
const scrollbtn=document.querySelector(".scroll-top");

if(scrollbtn){
    window.addEventListener('scroll',()=>{
        if(scrollY > window.innerHeight * 1.2){
            scrollbtn.style.display='flex'
        }else{
            scrollbtn.style.display='none'
        }
    });
    scrollbtn.addEventListener('click',()=>{
        window.scrollTo(0,0)
    })
}


hamburgerMenu.addEventListener('click',()=>{
    navContent.classList.add('show');
    document.body.style.overflow="hidden";
})

closeNbtn.addEventListener('click',()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
})
links.forEach( link=>{
    link.addEventListener('click',()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
    })
})