import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js'
import { ApiService } from '../../services/api.services'; 

Chart.register(...registerables)

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: any;
  chartData: any[] = []; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchDataAndCreateChart();
  }

  fetchDataAndCreateChart(): void {
    this.apiService.request<any[]>('/user/get-by-day', 'GET').then(
      (data) => {
        this.chartData = data;
        this.createChart();
      },
      (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }

  createChart(): void {
    const dates = this.chartData.map((item) => item.date);
    const counts = this.chartData.map((item) => item.count);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            label: "Nombre d'utilisateurs inscrits par jour",
            data: counts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)', 
            borderColor: 'rgba(54, 162, 235, 1)', 
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Dates',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Nombre d'utilisateurs",
            },
          },
        },
      },
    });
  }
}