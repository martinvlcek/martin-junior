(function($) {

	// navbar animation & home-content animation

	var navLinks    = $('.navbar-nav');
		homeContent = $('.home-content');

	navLinks.addClass('animated bounceInDown');
	homeContent.hide();
	homeContent.fadeIn(2000);

	// accordion

	var list = $('.otazky_odpovede');

	list.find('dd').hide();

	list.find('dt').on('click', function() {
		$(this).next().slideToggle().siblings('dd').slideUp();
	});

	// back to top & scroll animation

	var navBar       = $('.navbar'),
		anim  		 = $('.alert-message'),
		anim1        = $('.animation_1'),
		anim2        = $('.animation_2'),
		anim3 		 = $('.icons'),
		anim4    	 = $('.skills-content'),
		anim5 		 = $('.contact-text'),
	    backToTop    = $('<a>', {
							href: '#home',
							class: 'back-to-top',
							html: '<i class="fas fa-chevron-circle-up"></i>'
					});

	backToTop
		.hide()
		.appendTo('body')
		.on('click', function() {
			$('html, body').animate({scrollTop: 0});
		});

		var win = $(window);

		win.on('scroll', function() {
				if (win.scrollTop() >= 800) backToTop.fadeIn();
				else backToTop.fadeOut();
		});

		if (window.matchMedia("(min-width: 768px)").matches) {

			anim.hide();
			anim1.hide();
			anim2.hide();
			anim3.hide();
			anim4.hide();
			anim5.hide();

			win.on('scroll', function() {

				if (win.scrollTop() >= 1) navBar.addClass('navbar-scroll');
				else navBar.removeClass('navbar-scroll');

				if (win.scrollTop() >= 600) anim.fadeIn(1500);

				if (win.scrollTop() >= 700) anim1.show().addClass('animated bounceInLeft');

				if (win.scrollTop() >= 900) anim2.show().addClass('animated bounceInLeft');

				if (win.scrollTop() >= 1800) anim3.show().addClass('animated bounceInDown');

				if (win.scrollTop() >= 2000) anim4.show().addClass('animated bounceInUp');

				if (win.scrollTop() >= 2700) anim5.show().addClass('animated zoomIn');

		});
	};

	// scroll to section

	var menu      = $('.navbar'),
		menuLinks = menu.find('a');

		menuLinks.on('click', function(event) {
		event.preventDefault();

		var a  = $(this),
			li = a.parent(),
		    id = this.hash;

		li.addClass('active').siblings().removeClass('active');

		$('html, body').animate({scrollTop: $(id).offset().top}, 1000, function() {
			window.location.hash = id;
		});
	});

})(jQuery);
