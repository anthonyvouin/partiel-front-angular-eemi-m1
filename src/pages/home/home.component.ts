import { Component } from '@angular/core';
import { CountUserComponent } from '../../components/count-user/count-user.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { EventComponent } from '../../components/event/event.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUserComponent, CommonModule, ContactComponent, EventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  step: string = 'user';

}
 

