import { Component } from '@angular/core';
import { NavbarHomeComponent } from '../../shared/components/navbar-home/navbar-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
