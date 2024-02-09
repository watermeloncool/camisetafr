
/* titres --------------------------------------------------- */

var debut = 0;
var titres = document.getElementsByClassName("titre");
var nombre = titres.length;

function cacher(){
for(var i = 0; i < nombre; i++){titres[i].style.display = "none";}
}

function montrer(j,m){
setTimeout(function() {
cacher(); 
titres[j].style.display = "inline-block";
}, m);
}


setInterval(function() {
for(var j = 0; j < nombre; j++){ m = j*2500; montrer(j,m); }
}, nombre*2500);

for(var j = 0; j < nombre; j++){ m = j*2500; montrer(j,m); }

/* copyright année ------------------------------------------ */

var date = new Date();
var annee = date.getFullYear(); 
document.getElementById("annee").innerHTML = annee;


/* programmer un RDV ------------------------------ */

document.getElementById('formulairecalendrier').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire.

  var scriptURL = "https://script.google.com/macros/s/AKfycbyveDQeMJi7N0MwRY3lI4yd0z0fjrbrN-xWiVQ9qEJsaRxnrXe3PGJpjALHCtrMcgjUSA/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(this)
  })
  .finally(() => {
    // Ce code s'exécutera quelle que soit l'issue de la requête fetch
    document.querySelector('#calendar .feedback').style.display = 'block';
  });
});


/* formulaire de contact ------------------------------ */

document.getElementById('formulairedecontact').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire.

  var scriptURL = "https://script.google.com/macros/s/AKfycbwfBV-WbnLDkGJWVRTTiHiUpCx_CtF2bp7smFquOuBbyx4tjcjimh71Eev3oi3q-rhDRQ/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(this)
  })
  .finally(() => {
    // Ce code s'exécutera quelle que soit l'issue de la requête fetch
    document.querySelector('#form .feedback').style.display = 'block';
  });
});




/* récupérer heure du visiteur ---------------------------------- */
// Créer un nouvel objet Date qui contient la date et l'heure actuelles
let dateActuelle = new Date();

// Fonction pour ajouter un zéro devant les nombres < 10
function formatDeuxChiffres(i) {
  return i < 10 ? '0' + i : i;
}

// Obtenir l'heure, les minutes et les secondes avec deux chiffres
let heures = formatDeuxChiffres(dateActuelle.getHours());
let minutes = formatDeuxChiffres(dateActuelle.getMinutes());
let secondes = formatDeuxChiffres(dateActuelle.getSeconds());

console.log("Heure actuelle:", heures + ":" + minutes + ":" + secondes);



/* récupérer heure genève --------------------------------------- */
// Créer un nouvel objet Date pour l'heure actuelle
let dateGeneve = new Date();

// Formatter cette date pour le fuseau horaire de Genève
let heureGeneve = new Intl.DateTimeFormat('fr-CH', {
  timeZone: 'Europe/Zurich',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false // Utilisez true pour un format 12 heures avec AM/PM si désiré
}).format(dateGeneve);

console.log("Heure à Genève:", heureGeneve);
