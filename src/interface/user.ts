export interface User {
  nom: string;
  prenom: string;
  dateNaissance: Date;
  adresse: string;
  contactTelephonique: Number;
  email: string;
  responsableLegal?: string;
}
