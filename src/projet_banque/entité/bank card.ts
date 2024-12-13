import { Compte } from './Compte';

export class CarteBancaire {
  private numero: string;     // Numéro unique 
  private expiration: string; // Date d’expiration 
  private ccv: string;        // Code de sécurité
  private compte: Compte;     // Lien avec un compte bancaire

  constructor(compte: Compte) {
    this.compte = compte;
    this.numero = this.genererNumeroUnique();
    this.expiration = this.genererDateExpiration();
    this.ccv = this.genererCCV();
  }

  // Générer un numéro unique (16 chiffres)
  private genererNumeroUnique(): string {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
  }

  // Générer la date d’expiration (5 ans après la création)
  private genererDateExpiration(): string {
    const dateActuelle = new Date();
    const mois = (dateActuelle.getMonth() + 1).toString().padStart(2, '0'); // Mois en format MM
    const annee = (dateActuelle.getFullYear() + 5).toString().slice(-2);    // Année en format AA
    return `${mois}/${annee}`;
  }

  // Générer un CCV (3 chiffres)
  private genererCCV(): string {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
  }

  // Méthode de formatage pour l'affichage
  formatCarte(): string {
    const numeroFormate = this.numero.match(/.{1,4}/g)?.join(' ') || ''; // XXXX XXXX XXXX XXXX
    return `${numeroFormate} - ${this.expiration} - ${this.ccv}`;
  }

  // Méthode pour afficher les détails de la carte
  afficherCarte(): void {
    console.log(`Carte Bancaire : ${this.formatCarte()}`);
  }

  // Méthode statique pour créer une carte (par la banque)
  static creerParBanque(compte: Compte): CarteBancaire {
    return new CarteBancaire(compte);
  }

  
}
