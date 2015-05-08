/**
 * swpier-hdx版本的默认属性有变化，请根据自己需要更改
 *  direction: 'vertical' // "horizontal"
 *  speed: 200 // 300                                        
 *  effect: "push" // "slide"                        
 *  longSwipesRatio: 0.33, // 0.5                
 */
var s = new Swiper('.my-app', {	
	onTransitionEnd: function(s) {
		if (s.activeIndex === 1) {			
			// animation goes here:
			return;
		}
	}
});
