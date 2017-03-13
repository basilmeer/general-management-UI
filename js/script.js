$(document).ready(function() {
  $('#view-inv').hide();
  $('#add-inv').hide();
  $('#sale').click(function(){
    $('#add-inv').slideToggle('slow');
    $('#view-inv').slideToggle('slow');
    console.log("Working");
  })
})
