const lang = navigator.language.toLowerCase();
if (lang.startsWith('fr')) {}
else if (lang.startsWith('ru')) {window.location.href = '/ru';}
else if (lang.startsWith('de')) {window.location.href = '/de';}
else {window.location.href = '/en';}