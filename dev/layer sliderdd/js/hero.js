$( document ).ready( function() {
    var $window = $( window ),
		hero = $( '#home > .hero' ),
		heroImg = $($('.hero-img')[0]),
		iHeight = 0,
		iScroll = window.pageYOffset,
		slides = hero.find('.slide'),
		nbSlides = slides.length,
		bullets = hero.find('.hero-bullets a'),
		currentSlide = 0,
		timerSlide = null,
		delayTime = 6000,
		transitionTime = 600;
		
	/** FULLSCREEN **/
	function fullScreenHero() {
		var heroHeight = Math.min( $window.height() - 50, heroImg.height() );
		
		if(heroHeight < 450){
			heroHeight = 450;	
		};
		
		iHeight = heroHeight;
		hero.height( heroHeight );
	};
	
	slides.each(function(i, elm){
		var oElm = $(elm).find('.slide-content'),
			iHeight = oElm.height();
			
		oElm.css('margin-bottom',(-iHeight/2));
	});
	
	iHeight = $window.height();
	hero.height( iHeight );
	
	/*LOAD IMAGE*/
	$('img.hero-replace').each(function(i, elm){
		var sSrc = $(elm).attr('data-src');
		
		$window.load(function(){
			$(elm).attr('src',sSrc);			  
		})
		
	});
	
	$window
		.on( 'resize', fullScreenHero )
		.on( 'load', fullScreenHero );
		
	window.crossRequestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
 
	if(window.crossRequestAnimationFrame) {
		var prevIscroll = null;
		var func = function() {
		   //do whatever
		   iScroll = window.pageYOffset;
			if(iScroll!=prevIscroll){
				if(iScroll < iHeight){
					$('#hero-container').css('top',(iScroll/2))
				}else{
					$('#hero-container').css('top',0);
				};
				prevIscroll = iScroll;
			};
			window.crossRequestAnimationFrame(func);
		};
	   
		window.crossRequestAnimationFrame(func);
	}
	
	/** SCROLL EFFECT **/
	function setTopHero(){
		iScroll = window.pageYOffset;
		
		if(iScroll < iHeight){
			$('#hero-container').css('top',(iScroll/2))
		}else{
			$('#hero-container').css('top',0);
		};
	};
	
	/** FADER **/
	var fadeTo = function(i) {
		if(i != currentSlide && slides[i]) {
			stopAutoSlider();
			
			slides.css('zIndex', 10);
			$(slides[currentSlide]).css('zIndex', 11);
			$(slides[i]).css('opacity', 0).css('zIndex', 15).animate({opacity : 1}, transitionTime);
			
			slides.removeClass('active');
			$(slides[i]).addClass('active');
			
			bullets.removeClass('active');
			$(bullets[i]).addClass('active');
			
			currentSlide = i;
		}
	};
	
	var fadeToNext = function() {
		var newSlide = currentSlide + 1;
		
		if(newSlide < 0) {
			newSlide = nbSlides - 1;
		} else if(newSlide >= nbSlides) {
			newSlide = 0;
		}
		
		fadeTo(newSlide);
	};
	
	stopAutoSlider = function() {
		clearTimeout(timerSlide);
	};
	
	startAutoSlider = function() {
		stopAutoSlider();
		fadeToNext();
		timerSlide = setTimeout(startAutoSlider, delayTime);
	};
	
	
	fadeTo(0);
	timerSlide = setTimeout(startAutoSlider, delayTime);
	
	hero.find('.yellow-btn')
		.on('mouseenter', function() {
			stopAutoSlider();
		})
		.on('mouseleave', function() {
			timerSlide = setTimeout(startAutoSlider, delayTime);
		});
		
	bullets
		.on('click', function(e) {
			if(e && e.preventDefault) e.preventDefault();
			
			this.blur();
			
			fadeTo(this.rel);
			
			timerSlide = setTimeout(startAutoSlider, delayTime);
		});
} );