import { Component } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { Contact } from '../../interface/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contacts: Contact[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(): void {
    this.apiService
      .request<Contact[]>('/contact/get-all', 'GET')
      .then((contacts) => {
        this.contacts = contacts;
        console.log('Contacts récupérés :', this.contacts);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des contacts :', error);
      });
  }
}
