const userListData = [];

function saveAndAddToPage() {
    // Récupérer les valeurs des champs du formulaire
    const nom = document.getElementById("nom").value;
    const age = parseInt(document.getElementById("age").value, 10);

    // Vérification des champs vides et de l'âge valide
    if (nom === "" || isNaN(age)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    // Enregistrer les données de l'utilisateur dans un objet
    const userData = { nom, age };

    // Ajouter l'utilisateur au tableau principal
    userListData.push(userData);

    // Afficher l'utilisateur dans la page correspondante
    addUserToPage(userData);

    // Réinitialiser les champs du formulaire
    document.getElementById("nom").value = "";
    document.getElementById("age").value = "";
}

function addUserToPage(user) {
    let listElement;
    if (user.age < 18) {
        listElement = document.getElementById("userListUnder18");
    } else if (user.age <= 50) {
        listElement = document.getElementById("userListBetween18And50");
    } else {
        listElement = document.getElementById("userListAbove50");
    }

    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `
        <div>
            <strong>Nom :</strong> ${user.nom}<br>
            <strong>Âge :</strong> ${user.age}
        
        <button onclick="removeUser('${user.nom}', ${user.age})" class="btn btn-danger btn-sm">Supprimer</button>
        </div>
    `;
    listElement.appendChild(li);
}

function showPage(pageId) {
    // Cache toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Affiche la page sélectionnée
    document.getElementById(pageId).classList.add('active');
}

function removeUser(nom, age) {
    // Trouver l'index de l'utilisateur dans le tableau
    const index = userListData.findIndex(user => user.nom === nom && user.age === age);
    if (index !== -1) {
        // Supprimer du tableau
        userListData.splice(index, 1);

        // Supprimer de l'affichage
        document.querySelectorAll('.list-group-flush').forEach(list => {
            list.innerHTML = ""; // On vide la liste
        });

        // Ré-afficher la liste mise à jour pour chaque page
        userListData.forEach(addUserToPage);
    }
}

// Afficher par défaut la page "Moins de 18 ans"
showPage('under18');