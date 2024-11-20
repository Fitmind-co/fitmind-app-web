import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
  user = {
    name: 'Sofía Ramírez',
    age: 28,
    height: '1.60 cm',
    weight: '60 kg',
    gender: 'Femenino'
  };

  exercises = [
    {
      title: 'Sentadillas con Peso Corporal',
      series: '3 x 15',
      rest: '1 minuto entre series',
      instructions: 'Mantén la espalda recta y baja hasta que las rodillas formen un ángulo de 90 grados...',
      image: 'sentadillas.jpg',
      status: 'done' // Clase aplicada dinámicamente
    },
    {
      title: 'Flexiones',
      series: '3 x 10',
      rest: '1 minuto entre series',
      instructions: 'Mantén el cuerpo alineado y baja hasta que los codos formen un ángulo de 90 grados...',
      image: 'flexiones.jpg',
      status: 'pending' // Clase aplicada dinámicamente
    }
  ];
}
