var hero = {	
	position : 0,
	node : $('.hero figure'),
	MoveLeft : function () {
		if (this.position > -4) {
			this.position -= 1;
			this.node.css("left", String(this.position * 100) + 'vw');
		}
	},
	MoveRight : function () {
		if (this.position < 0) {
			this.position += 1;
			this.node.css("left", String(this.position * 100) + 'vw');
		}
	},
};

(function($) {
	//Navbar Related Scripts
	$('a.navbar-mobile-search').on('click', function() {
		$('.promo').toggleClass('show');
		$('.search-mobile').toggleClass('show');
	});
	//Sidebar Toggle
	$('a.navbar-mobile-menu').on('click', function() {
		$('.sidebar-overlay').toggleClass('show');
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
	//Mobile Hero
	/*var hero_position = 0;
	$('.hero figure').swipe({
		swipeLeft: function() {
			if (hero_position > -4) {
				hero_position -= 1;
				$('.hero figure').css("left", String(hero_position * 100) + 'vw');
			}
		},
		swipeRight: function() {
			if (hero_position < 0) {
				hero_position += 1;
				$('.hero figure').css("left", String(hero_position * 100) + 'vw');
			}
		}
	});
	$('.hero .fa-chevron-left').on('click', function() {
		if (hero_position < 0) {
			hero_position += 1;
			$('.hero figure').css("left", String(hero_position * 100) + 'vw');
		}
	});
	$('.hero .fa-chevron-right').on('click', function() {
		if (hero_position > -4) {
			hero_position -= 1;
			$('.hero figure').css("left", String(hero_position * 100) + 'vw');
		}
	});*/
	
	/*var hero = {	
		position : 0,
		node : $('.hero figure'),
		MoveLeft : function () {
			if (this.position > -4) {
				this.position -= 1;
				hero.node.css("left", String(this.position * 100) + 'vw');
			}
		},
		MoveRight : function () {
			if (this.position < 0) {
				this.position += 1;
				hero.node.css("left", String(this.position * 100) + 'vw');
			}
		},
	};*/
	
	hero.node.swipe({
		swipeLeft: function () { hero.MoveLeft(); },
		swipeRight: function () { hero.MoveRight(); }
	});
	$('.hero .fa-chevron-left').click(function() { hero.MoveRight(); });
	$('.hero .fa-chevron-right').click(function() { hero.MoveLeft(); });
	
})(jQuery);