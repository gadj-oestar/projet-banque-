export class Compte {
  private numero: string; // Numéro unique du compte
  private solde: number;  // Solde du compte

  constructor(soldeInitial: number) {
    if (soldeInitial < 0) {
      throw new Error("Le solde initial ne peut pas être négatif.");
    }
    this.solde = soldeInitial;
    this.numero = this.genererNumeroUnique(); // Génération d'un numéro unique
  }

  // Méthode privée pour générer un numéro de compte unique
  private genererNumeroUnique(): string {
    return `CPT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  // Méthode pour afficher le numéro de compte
  getNumero(): string {
    return this.numero;
  }

  // Méthode pour afficher le solde actuel
  afficherSolde(): void {
    console.log(`Numéro de compte : ${this.numero}`);
    console.log(`Solde actuel : ${this.solde}€`);
  }

  // Méthode pour effectuer un dépôt
  deposer(montant: number): void {
    if (montant <= 0) {
      throw new Error("Le montant déposé doit être positif.");
    }
    this.solde += montant;
    console.log(`Dépôt de ${montant}€ effectué. Nouveau solde : ${this.solde}€`);
  }

  // Méthode pour retirer de l'argent
  retirerArgent(montant: number): void {
    if (montant <= 0) {
      throw new Error("Le montant retiré doit être positif.");
    }
    if (montant > this.solde) {
      throw new Error("Fonds insuffisants pour effectuer ce retrait.");
    }
    this.solde -= montant;
    console.log(`Retrait de ${montant}€ effectué. Nouveau solde : ${this.solde}€`);
  }
}
