$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    $('#home').on('click', () => {
          $('html,body').animate({
            scrollTop: 0
          },500);
        });
    
    $('a[href*="#"]').on('click',function(e){
          $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
          },500);
          e.preventDefault();
        });
          
    // $('.navbar-nav>li>a').on('click', function(){
    //   $('.navbar-collapse').collapse('hide');
    //   });
      $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
      });

    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      console.log(scrollbarLocation);
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 100;
    
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active'); 
        }
        else
        {
            $(this).parent().removeClass('active');
        }
      })
      
    })
    
  })