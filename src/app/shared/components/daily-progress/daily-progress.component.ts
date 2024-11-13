import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-daily-progress',
  templateUrl: './daily-progress.component.html',
  styleUrls: ['./daily-progress.component.css']
})
export class DailyProgressComponent implements OnInit {
  progress = 20; // Ejemplo de progreso total
  chartLabels: Label[] = ['Manejar el estrés', 'Perder peso', 'Dormir temprano'];
  chartData: ChartDataSets[] = [
    {
      data: [20, 50, 30], // Datos de ejemplo para cada objetivo
      backgroundColor: ['#4CAF50', '#FFC107', '#FFEB3B'],
      hoverBackgroundColor: ['#4CAF50', '#FFC107', '#FFEB3B']
    }
  ];
  chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  chartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
