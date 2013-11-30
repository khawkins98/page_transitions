jQuery(document).ready(function($) {

  // Mobile transition simulation
  $(document).ready(function() {

  	$(this).find(".main-container").each(function(){
      $(this).addClass("active transition");
      $('.spinner-css').toggle();
  	})

    $(".form-submit").click(function(event){
//      event.preventDefault();
      $('.spinner-css').toggle();
      $(".main-container").addClass("out").delay(10000).queue(function(next){
        $(this).removeClass("out");
        next();
      });      
//      linkLocation = this.href;
//      redirectPage(); 
    });
         
    $(".page-transition").click(function(event){
      $('.spinner-css').toggle();
      $(".main-container").addClass("out").delay(7000).queue(function(next){
        $(this).removeClass("out");
        next();
      });      
    });

    $(".menu.nav a").click(function(event){
      $('.spinner-css').toggle();
      $(".main-container").addClass("out").delay(7000).queue(function(next){
        $(this).removeClass("out");
        next();
      });      
    });


    function redirectPage() {
      window.location = linkLocation;
    }

  });


});

