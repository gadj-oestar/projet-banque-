import { Compte } from './entité/Compte';
import { Client } from './entité/Client';

// Création d'un client
const client = new Client(1, 'Dupont', 'Jean', 35, 'Paris', 'Ingénieur', 50000);

// Création de comptes pour le client
const compte1 = new Compte(1000);
const compte2 = new Compte(2000);

// Ajout des comptes au client
client.ajouterCompte(compte1);
client.ajouterCompte(compte2);

// Affichage des informations du client
client.afficherInformations();

// Retrait d'argent
client.retirerArgent(compte1.getNumero(), 500); // Retrait réussi
client.retirerArgent(compte1.getNumero(), 2000); // Retrait refusé
client.retirerArgent('CPT-INVALIDE', 500); // Compte introuvable
