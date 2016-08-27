var input = document.getElementById("userinput");
var language = document.getElementById("language-selector");
var output = document.getElementById("useroutput");
var button = document.getElementById("submit");

button.addEventListener("click", function(event) {
    selectedLanguage = document.getElementById("language-selector").value
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
    } else if (selectedLanguage === "chooselanguage") {
      alert("Please select a language!");
    }
    output.value = messageToPrint;

});
