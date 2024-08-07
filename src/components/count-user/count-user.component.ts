import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { User } from '../../interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-count-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count-user.component.html',
  styleUrl: './count-user.component.scss',
})
export class CountUserComponent implements OnInit {
  users: User[] = [];
  userCount: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.apiService
      .request<User[]>('/user/get-all', 'GET')
      .then((users) => {
        this.users = users;
        this.userCount = users.length; 
        console.log('Utilisateurs récupérés :', this.users);
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs :',
          error
        );
      });
  }
}
