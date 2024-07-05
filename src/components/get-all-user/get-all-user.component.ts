import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-get-all-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-user.component.html',
  styleUrl: './get-all-user.component.scss',
})
export class GetAllUserComponent {
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.apiService
      .request<User[]>('/user/get-all', 'GET')
      .then((users) => {
        this.users = users;
        console.log('Contacts récupérés :', this.users);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des users :', error);
      });
  }
}
