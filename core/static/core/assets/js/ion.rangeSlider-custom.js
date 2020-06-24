$(function(){
	$(".range-basic-1").ionRangeSlider({
		min: 100,
		max: 1000,
		from: 550
	});

	$(".range-basic-2").ionRangeSlider({
		type: "double",
		grid: true,
		min: 0,
		max: 1000,
		from: 200,
		to: 800,
		prefix: "$"
	});	

	$(".range-basic-3").ionRangeSlider({
		type: "double",
		grid: true,
		min: 0,
		max: 1000,
		from: 200,
		to: 800,
		prefix: "$"
	});	

	$(".range-basic-4").ionRangeSlider({
		grid: true,
		from: 3,
		values: [
			"Jan", "Feb", "Mar",
			"Apr", "May", "June",
			"July", "Aug", "Sempt",
			"Oct", "Nov", "Dec"
		]
	});	
});