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

  /* Input Disable */
  
  $('.check-1, .check-2, .check-3 ').on('click', function(){
    if($(this).is(":checked")){
      var _self = this;
        $('.p-7').find('input[type="text"]').each((i, el)=>{
            console.log( $(_self).attr('class'))

            if($(el).data('role') == $(_self).attr('class').match(/check-\d/)[0]){
                $(el).attr('disabled', false)
                $(el).css({background:"none"})
            }
            console.log(el)
        })
    }else{
      _self = this;
        $('.p-7').find('input[type="text"]').each((i, el)=>{
            if($(el).data('role') == $(_self).attr('class').match(/check-\d/)[0]){
                $(el).attr('disabled', true)
                $(el).css({background:"#CCC"})
            }
        })
    }
  })

  /* Work Experience */
  $('.allow-work').on('click', function(){
      $('.second-page.p-2').find('input[type="text"]').each((i, el)=>{
         $(el).val('')
      })
      $('.fourth-page.p-4').find('input[type="text"]').each((i, el)=>{
         $(el).val('')
      })
  })
});