// Functie om lineair zoeken uit te voeren
var lineairZoeken = function(array, doel) {
    for (var i = 0; i < array.length; i++) { 
      if (array[i] === doel) {
        return i;
      }
    }
    return -1;
  };
  // Functie om een array van 50 willekeurige getallen tussen 1 en 100 te genereren
  var genereerWillekeurigeGetallen = function() {
    var getallen = [];
    for (var i = 0; i < 50; i++) {
      getallen.push(Math.floor(Math.random() * 100) + 1);
    }
    return getallen;
  }; 
  // Array met 50 willekeurige getallen
  var cijfers = genereerWillekeurigeGetallen();
  console.log("Gegenereerde cijfers:", cijfers);
  // Functie om het zoeken te starten wanneer de knop wordt ingedrukt
  var zoekGetal = function() {
    var doelwitElement = document.getElementById("doelwit");
    var doelwit = parseInt(doelwitElement.value);
    var resultaat = lineairZoeken(cijfers, doelwit);
    var resultaatElement = document.getElementById("resultaat");
    if (resultaat !== -1) {
      resultaatElement.textContent = "Doelwit " + doelwit + " gevonden op index: " + resultaat;
    } else {
      resultaatElement.textContent = "Doelwit " + doelwit + " niet gevonden in de array.";
    }
  };
