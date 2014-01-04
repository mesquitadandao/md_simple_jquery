MD Simple jQuery
====================


A plugin to simplify jquery.

	
Requirement
--------------------

- jQuery 2.0.3
- MD Simple JavaScript


Test
--------------------

- QUnit 1.12.0

Implemented Methods
--------------------

--------------------

### MD

> **NOTE:** Methods to simplify the handling of jquery.

**md("changeValTextTo", function(valText){return "";})** Simplify changes. Exemple:

```
/** change Element val/text to "HELL0 W0RD" **/
var change = function(valText){
	return valText.gsub("o", 0).toUpperCase();
}
$("#input[value="hello word"]").md("changeValTextTo", change(valText));
$("#textarea[value="hello word"]").md("changeValTextTo", change(valText));
$("#span[text="hello word"]").md("changeValTextTo", change(valText));
$("#p[text="hello word"]").md("changeValTextTo", change(valText));
$("#h1[text="hello word"]").md("changeValTextTo", change(valText));
$("#div[text="hello word"]").md("changeValTextTo", change(valText));
$("#strong[text="hello word"]").md("changeValTextTo", change(valText));

/** change Elements val/text to "hello word" **/
var change = function(valText){
	return valText.gsub(0, "O").toLowerCase();
}
$(".input[value="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".textarea[value="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".span[text="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".p[text="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".h1[text="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".div[text="HELL0 W0RD"]").md("changeValTextTo", change(valText));
$(".strong[text="HELL0 W0RD"]").md("changeValTextTo", change(valText));
```

--------------------

@Last Release <a href="http://mesquitadandao.github.io/md_simple_jquery" target="_blank">DM Simple jQuery (Download and Demo)</a>.

@License <a href="http://choosealicense.com/licenses/unlicense" target="_blank">Public Domain (Unlicense)</a>.

@Author <a href="http://mesquitadandao.github.io" target="_blank">Mesquita Dandão</a>.
