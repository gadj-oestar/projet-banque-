"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Compte_1 = require("./entit\u00E9/Compte");
var Client_1 = require("./entit\u00E9/Client");
// Création d'un client
var client = new Client_1.Client(1, 'Dupont', 'Jean', 35, 'Paris', 'Ingénieur', 50000);
// Création de comptes pour le client
var compte1 = new Compte_1.Compte(1000);
var compte2 = new Compte_1.Compte(2000);
// Ajout des comptes au client
client.ajouterCompte(compte1);
client.ajouterCompte(compte2);
// Affichage des informations du client
client.afficherInformations();
// Retrait d'argent
client.retirerArgent(compte1.getNumero(), 500); // Retrait réussi
client.retirerArgent(compte1.getNumero(), 2000); // Retrait refusé
client.retirerArgent('CPT-INVALIDE', 500); // Compte introuvable
