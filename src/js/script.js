/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200, */
        /* adaptiveHeight: true, */
/*         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
      });
  }); */

  var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: true,
    navPosition: 'button',
    controls: false,
    responsive: {
      768: {
        nav: false
      }
    }
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });