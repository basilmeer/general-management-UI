$(document).ready(function() {
  $('#view-inventory').hide();
  $('#add-inventory').hide();
  $('#inventory').click(function(){
    $('#add-inventory').slideToggle('slow');
    $('#view-inventory').slideToggle('slow');
  });
  // $('#booking').click(function() {
  //   $('add-booking').slideToggle('slow');
  //   $('view-booking').slideToggle('slow');
  // })
});
