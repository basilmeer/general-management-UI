$(document).ready(function() {
  $('#view-inventory').hide();
  $('#add-inventory').hide();
  $('#sale').click(function(){
    $('#add-inv').slideToggle('slow');
    $('#view-inv').slideToggle('slow');
  })
  $('#booking').click(function() {
    $('add-booking').slideToggle('slow');
    $('view-booking').slideToggle('slow');
  })
})
