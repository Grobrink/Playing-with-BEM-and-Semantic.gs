$(function () {

	// define params
	var duration = $("#the-last").height() + $(window).height();
	var bgPosMovement = "0 " + (duration*0.5) + "px";

	// init controller
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onLeave", duration: duration}});

	// build scenes
	new ScrollScene({triggerElement: "#the-last"})
		.setTween(TweenMax.to("#the-last", 1, {backgroundPosition: bgPosMovement, ease: Linear.easeNone}))
		.addTo(controller);
		// .addIndicators({zindex: 1, suffix: "1"});
});
