// Parralax
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  if (wScroll > 460) {
    $('.information .social-media').addClass('scroll');
  } else {
    $('.information .social-media').removeClass('scroll');
  }
});

$(document).ready(function () {
  $('.web-information').on('click', function () {
    $('.fas').toggleClass('fa-angle-right');
    $('.fas').toggleClass('fa-angle-down');
    $('.content-info-web').toggleClass('show');
  });
});
