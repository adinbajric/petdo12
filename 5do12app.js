const navSlide = () =>{
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('active');
    })
}

navSlide();