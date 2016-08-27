var input = document.getElementById("userinput");
var language = document.getElementById("language-selector");
var output = document.getElementById("useroutput");

language.addEventListener("change", function(event) {
    selectedLanguage = event.target.value;
    var stringToSplit = input.value;
    var messageToPrint = "";
    stringToSplit = stringToSplit.split(" ");
    //console.log(selectedLanguage);
    if (selectedLanguage === "italian") {
      messageToPrint = LanguageTranslator.getItalian(stringToSplit);
    } else if (selectedLanguage === "german") {
      messageToPrint = LanguageTranslator.getGerman(stringToSplit);
    } else if (selectedLanguage === "french") {
      messageToPrint = LanguageTranslator.getFrench(stringToSplit);
    } else if (selectedLanguage === "spanish") {
      messageToPrint = LanguageTranslator.getSpanish(stringToSplit);
    }
    output.value = messageToPrint;

});