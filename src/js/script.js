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
      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');  
      });

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });

      //Валидация
      
      function validateForms(form){
        $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required:true,
            email:true
          }
        },
        messages: {
          name: {
            required: "Введите Ваше имя",
            minlength: jQuery.validator.format("Минимум {0} символов!")
          },
          phone: "Введите номер телефона",
          email: {
            required: "Введите Ваш е-майл",
            email: "Не правильный формат адреса"
          }
        }
      });
      }

      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      //маска телефона-удалить формат чисел y импут.
      $('input[name=phone]').mask("+7 (999) 999-99-99");

      //отправка данных на почту
      $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
          return;
        }
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
        });
        return false;
      });

  });
  })(jQuery);