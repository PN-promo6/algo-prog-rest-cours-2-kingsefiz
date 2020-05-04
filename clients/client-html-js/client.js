fetch("http://localhost:3000/bands")
  .then((response) => response.json()) //On récupère la réponse de la requête
  .then((json) => {
    //On transforme le JSON en objet JS
    console.log(json); //On affiche la liste des groupes
  });
