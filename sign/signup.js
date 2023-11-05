const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
       var base64Contenttable = []
        // Sélectionnez l'élément HTML de l'input file qui permet à l'utilisateur de sélectionner une photo
        var inputElement = document.getElementById("number");

        // Ajoutez un gestionnaire d'événements pour écouter le changement de fichier
        inputElement.addEventListener("change", handleFiles, false);

        function handleFiles() {
        // Récupérez le fichier sélectionné par l'utilisateur
        var file = this.files[0];
        console.log("Fichier sélectionné : ", file);

        // Créez une nouvelle instance de FileReader
        var reader = new FileReader();

        // Ajoutez un gestionnaire d'événements pour écouter la fin de la lecture du fichier
        reader.onload = function(event) {
            // Créez une nouvelle instance d'image
            var img = new Image();

            // Définissez le gestionnaire d'événements pour lorsque l'image est chargée
            img.onload = function() {
            const minWidth = 300; // La largeur minimale souhaitée
            const minHeight = 300; // La longeur minimale souhaitée
            if (img.width >= minWidth && img.height >= minHeight) { 
            // Créez un élément canvas
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');

            // Déterminez les dimensions de l'image redimensionnée
            var maxWidth = 800;
            var maxHeight = 600;
            var width = img.width;
            var height = img.height;

            // Vérifiez si l'image doit être redimensionnée
            if (width > maxWidth || height > maxHeight) {
                // Calculez le facteur de redimensionnement
                var ratio = Math.min(maxWidth / width, maxHeight / height);

                // Appliquez le redimensionnement
                width *= ratio;
                height *= ratio;
            }

            // Définissez les dimensions du canvas
            canvas.width = width;
            canvas.height = height;

            // Dessinez l'image sur le canvas avec les nouvelles dimensions
            context.drawImage(img, 0, 0, width, height);

            // Obtenez le contenu de l'image redimensionnée sous forme de base64
            var base64Content = canvas.toDataURL('image/jpeg');
            base64Content = base64Content.replace(/^data:image\/jpeg;base64,/, '');
            console.log("Contenu en base64 : ", base64Content);
            base64Contenttable.push(base64Content)
            // ...
            }else{
                Swal.showValidationMessage(i18next.t('IDTRANSLATEFORM105'));
                //alert(`Votre image est trop pétite. Veuillez sélectionner une image d'au moins 300x300 pixels.`)
                inputElement.value = ""
            }
            };

            // Définissez la source de l'image comme le contenu du fichier
            img.src = event.target.result;
        };

        // Commencez la lecture du fichier
        reader.readAsDataURL(file);
        }
        // end function to uploade img
        
//function to submit form
document.getElementById('sendeID').addEventListener('click', function(){
  var suivival = document.getElementById('suivi').value;
  var sexeval = document.getElementById('sexe').value;
  var nomval = document.getElementById('nom').value;
  var prenomval = document.getElementById('prenom').value;
  var emailval = document.getElementById('email').value;
  var phoneval = document.getElementById('phone').value;
  var paysval = document.getElementById('pays').value;
  var dateval = document.getElementById('date').value;
  var villeval = document.getElementById('ville').value;
  var numberval = document.getElementById('number').value;
  if(suivival && sexeval && nomval && prenomval && emailval && phoneval && 
    paysval && dateval && villeval && numberval){
// L'objet que vous souhaitez stocker dans le localStorage
  const PieceID = base64Contenttable.slice(-1).pop();
  var monObjet = {
    Suivi: suivival,
    Sexe: sexeval,
    Nom:nomval,
    Prenom: prenomval,
    Email: emailval,
    Phone: phoneval,
    Pays: paysval,
    Date: dateval,
    Ville: villeval,
    Photo: PieceID,
  };
  // Sérialisez l'objet en JSON
  var objetEnJSON = JSON.stringify(monObjet);

  // Stockez la chaîne JSON dans le localStorage
  localStorage.setItem("monObjet", objetEnJSON);
  
  Swal.fire({
    title: '<strong>Nos <u>Félicitactions</u></strong>',
    icon: 'info',
    html:
      'Vous êtes <b>éligible</b>, ' +
      '<a href="//sweetalert2.github.io">pour être membre de</a> ' +
      'agrofinance',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<a href="carte.html"><i class="fa fa-thumbs-up"></i> Great!</a>',
    confirmButtonAriaLabel: 'Thumbs up, great!',
 
  })
  console.log(suivival),
  console.log(sexeval),
    console.log(nomval),
      console.log(prenomval),
        console.log( emailval),
          console.log( phoneval),
            console.log(paysval),
              console.log(dateval),
                console.log( villeval),
                  console.log(numberval)
                  }
  //window.location.href = "carte.html"
})