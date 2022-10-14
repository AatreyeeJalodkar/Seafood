$(document).ready(function() {
    $('.home_list li a').on('click', function () {
           $('.home_list li a').removeClass("active");
            $(this).addClass("active");
            var filer_data = $(this).attr('data_filter');
            $('.delicious_item > div').addClass("d-none").removeClass("d-block");
            $('div[data_filter_contant="' + filer_data + '"]').addClass("d-block").removeClass("d-none");
          });

          $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
        /**********|| Counter Start ||**********/
var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter_sec').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
 /**********|| Job js Start ||**********/  
       }); 