var LanguageTranslator = (function(language) {
var translatedFrench = [];
   // Private variable to store the different meat prices
var frenchTranslator = {
       "happy": "",
       "birthday": "joyeux",
       "to": "",
       "anniversaire": 
   };

   language.getFrench = function(addedLanguage) {
       for (var i = 0; i < addedLanguage.length; i++) {
         translatedFrench.push(frenchTranslator[addedLanguage[i]]);
       }
       var finalString = translatedFrench.join(" ");
       //console.log(language.getUserInput());
       return finalString;
   };
   // Return the new, augmented object with the new method on it
   return language;
})(LanguageTranslator || {});