// ON LOAD

$(document).ready(function(){
	$('.collapse').next().addClass('closed');
})


// REMOVE TRANSITION ON WINDOW RESIZE

$(window).resize(function(){
	$('*').addClass('no-transition');
});


// HOVER NEXT CLASS LIST

$('#nextclass').find('li').hover(function(){
	$(this).toggleClass('box-filled');
})


// VALUES LIST, SPLITTING, HOVER ANIMATION

const values = [
	'Follow your curiosities.',
	'Everything is an experiment. When you mess up, take note and try again.',
	'Be patient. Trust the process!',
	'Be open to coincidences.',
	'Make friends. Collaboration makes the work meaningful.',
	'Don’t be afraid to take up space.',
	'Manifest your desires to the fullest.',
	'Making things is fun! Take that fun seriously!'
]

for (var i = 0; i < values.length; i++) {
	for (var y = 0; y < values[i].length; y++) {
		// console.log(values[i][y])
		$('.valueitem' + i).append('<span class="hovercolour">' + values[i][y] + '</span>')
	}
}

$('.hovercolour').hover(function(){
	$(this).addClass('colourpink growtype');
	var expandedWidth = ($(this).width() * 0.3);
	$(this).parent().css({'width':'calc(100% + ' + expandedWidth + 'px','margin-left':'-' + expandedWidth / 2 + 'px'});
}, function(){
	$(this).removeClass('colourpink growtype');
	$(this).parent().css({'width':'calc(100%)','margin-left':'0px'});
})


// COLLAPSING BUTTON

$('.collapse').on('click', function(){
	if (!$(this).next().hasClass('open')) {
		$(this).next().removeClass('closed')
		$(this).next().addClass('open')
		$(this).addClass('button-open')
		$(this).removeClass('button-closed')
	} else {
		$(this).next().removeClass('open')
		$(this).next().addClass('closed')
		$(this).removeClass('button-open')
		$(this).addClass('button-closed')
	}
})




