/* menu --------------------------------------------------- */
const sousmenumobile = document.getElementById('sousmenumobile');
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click', function() {
openbtn.style.display = 'none';
sousmenumobile.style.display = 'block';
closebtn.style.display = 'block';
});

closebtn.addEventListener('click', function() {
openbtn.style.display = 'block';
sousmenumobile.style.display = 'none';
closebtn.style.display = 'none';
});

/* tarifs img ---------------------------------------------- */
/*
const liste = document.querySelectorAll('#tarifs .liste');
const option = document.querySelectorAll('#tarifs .option');
liste.forEach(item => {item.insertAdjacentHTML('afterbegin', `<img class="image" src="img/check.svg">`);});
option.forEach(item => {item.insertAdjacentHTML('afterbegin', `<img class="image" src="img/plus.svg">`);}); */


document.querySelectorAll('.derouler').forEach(function(derouler) {
  derouler.addEventListener('click', function() {
      let contenu = this.querySelector('.contenu');
      let montrer = this.querySelector('.montrer');
      let cacher = this.querySelector('.cacher');
      if (contenu.style.display === "none" || contenu.style.display === "") {
          contenu.style.display = "block";
          cacher.style.display = "inline-block";
          montrer.style.display = "none";
      } else {
          contenu.style.display = "none"; // Optionnel: cache le contenu si on clique à nouveau
          cacher.style.display = "none";
          montrer.style.display = "inline-block";
      }
  });
});

/* copyright année ------------------------------------------ */
var date = new Date();
var annee = date.getFullYear(); 
document.getElementById("annee").innerHTML = annee;

/* contact ------------------------------ */
document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission normale du formulaire.

  var scriptURL = "https://script.google.com/macros/s/AKfycbwfBV-WbnLDkGJWVRTTiHiUpCx_CtF2bp7smFquOuBbyx4tjcjimh71Eev3oi3q-rhDRQ/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: new FormData(this)
  })
  .finally(() => {
    // Ce code s'exécutera quelle que soit l'issue de la requête fetch
    document.querySelector('.feedback').style.display = 'block';
  });
});


