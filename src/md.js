;(function($) {
	$.fn.md = function(functionName, ...args) {
		var functions = {
			changeValTextTo: function(index, element){
				var method = 'text';
				if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement){
					method = 'val';
				}
				var $element = $(element);
				var valText = $element[method]();
				$element[method](args[0](valText));
				}
		}
		return this.each(functions[functionName]);
	};
}(jQuery));