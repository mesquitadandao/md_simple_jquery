;$(function(){
	var $demoChangeValTextTo = $("#demo-changeValTextTo");
	var $searchChangeValTextTo = $("#search-changeValTextTo");
	var $replacementChangeValTextTo = $("#replacement-changeValTextTo");

	var change = function(valText){
		return valText.gsub($searchChangeValTextTo.val(), $replacementChangeValTextTo.val()).toUpperCase();
	};

	$("#apply-changeValTextTo-only-demo").on("click", function(){
		$demoChangeValTextTo.md('changeValTextTo', change);
	});

	$("#apply-changeValTextTo-in-page").on("click", function(){
		$('.change-element').md('changeValTextTo', change);
	});
});