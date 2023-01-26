// const target = document.querySelectorAll('[data-anime]');
// const animationClass = 'animate';

// function animeScroll() {
//     const windowTop = window.pageYOffset;
//     console.log()
// }

// window.addEventListener('scroll', function() {
//     animeScroll();
// })




$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#img-logo').addClass('menor');
  } else {
    $('#img-logo').removeClass('menor');
  }
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 30) {
    $('.cabecalho').addClass('menor');
  } else {
    $('.cabecalho').removeClass('menor');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 30) {
    $('.menu-container').addClass('visivel');
  } else {
    $('.menu-container').removeClass('visivel');
  }
});

// POPUP LOGIN
document.querySelector("#show-login").addEventListener("click",function(){document.querySelector(".popup").classList.add("active");});
document.querySelector(".popup .close-btn").addEventListener("click",function(){document.querySelector(".popup").classList.remove("active");});