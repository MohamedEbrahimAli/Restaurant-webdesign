$(document).ready(function () {

  /* Nav btn Click Event */
  var clicked = false;
  var $header = $('header');
  $('.nav-btn').click(function () {
      var $this = $(this);
      if(!clicked) {
        clicked = true;
        $this.parent().toggleClass('active');
        setTimeout(function() {
            clicked = false;
        }, 1100);
      }
  });

    /*Document On Click Remove Class Active*/
    $(document).on('click', function (e) {
      var clickOver = $(e.target);
      if (!clickOver.closest('header').length && $('nav').hasClass('active') && !clicked) {
        $('nav').removeClass('active')
        setTimeout(function() {
            clicked = false;
        }, 1100);
      }
    });

    /*change Color And Background Nav When Scrool Down On Another Section */
    var $mainSection = $('.main-section')
    $(window).scroll(function () {
      if($(window).scrollTop() >= $mainSection.height() - 100) {
        $header.addClass('sticky');
      } else {
        $header.removeClass('sticky');
      }
    });
});
