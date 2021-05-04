$(document).ready(function(){
  backToTop()
})

function backToTop(){
  $(".backToTop").click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  })
}



