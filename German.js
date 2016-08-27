// var languageTranslator = (function (language) {
// 	var germanLanguage = {
// 		Happy: "Alles",
// 		Birthday: "Gute",
// 		to: "zum",
// 		you: "Geburstag",
// };
// languages.getGerman

// })


var LanguageTranslator = (function(german) {

	var translatedGerman = [];

	germanTranslator = {
		 "happy": "Glücklich",
		 "birthday": "Geburstag",
		 "to": "nach",
		 "you": "Du"
	}

	language.getGerman = function(addedLanguage) {
       for (var i = 0; i < addedLanguage.length; i++) {
         translatedGerman.push(germanTranslator[addedLanguage[i]]);
       }
       var finalString = translatedGerman.join(" ");
       
       return finalString;
   };
	
	return german;
})(LanguageTranslator || {})