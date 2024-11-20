import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-habits', 
  standalone: true,
  templateUrl: './user-habits.component.html',
  styleUrls: ['./user-habits.component.css'],
  imports: [CommonModule]
})
export class UserHabitComponent {
  user = {
    name: 'Sofía Ramírez',
    age: 28,
    height: '160 cm',
    weight: '60 kg',
    gender: 'Femenino',
    profileImage: 'assets/profile.jpg'
  };

  habits = [
    {
      title: 'Meditación Diaria',
      duration: '10 minutos',
      frequency: 'Diaria',
      time: '7:00 am',
      startDate: '01 de nov. 2024',
      description: 'Practicar meditación cada mañana para mejorar la concentración y reducir el estrés.',
      streak: 3,
      progress: ['missed', 'completed', 'completed', 'completed', 'missed', 'missed', 'missed'] // Definir los estados de progreso
    },
    {
      title: 'Lectura Diaria',
      duration: '10 minutos',
      frequency: 'Diaria',
      time: '8:00 pm',
      startDate: '20 de oct. 2024',
      description: 'Leer todos los días para adquirir nuevos conocimientos y reducir el estrés.',
      streak: 20,
      progress: ['completed', 'completed', 'completed', 'completed', 'completed', 'completed', 'completed'] // Definir los estados de progreso
    }
  ];
}
