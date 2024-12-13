import { Client } from './Client';

export class Banque {
  private nom: string;
  private clients: Client[];

  constructor(nom: string) {
    this.nom = nom;
    this.clients = [];
  }

  // Ajouter un client
  addClient(client: Client): void {
    const clientExistant = this.clients.find(c => c.id === client.id);
    if (clientExistant) {
      console.log(`Un client avec l'ID ${client.id} existe déjà.`);
    } else {
      this.clients.push(client);
      console.log(`Client ${client.nom} ajouté avec succès.`);
    }
  }

  // Supprimer un client
  deleteClient(id: number): void {
    const index = this.clients.findIndex(client => client.id === id);
    if (index !== -1) {
      const clientSupprime = this.clients.splice(index, 1)[0];
      console.log(`Le client ${clientSupprime.nom} a été supprimé.`);
    } else {
      console.log(`Le client avec l'ID ${id} est introuvable.`);
    }
  }

  // Liste des clients
  listClients(): void {
    if (this.clients.length === 0) {
      console.log("Aucun client dans la banque.");
    } else {
      console.log(`Liste des clients de ${this.nom} :`);
      this.clients.forEach(client => {
        console.log(
          `ID: ${client.id}, Nom: ${client.nom}, Prénom: ${client.prenom}, Solde: ${client.solde}`
        );
      });
    }
  }
}


