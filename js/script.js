$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header__row').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$(document).ready(function() {
	$('.categories__point.categories__point_h a').hover(function(event) {
		$('.categories__heart').toggleClass('heart');
	});
});
$(document).ready(function() {
	$('.categories__point.categories__point_b a').hover(function(event) {
		$('.categories__bag').toggleClass('bag');
	});
});
$(document).ready(function() {
	$('.categories__point.categories__point_sheet a').hover(function(event) {
		$('.categories__sheet').toggleClass('sheet');
	});
});
$(document).ready(function() {
	$('.categories__point.categories__point_block a').hover(function(event) {
		$('.categories__block').toggleClass('block');
	});
});
$(document).ready(function() {
	$('.categories__point.categories__point_amb a').hover(function(event) {
		$('.categories__amb').toggleClass('amb');
	});
});
$(document).ready(function(){
	$('.gallery__slider').slick({
		slidesToShow:3
	});
});
$(document).ready(function(){
	$('.slider-mobile').slick({
		slidesToShow:1
	});
});

// if (max-width = 800px) {
// 		$('.gallery__slider').slick({
// 		slidesToShow:3
// 	});
// 	}

if ($(window).height() <= 800) {

    
	    $(document).ready(function(){
		$('.gallery__slider').slick({
			slidesToShow:1
		});
	});
}

$(document).ready(function(){
	$('.about-us__slider').slick({
		slidesToShow:1,
		dots:true,
	});
});



function ibg(){
	$.each($('.ibg'), function(index, val) {
	 if($(this).find('img').length>0){
	  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	 }
   });
 }

ibg();
