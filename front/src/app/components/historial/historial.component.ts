import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-historial',
  standalone: true,
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.createEnergyChart();
    this.createDailyChart();
  }

  createEnergyChart() {
    const ctx = document.getElementById('energyChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        datasets: [
          {
            label: 'Energía Esperada',
            data: [130, 160, 180, 210, 200, 230, 220, 240, 190, 180, 170, 200],
            backgroundColor: 'rgba(25, 118, 210, 0.9)', // Azul más oscuro
            borderColor: 'rgba(21, 101, 192, 1)', // Azul más oscuro para el borde
            borderWidth: 1,
            barPercentage: 0.6, // Ajusta el porcentaje del ancho de la barra
            categoryPercentage: 0.8, // Ajusta el porcentaje del ancho total de las barras
            borderSkipped: false,
          },
          {
            label: 'Energía Generada',
            data: [120, 150, 170, 200, 190, 220, 210, 230, 180, 170, 160, 190],
            backgroundColor: 'rgba(255, 165, 0, 0.9)', // Naranja más oscuro
            borderColor: 'rgba(255, 140, 0, 1)', // Naranja más oscuro para el borde
            borderWidth: 1,
            barPercentage: 0.6, // Ajusta el porcentaje del ancho de la barra
            categoryPercentage: 0.8, // Ajusta el porcentaje del ancho total de las barras
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.dataset.label || '';
                const value = context.raw;
                return `${label}: ${value} kWh`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: false, // No apilar las barras
            grid: {
              display: true,
              color: '#d3d3d3', // Color gris para las líneas de la cuadrícula
            },
            ticks: {
              autoSkip: true,
              maxRotation: 45,
              minRotation: 0,
            },
          },
          y: {
            stacked: false, // No apilar las barras
            beginAtZero: true,
            grid: {
              display: true,
              color: '#d3d3d3', // Color gris para las líneas de la cuadrícula
            },
            title: {
              display: true,
              text: 'Energía (kWh)',
            },
          },
        },
      },
    });
  }

  createDailyChart() {
    const ctx = document.getElementById('dailyChart') as HTMLCanvasElement;

    const energyGenerated = Array.from(
      { length: 31 },
      () => Math.floor(Math.random() * 20) + 10
    );
    const energyExpected = Array.from(
      { length: 31 },
      () => Math.floor(Math.random() * 20) + 15
    );

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // Días del mes
        datasets: [
          {
            label: 'Energía Esperada',
            data: energyExpected,
            backgroundColor: 'rgba(25, 118, 210, 0.9)', // Azul más oscuro
            borderColor: 'rgba(21, 101, 192, 1)', // Azul más oscuro para el borde
            borderWidth: 1,
            barPercentage: 0.6, // Ajusta el porcentaje del ancho de la barra
            categoryPercentage: 0.8, // Ajusta el porcentaje del ancho total de las barras
            borderSkipped: false,
          },
          {
            label: 'Energía Generada',
            data: energyGenerated,
            backgroundColor: 'rgba(255, 165, 0, 0.9)', // Naranja más oscuro
            borderColor: 'rgba(255, 140, 0, 1)', // Naranja más oscuro para el borde
            borderWidth: 1,
            barPercentage: 0.6, // Ajusta el porcentaje del ancho de la barra
            categoryPercentage: 0.8, // Ajusta el porcentaje del ancho total de las barras
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.dataset.label || '';
                const value = context.raw;
                return `${label}: ${value} kWh`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: false, // No apilar las barras
            grid: {
              display: true,
              color: '#d3d3d3', // Color gris para las líneas de la cuadrícula
            },
            ticks: {
              autoSkip: true,
              maxRotation: 45,
              minRotation: 0,
            },
          },
          y: {
            stacked: false, // No apilar las barras
            beginAtZero: true,
            grid: {
              display: true,
              color: '#d3d3d3', // Color gris para las líneas de la cuadrícula
            },
            title: {
              display: true,
              text: 'Energía (kWh)',
            },
          },
        },
      },
    });
  }
}
