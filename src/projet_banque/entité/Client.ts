import { Compte } from "./Compte";


export class Client {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  ville: string;
  profession: string;
  salaire: number;
  comptes: Compte[]; 

  constructor(
    id: number,
    nom: string,
    prenom: string,
    age: number,
    ville: string,
    profession: string,
    salaire: number
  ) {
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
  ajouterCompte(compte: Compte): void {
    this.comptes.push(compte);
  }

  // Retirer de l'argent d'un compte spécifique
  retirerArgent(numeroCompte: string, montant: number): void {
    const compte = this.comptes.find((c) => c.getNumero() === numeroCompte);
    if (compte) {
      try {
        compte.retirerArgent(montant); 
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("Une erreur inconnue est survenue.");
        }
      }
    } else {
      console.error(`Aucun compte trouvé avec le numéro ${numeroCompte}.`);
    }
  }

  // Afficher les informations du client et ses comptes
  afficherInformations(): void {
    console.log(`Client : ${this.nom} ${this.prenom}`);
    console.log(`Âge : ${this.age}, Ville : ${this.ville}, Profession : ${this.profession}`);
    console.log(`Salaire : ${this.salaire}`);
    console.log('Comptes associés :');
    this.comptes.forEach((compte) => {
      compte.afficherSolde();
    });
  }
}
