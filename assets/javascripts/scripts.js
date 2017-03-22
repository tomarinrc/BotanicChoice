(function($) {
	//Navbar Related Scripts
	$(".promo").stick_in_parent();
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
	var hero_position = 0;
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
})(jQuery);