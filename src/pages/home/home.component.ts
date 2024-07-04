import { Component } from '@angular/core';
import { GetAllUserComponent } from '../../components/get-all-user/get-all-user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GetAllUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
