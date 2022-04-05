document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });


//Scroll View
document.getElementById("botonarriba").addEventListener("click", scrollUp);

function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if(currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0, currentScroll - (currentScroll / 5));
    buttonUp.style.transform = "scale(0)"
  }
}

buttonUp = document.getElementById("botonarriba");

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop;
  if(scroll > 300){
    buttonUp.style.transform = "scale(1)"
  }else if(scroll < 300){
    buttonUp.style.transform = "scale(0)"
  }
}