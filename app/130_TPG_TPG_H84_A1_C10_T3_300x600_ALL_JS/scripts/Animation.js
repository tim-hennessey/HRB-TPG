var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	// var tl2 = new TimelineMax();

	var txt1a = document.getElementById('txt1a');
	var txt1b = document.getElementById('txt1b');
	var txt1c = document.getElementById('txt1c');
	var txt1d = document.getElementById('txt1d');
	var txt1e = document.getElementById('txt1e');

	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#3bc0f8"});
            t.to(cta_txt, .25, {fill: "#262626" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.from(txt1a, .75, {y:"-=100", force3D:true, ease: Sine.easeOut})
		.from(txt1b, .75, {y:"-=100", force3D:true, ease: Sine.easeOut}, "-=.35")
		.from(txt1c, .75, {y:"-=100", force3D:true, ease: Sine.easeOut}, "-=.35")
		.from(txt1d, .75, {y:"-=100", force3D:true, ease: Sine.easeOut}, "-=.35")
		.from(txt1e, .75, {y:"-=100", force3D:true, ease: Sine.easeOut}, "-=.35");

		// tl2.to(tl1, 3, {progress:1, force3D:true, ease: Sine.easeInOut}, "+=.5");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
