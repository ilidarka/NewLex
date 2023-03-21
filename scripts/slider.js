window.onload = function() {
  renderSlider();
}

function renderSlider() {
  var swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
   });
}