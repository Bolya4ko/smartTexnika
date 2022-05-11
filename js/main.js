
$(function () {
  $('.menu__item-catalog').on('click', function () {
    $('.menu-button__catalog').toggleClass('menu-button--active');
  })

  let btnCategories = $('.menu-button__catalog');
  let btn = $('.menu__item-catalog');

  $(document).mouseup(function (e) {
    if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0) {
      btnCategories.removeClass('menu-button--active')
    }
  });


  $('.header__user-btn').on('click', function () {
    $('.user-box').toggleClass('user-box--active');
  })

  let btnMenu = $('.user-box');
  let btnLink = $('.header__user-btn');

  $(document).mouseup(function (e) {
    if (!btnMenu.is(e.target) && btnMenu.has(e.target).length === 0 && !btnLink.is(e.target) && btnLink.has(e.target).length === 0) {
      btnMenu.removeClass('user-box--active')
    }
  });





  $(function () {
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
    responsive: [{
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
        } else {
          $('.accardion-header').removeClass('active');
          $(this).toggleClass('active');
        }
      } else {
        $(this).toggleClass('active');
      }
      $(this).next('.accardion-body').not(':animated').slideToggle();
    })
  }
  accardion();

  let vacancies = function () {
    let data = $('.vacancies-accardion').attr('data-vacancies');

    $('.vacancies-accardion__header').on('click', function () {
      if (data === 'close') {
        $('.vacancies-accardion__body').slideUp();
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active');
        } else {
          $('.vacancies-accardion__header').removeClass('active');
          $(this).toggleClass('active');
        }
      } else {
        $(this).toggleClass('active');
      }
      $(this).next('.vacancies-accardion__body').not(':animated').slideToggle();
    })
  }
  vacancies();
  let shopping = function () {
    let data = $('.shopping-history__accardion').attr('data-vacancies');

    $('.shopping-history__accardion-header').on('click', function () {
      if (data === 'close') {
        $('.shopping-history__accardion-body').slideUp();
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active');
        } else {
          $('.shopping-history__accardion-header').removeClass('active');
          $(this).toggleClass('active');
        }
      } else {
        $(this).toggleClass('active');
      }
      $(this).next('.shopping-history__accardion-body').not(':animated').slideToggle();
    })
  }
  shopping();



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
    responsive: [{
      breakpoint: 530,
      settings: {
        arrows: false
      }
    }, ]
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

function updateInputs(data) {
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

function show_hide_password(target) {
  let input = document.getElementById('password-input');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}
show_hide_password(this);

function show_hide_password2(target) {
  let input = document.getElementById('password-input2');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}
show_hide_password(this);

function show_hide_password3(target) {
  let input = document.getElementById('password-input3');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}
show_hide_password(this);


function show_hide_password_popup(target) {
  let input_popup = document.getElementById('password_input_popup');
  if (input_popup.getAttribute('type') == 'password') {
    target.classList.add('view');
    input_popup.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input_popup.setAttribute('type', 'password');
  }
  return false;
}
show_hide_password_popup(this);

function show_hide_password_popup_register(target) {
  let input_popup_register = document.getElementById('password_register_input_popup');
  if (input_popup_register.getAttribute('type') == 'password') {
    target.classList.add('view');
    input_popup_register.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input_popup_register.setAttribute('type', 'password');
  }
  return false;
}
show_hide_password_popup_register(this);


const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('close_pop_up');
const popupOpen = document.getElementById('popup_open');
const popupLink = document.getElementById('popup_open_link');
const openActive = document.querySelector('.popup-register');
const popupEntrens = document.querySelector('.popup-register__link-entrens');
const closePopUpRegister = document.getElementById('close_pop_up-register');



openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popupOpen.classList.add('popup--active');
})

closePopUp.addEventListener('click', () => {
  popupOpen.classList.remove('popup--active');
})

popupLink.addEventListener('click', () => {
  popupOpen.classList.remove('popup--active');
  openActive.classList.add('open-active');
})

popupEntrens.addEventListener('click', () => {
  openActive.classList.remove('open-active');
  popupOpen.classList.add('popup--active');
})

closePopUpRegister.addEventListener('click', () => {
  openActive.classList.remove('open-active');
})