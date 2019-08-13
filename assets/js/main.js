$(document).ready(function(){
  $('#summernote').summernote({
  	height:300
  });

  let currentPageNumber, nextPage;
  $('.btnd-next').on('click', function(){
  		currentPageNumber = $(this).attr('class').match(/\d/)[0];
  		nextPage = (Number(currentPageNumber) + 1)
  		
  		$('.p-'+currentPageNumber).fadeOut();
  		$('.p-'+ nextPage).fadeIn();
  });

  $('.btnd-back').on('click', function(){
  		currentPageNumber = $(this).attr('class').match(/\d/)[0];
  		nextPage = (Number(currentPageNumber) - 1)

  		$('.p-'+currentPageNumber).fadeOut();
  		$('.p-'+ nextPage).fadeIn();
  });

});