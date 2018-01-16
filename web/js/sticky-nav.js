window.onload = function() {
	jQuery(window).scroll(function() {
		var hT = jQuery('.header__actions').offset().top,
		hH = jQuery('.header__actions').outerHeight(),
		wS = jQuery(this).scrollTop();
		if (wS >= (hT+hH)) {
			if (!jQuery('#ms-topmenu').hasClass('sticky')) {
				jQuery('#ms-topmenu').addClass('sticky');
			}
		} else {
			if (jQuery('#ms-topmenu').hasClass('sticky')) {
				jQuery('#ms-topmenu').removeClass('sticky');
			}
		}
	});
};