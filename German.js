var LanguageTranslator = (function(german) {

    var translatedGerman = [];

    germanTranslator = {
         "happy": "Alles",
         "birthday": "Gute",
         "to": "zum",
         "you": "Geburstag"
    }

    german.getGerman = function(addedLanguage) {
      translatedGerman = []
      for (var i = 0; i < addedLanguage.length; i++) {
        translatedGerman.push(germanTranslator[addedLanguage[i]]);
      }
      var finalString = translatedGerman.join(" ");

      return finalString;
  };

    return german;
})(LanguageTranslator || {})