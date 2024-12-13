"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(id, nom, prenom, age, ville, profession, salaire) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.ville = ville;
        this.profession = profession;
        this.salaire = salaire;
        this.comptes = [];
    }
    // Ajouter un compte pour le client
    Client.prototype.ajouterCompte = function (compte) {
        this.comptes.push(compte);
        console.log("Compte ajout\u00E9 au client ".concat(this.nom, " ").concat(this.prenom, " : ").concat(compte.getNumero()));
    };
    // Retirer de l'argent d'un compte spécifique
    Client.prototype.retirerArgent = function (numeroCompte, montant) {
        var compte = this.comptes.find(function (c) { return c.getNumero() === numeroCompte; });
        if (compte) {
            compte.retirerArgent(montant); // Utilise la méthode retirerArgent du compte
        }
        else {
            console.log("Aucun compte trouv\u00E9 avec le num\u00E9ro ".concat(numeroCompte, " pour le client ").concat(this.nom, " ").concat(this.prenom, "."));
        }
    };
    // Afficher les informations du client et ses comptes
    Client.prototype.afficherInformations = function () {
        console.log("Client : ".concat(this.nom, " ").concat(this.prenom));
        console.log("\u00C2ge : ".concat(this.age, ", Ville : ").concat(this.ville, ", Profession : ").concat(this.profession));
        console.log("Salaire : ".concat(this.salaire));
        console.log('Comptes associés :');
        this.comptes.forEach(function (compte) {
            compte.afficherSolde();
        });
    };
    return Client;
}());
exports.Client = Client;
