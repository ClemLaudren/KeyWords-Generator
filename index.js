var generator = require("./generator.js")

//computes and displays generated keywords
function getSentence() {
	var sentence = document.getElementById("input").value;
	var result = generator.keyWordGenerator(sentence);
	var paragraph = document.getElementById("paragraphe");
	paragraph.textContent = result.join("\n");	
}

//wire get sentence on generator button
var generatorButton = document.getElementById("button");
generatorButton.addEventListener("click", function(){
	getSentence();
})