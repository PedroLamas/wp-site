jQuery(document).ready(function() {
	var updateTime = function() {
		var dt = new Date();
		
		$("#time").text(dt.getHours() + ":" + dt.getMinutes());
		
		window.setTimeout(updateTime, 1000);
	};
	
	var initialize = function() {
		//alert($(".screenContentContainer").outerHeight());
		
		$(".screenContentContainer").draggable({
			distance: 5,
			axis: "y",
			containment: [0, -100, 0, 50]
		});
		
		$(".screenContainer").disableSelection();
	}
	
	updateTime();
	initialize();	
});