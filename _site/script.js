$(document).ready(function() {
  var item = $('#logo');
  var body = $(document.body);
  var bodyHeight = body.height();

  $(window).scroll(function () {
      item.css({
          'transform': 'rotate(' + (body.scrollTop() / bodyHeight * 3) + 'deg)'
      });
  });
  $('.projects').hide();
  $('.projectslink').on('click', function() {
    $('.info').hide();
    $('.projects').fadeIn(300);
  })
  $('.home').on('click', function() {
    $('.info').fadeIn(300);
    $('.projects').hide();
  })
});