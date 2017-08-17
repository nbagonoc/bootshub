$(document).ready(function(){
	$('#hs_cos_wrapper_post_body img').closest('h3').hide();
	$('#hs_cos_wrapper_post_body img').closest('span').hide();
	$('#hs_cos_wrapper_post_body img').hide();
	
	$('.topics').find('span:last').hide();
});

function filter(element) {
  var value = $(element).val();
  $('#fromList li a').each(function() {
    if (($(this).text().search(new RegExp(value, 'i')) > -1) && ($.trim($('.searchInput').val()) != "")) {
    $(this).closest('li').attr('class','');
    //$('#noResult').attr('class',' ');
    } else {
    $(this).closest('li').attr('class','hidden');
    //$('#noResult').attr('class','hidden');
    }
  });
}

$('.dropdown').on('mouseenter mouseleave click tap', function() {
  $(this).toggleClass("open");
});