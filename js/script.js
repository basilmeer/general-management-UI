$(document).ready(function() {
  $('#view-inventory').hide();
  $('#add-inventory').hide();
  $('#view-booking').hide();
  $('#add-booking').hide();
  $('#view-invoices').hide();
  $('#add-invoices').hide();
  $('#view-invoices').hide();
  $('#add-invoices').hide();
  $('#view-products').hide();
  $('#add-products').hide();

  $('#inventory').click(function(){
    $('#add-inventory').slideToggle('slow');
    $('#view-inventory').slideToggle('slow');
  });

  $('#booking').click(function() {
    $('#add-booking').slideToggle('slow');
    $('#view-booking').slideToggle('slow');
  });

  $('#invoices').click(function() {
    $('#add-invoices').slideToggle('slow');
    $('#view-invoices').slideToggle('slow');
  });


  $('#products').click(function() {
    $('#add-products').slideToggle('slow');
    $('#view-products').slideToggle('slow');
  });
});
