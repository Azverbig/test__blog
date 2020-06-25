 

 $( document ).ready(function() {
  $('.modal').on('click', function() {
  	var id_modal = $(this).attr('data-modal');
  
$('#'+id_modal).addClass('active');
 
  
});
  $('.modalka__exit3').on('click', function() {

$('.modalka__container').removeClass('active');
 
  
});
});

