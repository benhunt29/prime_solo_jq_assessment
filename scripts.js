$(document).ready(function(){
	var $generateButtonRow = $('#generateButtonRow');

	$('#generateButton').on('click',function(e){
		$body = $('body').children().first();
		$body.append('<row>');
		
		
		$newRow = $body.children().last();
		$newRow.addClass('col-md-offset-4 col-md-12');
		$newRow.append('<div>');

		var $newDiv = $newRow.children().last();
		$newDiv.addClass('col-md-3');
		var numDivs = $body.children().length - 1;
		$newDiv.attr('id','newDiv'+numDivs);
		$newDiv.text('Line #' + numDivs);
		$newDiv.append('<button>');
		$newDiv.append('<button>');
		
		var $changeColorButton = $newDiv.children().first();
		var $removeButton = $newDiv.children().last();

		$changeColorButton.attr('class','changeColorButton');
		$changeColorButton.attr('id','colorButton' + numDivs);
		$changeColorButton.text('Change Color');

		$removeButton.attr('class','removeButton');
		$removeButton.text('Remove');

		
		$('.changeColorButton').on('click',function(e2){
			
			/*console.log($(e2.target.closest('div')));
			$(e2.target.closest('div')).toggleClass('colorMe');*/
			/*if($(this).parent().attr('class') == 'colorMe'){
				$(this).parent().removeClass('colorMe');
			}else{
				$(this).parent().addClass('colorMe');
			}*/
			var currentButtonID = '#'+$(this).attr('id');
			console.log(currentButtonID);
			$(currentButtonID).parent().toggleClass('colorMe');
			e2.preventDefault();
		});

		$('.removeButton').on('click',function(e3){
			$(this).parent().remove();
			e3.preventDefault();
		});
		
		e.preventDefault();
	});
	
});