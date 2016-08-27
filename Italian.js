var LanguageTranslator = (function(language) {
var translatedItalian = [];
    // Private variable to store the different meat prices
var italianTranslator = {
        "happy": "buon",
        "birthday": "cumplaeanno",
        "to": "e",
        "you": "you"
    };

    language.getItalian = function(addedLanguage) {
      translatedItalian = [];
        for (var i = 0; i < addedLanguage.length; i++) {
          translatedItalian.push(italianTranslator[addedLanguage[i]]);
        }
        var finalString = translatedItalian.join(" ");
        //console.log(language.getUserInput());
        return finalString;
    };
    // Return the new, augmented object with the new method on it
    return language;
})(LanguageTranslator || {});