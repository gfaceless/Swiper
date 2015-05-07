var s = new Swiper('.my-app', {	
	onTransitionEnd: function(s) {
		if (s.activeIndex === 1) {			
			// animation gose here:
			return;
		}
	}
});
