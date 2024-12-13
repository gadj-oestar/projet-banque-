"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;

var Compte = /** @class */ (function () {
    function Compte(soldeInitial) {
        if (soldeInitial < 0) {
            throw new Error("Le solde initial ne peut pas être négatif.");
        }
        this.solde = soldeInitial;
        this.numero = this.genererNumeroUnique(); // Génération d'un numéro unique
    }

    // Méthode privée pour générer un numéro de compte unique
    Compte.prototype.genererNumeroUnique = function () {
        return "CPT-".concat(Math.random().toString(36).substr(2, 9).toUpperCase());
    };

    // Méthode pour afficher le numéro de compte
    Compte.prototype.getNumero = function () {
        return this.numero;
    };

    // Méthode pour afficher le solde actuel
    Compte.prototype.afficherSolde = function () {
        console.log("Num\u00E9ro de compte : ".concat(this.numero));
        console.log("Solde actuel : ".concat(this.solde, "\u20AC"));
    };

    // Méthode pour effectuer un dépôt
    Compte.prototype.deposer = function (montant) {
        if (montant <= 0) {
            throw new Error("Le montant déposé doit être positif.");
        }
        this.solde += montant;
        console.log("D\u00E9p\u00F4t de ".concat(montant, "\u20AC effectu\u00E9. Nouveau solde : ").concat(this.solde, "\u20AC"));
    };

    // Méthode pour effectuer un retrait
    Compte.prototype.retirer = function (montant) {
        if (montant <= 0) {
            throw new Error("Le montant retiré doit être positif.");
        }
        if (montant > this.solde) {
            throw new Error("Solde insuffisant pour effectuer ce retrait.");
        }
        this.solde -= montant;
        console.log("Retrait de ".concat(montant, "\u20AC effectué. Nouveau solde : ").concat(this.solde, "\u20AC"));
    };

    return Compte;
}());

exports.Compte = Compte;
