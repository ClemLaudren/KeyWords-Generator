var _ = require("lodash");

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

//generates the keywords
function keyWordGenerator(words){
	var cutWords = toSplit(words);
	var map = cutWords.map(inPlural);
	var results = combination(map);
	return results;
}

if (module){
	module.exports.keyWordGenerator = keyWordGenerator;
}
