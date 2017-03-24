(function($) {
	//Navbar Related Scripts
	$('a.navbar-mobile-search').on('click', function() {
		$('.promo').toggleClass('show');
		$('.search-mobile').toggleClass('show');
	});
	//Sidebar Related Scripts
	$('a.navbar-mobile-menu').on('click', function() {
		$('.sidebar-overlay').toggleClass('show');
		$('aside.sidebar').scrollTop($(".sidebar-welcome").offset().top);
		$('aside').toggleClass('show');
	});
	$('.sidebar-overlay').on('click', function() {
		$('.sidebar-overlay').removeClass('show');
		$('aside').removeClass('show');
	});
	$('aside.sidebar').swipe({
		swipeLeft: function() {
			$('.sidebar-overlay').removeClass('show');
			$('aside').removeClass('show');
		}
	});
	$('.sidebar-overlay').swipe({
		swipe: function() {
			$('.sidebar-overlay').removeClass('show');
			$('aside').removeClass('show');
		}
	});
	
	//Promo Banner Related Scripts
	$('header .promo i.fa-times').click(function () {
		$('section.hero').css("margin-top", $('.navbar-mobile').height());
		$('header .promo').remove();
	})
	
	//Hero Banner Related Scripts
	var hero = {	
		position : 0,
		node : $('.hero figure'),
		UpdateBullets : function () {
			$('.hero-nav a.active').removeClass('active');
			$('.hero-nav a.slide-' + Math.abs(this.position)).addClass('active');
		},
		MoveLeft : function () {
			if (this.position > -4) {
				this.position -= 1;
				this.node.css("left", String(this.position * 100) + 'vw');
				this.UpdateBullets();
			}
			else {
				this.position = 0;
				this.node.css("left", String(this.position * 100) + 'vw');
				this.UpdateBullets();
			}
		},
		MoveRight : function () {
			if (this.position < 0) {
				this.position += 1;
				this.node.css("left", String(this.position * 100) + 'vw');
				this.UpdateBullets();
			}
			else {
				this.position = -4;
				this.node.css("left", String(this.position * 100) + 'vw');
				this.UpdateBullets();
			}
		},
		AutoScroll : function () {
			hero.MoveLeft();
		},
	};
	
	hero.node.swipe({
		swipeLeft: function () { hero.MoveLeft(); },
		swipeRight: function () { hero.MoveRight(); }
	});
	
	$('.hero .fa-chevron-left').click(function() { hero.MoveRight(); });
	$('.hero .fa-chevron-right').click(function() { hero.MoveLeft(); });
	
	setInterval(hero.AutoScroll, 7500);
	
})(jQuery);


/*var myVar;

function myFunction() {
    myVar = setInterval(alertFunc, 10000);
}

function alertFunc() {
    hero.MoveLeft();
}

myFunction();
*/