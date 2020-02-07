$(document).ready(function() {

    function toggleSidebar() {
      $(".button").toggleClass("active");
      if( $("main").hasClass("move-to-top"))
      {
        $("main").removeClass("move-to-top")
         $("main").toggleClass("move-to-down");
      }
      else{
        $("main").removeClass("move-to-down");
         $("main").toggleClass("move-to-top");
      }
        $(".sidebar-item").toggleClass("active");
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
  
  });