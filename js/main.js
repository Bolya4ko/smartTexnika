$(function(){

  $(function() {
    $('.product-order__input').styler();
  });

  $('.slider__items').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    arrows: false
  });

  $('.top-sleder__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $("#rateYo").rateYo({

  });
  $("#rateYo2").rateYo({

  });
  $("#rateYo3").rateYo({

  });
  $("#rateYo4").rateYo({

  });

  let accardion = function () {
    let data = $('.filter__menu').attr('data-accardion');

    $('.accardion-header').on('click', function () {
         if (data === 'close') {
              $('.accardion-body').slideUp();
              if ($(this).hasClass('active')) {
                   $(this).toggleClass('active');
              }
              else {
                   $('.accardion-header').removeClass('active');
                   $(this).toggleClass('active');
              }
         }
         else {
              $(this).toggleClass('active');
         }
         $(this).next('.accardion-body').not(':animated').slideToggle();
    })
}
accardion();

  $(".catalog__inner-btn").on('click', function () {
    $('.catalog__filters').toggleClass('catalog__filters--active')
  })

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  $('.small-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.big-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    vertical: true,
    focusOnSelect: true
  });

  $('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.small-slider'
  });

  }); 

  var $range = $(".filter-price__input"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 32000,
    from = 3000,
    to = 17000;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 3000,
    to: 17000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});