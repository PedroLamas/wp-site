jQuery(document).ready(function() {
	var updateTime = function() {
		var dt = new Date();
		var h = dt.getHours();
		var m = dt.getMinutes();
		
		$("#time").text(h + ":" + (m <= 9 ? "0" : "") + m);
		
		window.setTimeout(updateTime, 1000);
	};
	
	var initialize = function() {
		//alert($(".screenContentContainer").outerHeight());
		
		$(".screenContentContainer").draggable({
			distance: 5,
			axis: "y",
			containment: [0, -100, 0, 105]
		});
		
		$(".screenContainer").disableSelection();
	}
	
	updateTime();
	initialize();	
});