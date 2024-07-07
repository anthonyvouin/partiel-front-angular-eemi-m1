import { Component } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';
import { Event } from '../../interface/event';


@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  events: Event[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.apiService
      .request<Event[]>('/event/get-all', 'GET') 
      .then((events) => {
        this.events = events;
        console.log('Événements récupérés :', this.events);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des événements :', error);
      });
  }

}
