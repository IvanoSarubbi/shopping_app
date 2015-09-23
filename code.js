$(document).ready(function(){

	$('.button').click(function(){



	var toAdd = $('input[name=checkListItem]').val();
        $(".items").append("<h3>" + toAdd + "</h3>");



	});

 $(document).on('click', 'h3', function(){
        
        $(this).remove();
    });

});