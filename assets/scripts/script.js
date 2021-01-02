
addEventListener("load", function () {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
}
const navSlide = () => {
  const nav2 = document.querySelector('.nav2');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu li')
  nav2.addEventListener('click',()=>{
      nav.classList.toggle('nav-active')
       //Animate links
      navLinks.forEach((link,index) =>{
          link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 1}s`;
      });
      nav2.classList.toggle('toggle')
  });

 
 
} 

navSlide();