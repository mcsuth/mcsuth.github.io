$(document).ready(function() {
  var item = $('#logo');
  var body = $(document.body);
  var bodyHeight = body.height();

  $(window).scroll(function () {
      item.css({
          'transform': 'rotate(' + (body.scrollTop() / bodyHeight * 3) + 'deg)'
      });
  });
  $('.projectslink').on('click', function() {
    $('.info').hide();
    $('.projects').fadeIn(300);
  })
  $('.home').on('click', function() {
    $('.info').fadeIn(300);
    $('.projects').hide();
  });
  $('.sentivestorinfo').hide();
  $('img.senti').on('click', function() {
    $('.sentivestorinfo').slideToggle();
  })
  $('.chartifyinfo').hide();
  $('img.chart').on('click', function() {
    $('.chartifyinfo').slideToggle();
  })
  $('.moviepop').hide();
  $('img.movie').on('click', function() {
    $('.moviepop').slideToggle();
  })
  $('.alertminow').hide();
  $('img.alert').on('click', function() {
    $('.alertminow').slideToggle();
  })
  $('.generalassembly').hide();
  $('img.general').on('click', function() {
    $('.generalassembly').slideToggle();
  })
});