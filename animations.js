$(document).ready(function(){
  // $('#char-count, #tweet-submit').hide();

  $('.tweet-compose').on("focusin", function(){
    $('.tweet-compose').animate({
      height: "5em"
    });
  });
  $('.tweet-compose').on("focusout", function(){
    $('.tweet-compose').animate({
      height: "2.5em"
    });
  });

  $("#char-count").on('keyup', function(event){
    var len = $(this).val().length;
    if(len >= 40){
      $(this).val($(this).val().substring(0, len-1));
    }
  });




});
