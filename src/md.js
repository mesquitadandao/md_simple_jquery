;(function($) {
	$.fn.md = function(functionName, ...args) {
		var functions = {
			changeValTextTo: function(index, element){
				var method = 'text';
				if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement){
					method = 'val';
				}
				var $element = $(element);
				$element[method](args[0]($element[method]()));
				}
		}
		return this.each(functions[functionName]);
	};
}(jQuery));