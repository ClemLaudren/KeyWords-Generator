//splits the phrase in words
function toSplit(phrase){
	var cut = phrase.split(" ");
	return cut;
}

//puts in plural words in singular
function inPlural (singular) {
	var plural = singular+"s";
	return [singular, plural];
}

//generates the keywords
function keyWordGenerator(words){
	var cutWords = toSplit(words);
	var map = cutWords.map(inPlural);
	var results = combination(map);
	return results;
}

//makes a combination of keywords
function combination(tab){
	if(tab.length == 0){
		return [];
	} else {
		var head = tab[0];
		var tail = tab.slice(1);
		var combi = combination(tail);
		if (combi.length == 0){
			return head;
		}

		var headMap = head.map(function(prefix){
			var combiMap = combi.map(function(suffix){
				return prefix+" "+suffix;
			});
			return combiMap;
		})
		return _.flatten(headMap);
	}
}

//computes and displays generated keywords
function getSentence() {
	var sentence = document.getElementById("input").value;
	var result = keyWordGenerator(sentence);
	var paragraph = document.getElementById("paragraphe");
	paragraph.textContent = result.join("\n");	
}

//wire get sentence on generator button
var generatorButton = document.getElementById("button");
generatorButton.addEventListener("click", function(){
	getSentence();
})