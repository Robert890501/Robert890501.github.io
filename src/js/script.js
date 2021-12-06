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

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.conteiner').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      
    
      function toggleSlede (item) {
        $(item).each(function(i) {
          $(this).on ('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      }
      toggleSlede ('.catalog-item__link');
      toggleSlede ('.catalog-item__back');

      //Modal
      $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
      });
  });
  })(jQuery);