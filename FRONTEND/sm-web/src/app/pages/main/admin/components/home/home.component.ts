import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
export type ChartOptionsPie = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptionsPie: Partial<ChartOptionsPie>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Ventas",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return "S/. " + val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          },
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      xaxis: {
        categories: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      title: {
        text: "Ventas por semana",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444",
        }
      }
    };
    this.chartOptionsPie = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 400,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 2000,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 1280,
          options: {
            chart: {
              width: 340
            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
