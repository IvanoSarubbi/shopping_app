$(document).ready(function(){

	$('.button').click(function(){



	var toAdd = $('input[name=checkListItem]').val();
        $(".items").append("<div class='list'><h3>" + toAdd + "</h3></div>");



	});

 $(document).on('click', 'h3', function(){
        
        $(this).parent().remove();
    });

});