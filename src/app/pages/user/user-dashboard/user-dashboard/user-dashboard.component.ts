import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    if (route === 'signin') {
      this.router.navigate(['/auth/login']); // Ajusta esta ruta según tu configuración
    } else if (route === 'register') {
      this.router.navigate(['/auth/register']); // Ajusta esta ruta según tu configuración
    }
  }
}
