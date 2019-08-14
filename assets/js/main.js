$(document).ready(function(){
  $('#summernote').summernote({
  	height:300
  });
  $('form').on('submit', function(e){
      e.preventDefault();
     return false;
  })

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

  /* Select Disable */
  $('.work').on('click', function(){
    if($(".work").is(":checked")){
        $('.checkbox select').attr('disabled', true)
        $(".disable").find('select').css({background:"#CCC"})
    }else{
        $(".disable").find('select').css({background:"none"})
        $('.checkbox select').attr('disabled', false);
    }
      
  })

  /* Work Experience */
  $('.allow-work').on('click', function(){
      $('.second-page.p-2').find('input[type="text"]').each((i, el)=>{
         $(el).val('')
      })
  })
});