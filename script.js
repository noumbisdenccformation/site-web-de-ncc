/* code pour prendre la date du système et le mettre dans le pied de page */

// Récupérer l'élément span contenant l'année actuelle
var currentYearElement = document.getElementById("currentYear");

// Récupérer l'année actuelle
var currentYear = new Date().getFullYear();

// Mettre à jour le contenu de l'élément span avec l'année actuelle
currentYearElement.textContent = currentYear;

/* fin de code pour prendre la date du système et le mettre dans le pied de page */





// debut de la fonction d'affichage des contenus par le clic pour gerer le menu


function chargerFichierHTML(fichier) {
    // Get the content container element
    const contenu = document.getElementById("contenu");
  
    // Clear the existing content (optional)
    contenu.innerHTML = "";
  
    // Create a new iframe element
    const iframe = document.createElement("iframe");
    iframe.src = fichier;
    iframe.height = 750;
    iframe.frameBorder = 0; // Remove frame border (optional)

    
  
    // Append the iframe to the content container
    contenu.appendChild(iframe);
  }
  
  // Add event listener to the "Boutique" button
  const boutiqueButton = document.querySelector(".dvpt:nth-child(1)"); // Select first button with class "dvpt"
  boutiqueButton.addEventListener("click", function() {
    chargerFichierHTML("projets/boutique/boutique.html");
  });


  // fin de la fonction d'affichage des contenus par le clic pour gerer le menu



  //pour gerer le bouton d'inscription et de la connextion

  const openRegistrationButton = document.getElementById("openRegistration");
const openLoginButton = document.getElementById("openLogin");

openRegistrationButton.addEventListener("click", () => {
    showModal("inscription");
});

openLoginButton.addEventListener("click", () => {
    showModal("connexion");
});
