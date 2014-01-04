module('changeValTextTo');

test('change Element val/text to "HELL0 W0RD"', function() {
	var change = function(valText){
			return valText.gsub("o", 0).toUpperCase();
	}
	var expected = "HELL0 W0RD";

	var $input = $('<input value="hello word">').md('changeValTextTo', change);
	equal($input.val(), expected, 'when send in input with val "hello word"');
	
	var $textarea = $('<textarea>hello word</textarea>').md('changeValTextTo', change);
	equal($textarea.val(), expected, 'when send in textarea with val "hello word"');

	var $span = $('<span>hello word</span>').md('changeValTextTo', change);
	equal($span.text(), expected, 'when send in span with text "hello word"');

	var $p = $('<p>hello word</p>').md('changeValTextTo', change);
	equal($p.text(), expected, 'when send in p with text "hello word"');

	var $h1 = $('<h1>hello word</h1>').md('changeValTextTo', change);
	equal($h1.text(), expected, 'when send in h1 with text "hello word"');

	var $div = $('<div>hello word</div>').md('changeValTextTo', change);
	equal($div.text(), expected, 'when send in div with text "hello word"');

	var $strong = $('<strong>hello word</strong>').md('changeValTextTo', change);
	equal($strong.text(), expected, 'when send in strong with text "hello word"');
});

test('change Element val/text to "hello word"', function() {
	var change = function(valText){
			return valText.gsub("0", 'O').toLowerCase();
	}
	var expected = "hello word";

	var $inputs = $('<input value="HELL0 W0RD"><input value="HELL0 W0RD">').md('changeValTextTo', change);
	$inputs.each(function(i, e){
		equal($(e).val(), expected, 'when send in input with val "HELL0 W0RD"');
	});
	
	var $textareas = $('<textarea>HELL0 W0RD</textarea><textarea>HELL0 W0RD</textarea>').md('changeValTextTo', change);
	$textareas.each(function(i, e){
		equal($(e).val(), expected, 'when send in textarea with val "HELL0 W0RD"');
	});	

	var $spans = $('<span>HELL0 W0RD</span><span>HELL0 W0RD</span>').md('changeValTextTo', change);
	$spans.each(function(i, e){
		equal($(e).text(), expected, 'when send in span with text "HELL0 W0RD"');
	});	

	var $ps = $('<p>HELL0 W0RD</p><p>HELL0 W0RD</p>').md('changeValTextTo', change);
	$ps.each(function(i, e){
		equal($(e).text(), expected, 'when send in p with text "HELL0 W0RD"');
	});	

	var $h1s = $('<h1>HELL0 W0RD</h1><h1>HELL0 W0RD</h1>').md('changeValTextTo', change);
	$h1s.each(function(i, e){
		equal($(e).text(), expected, 'when send in h1 with text "HELL0 W0RD"');
	});

	var $divs = $('<div>HELL0 W0RD</div><div>HELL0 W0RD</div>').md('changeValTextTo', change);
	$divs.each(function(i, e){
		equal($(e).text(), expected, 'when send in div with text "HELL0 W0RD"');
	});

	var $strongs = $('<strong>HELL0 W0RD</strong><strong>HELL0 W0RD</strong>').md('changeValTextTo', change);
	$strongs.each(function(i, e){
		equal($(e).text(), expected, 'when send in strong with text "HELL0 W0RD"');
	});
});