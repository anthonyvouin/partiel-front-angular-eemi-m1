import { Component } from '@angular/core';
import { CountUserComponent } from '../../components/count-user/count-user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
