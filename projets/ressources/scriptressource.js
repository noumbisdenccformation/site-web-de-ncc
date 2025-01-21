// Script JavaScript pour ouvrir un PDF dans un nouvel onglet

const images = document.querySelectorAll('#pdf-groups-container img'); // Sélectionner toutes les images dans le conteneur

images.forEach(image => {
  image.addEventListener('click', function() {
    // Récupérer le nom du fichier PDF (en remplaçant l'extension .png par .pdf)
    const pdfFileName = this.src.replace(/\.png$/, '.pdf');

    // Ouvrir le fichier PDF dans un nouvel onglet
    window.open(pdfFileName, '_blank');
  });
});