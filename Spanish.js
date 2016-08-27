var LanguageTranslator = (function(spanish){
var translatedSpanish = [];

var spanishTranslator = {
   "happy" : "Feliz",
   "birthday" : "cumpleaños",
   "to" : "a",
   "you" : "ti"
}

spanish.getSpanish = function(addedLanguage){
   translatedSpanish = [];
   for (var i = 0; i < addedLanguage.length; i++) {
     translatedSpanish.push(spanishTranslator[addedLanguage[i]]);
   }
   var finalString = translatedSpanish.join(" ");

   return finalString;
 };
 return spanish;
})(LanguageTranslator || {});