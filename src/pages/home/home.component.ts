import { Component } from '@angular/core';
import { CountUserComponent } from '../../components/count-user/count-user.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';
import { EventComponent } from '../../components/event/event.component';
import { GetAllUserComponent } from '../../components/get-all-user/get-all-user.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUserComponent, CommonModule, ContactComponent, EventComponent, GetAllUserComponent, ChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  step: string = 'user';

}
 

