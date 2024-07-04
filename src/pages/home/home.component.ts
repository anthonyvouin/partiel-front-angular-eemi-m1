import { Component } from '@angular/core';
import { CountUserComponent } from '../../components/count-user/count-user.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountUserComponent, CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
showContacts: boolean = false;

  toggleView(view: string): void {
    if (view === 'contacts') {
      this.showContacts = true;
    } else {
      this.showContacts = false;
    }
  }
}
 

