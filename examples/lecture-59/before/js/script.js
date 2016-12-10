$(function () {

  $("#navbarToggle").click(function(e) {
        $("#collapsable-nav").toggle();
        e.stopPropagation();
  });

  $(document).click(function(e) {
    if (!$(e.target).is('#collapsable-nav, #collapsable-nav *')) {
          var screenWidth = window.innerWidth;
          if(screenWidth < 768) {
            $("#collapsable-nav").hide('slow');
          }
    }
  });


  // $("#navbarToggle").blur(function (event) {
  //     var screenWidth = window.innerWidth;
  //     if(screenWidth < 768) {
  //       $("#collapsable-nav").collapse("hide");
  //     }
  // });

  // $(document).not("#navbarToggle").click(function() {
  //   var screenWidth = window.innerWidth;
  //   if(screenWidth < 768) {
  //     $("#collapsable-nav").hide();
  //   }
  // });

  // $("#navbarToggle").click(function(e) {
  //       $("#collapsable-nav").toggle();
  //       e.stopPropagation();
  // });
  //
  // $(document).click(function(e) {
  //   if (!$(e.target).is('#collapsable-nav, #collapsable-nav *')) {
  //           $("#collapsable-nav").hide();
  //   }
  // });

  // $("#navbarToggle").focusout(function() {
  //     $('#collapsable-nav').animate({
  //         display:"none"
  //     });
  // });

});
