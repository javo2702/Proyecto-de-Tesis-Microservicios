import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {
  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "cantidad",
          data: [400, 430, 448]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          },
          horizontal: true,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Positiva",
          "Neutral",
          "Negativa",
        ]
      }
    };
  }
}
