import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { format } from "date-fns";
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
import { FiltroVentas } from "src/app/backend/interfaces/filtro";
import { Transaccion } from "src/app/backend/interfaces/transaccion";
import { TransaccionService } from "src/app/backend/services/transaccion.service";

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
export class HomeComponent implements OnInit{
  success:Boolean = false
  loadingVentasSemanales:Boolean = true
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public chartOptionsPie!: Partial<ChartOptionsPie>;
  mensaje: string = ""
  ventasSemanales: Transaccion[] = []
  ventas: number[] = [0.0,0.0,0.0,0.0,0.0,0.0,0.0]
  constructor(private transaccionService: TransaccionService,private cdr:ChangeDetectorRef) {    
    this.graficoVentas()

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
  graficoVentas(){
    this.chartOptions = {
      series: [
        {
          name: "Ventas",
          data: this.ventas
        }
      ],
      chart: { height: 350, type: "bar" },
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
        categories: [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ],
        position: "top",
        labels: { offsetY: -18 },
        axisBorder: { show: false },
        axisTicks: { show: false },
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
        tooltip: { enabled: true, offsetY: -35}
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
  }
  ngOnInit(): void {
    this.graficoVentas()
    this.getVentasSemanales(new Date('2023-08-29 12:00:00'))
  }
  getVentasSemanales(fecha:Date){
    /*let fecha = new Date('2023-08-23 12:00:00')
    console.log(format(fecha, 'yyyy-MM-dd'))
    console.log(fecha.getDate())
    console.log(fecha.getDay())
    console.log(format(new Date(new Date().setDate(fecha.getDate() - (fecha.getDay()-1))),'yyyy-MM-dd'))
    console.log(format(new Date(new Date().setDate(fecha.getDate() + (7-fecha.getDay()))),'yyyy-MM-dd'))
    */
    var filtro: FiltroVentas = {
      fechaini: format(new Date(new Date(fecha).setDate(fecha.getDate() - (fecha.getDay()-1))),'yyyy-MM-dd'),
      fechafin: format(new Date(new Date(fecha).setDate(fecha.getDate() + (7-fecha.getDay()))),'yyyy-MM-dd')
    }
    this.transaccionService.getVentasSemanales(filtro)
    .then(transacciones=>{
        this.loadingVentasSemanales = false
        this.ventasSemanales = transacciones
        this.success = true
        this.llenarGrafico()
        this.cdr.detectChanges();
    })
    .catch(error=>{
      this.loadingVentasSemanales = false
      this.success = false
      console.log(error)
      this.mensaje = error
      this.cdr.detectChanges();
    })
  }
  llenarGrafico():void{
    console.table(this.ventasSemanales)
    let fecha_aux = format(new Date(this.ventasSemanales[0].fecha), 'yyyy-MM-dd')
    let cantidad = 0
    this.ventasSemanales.forEach((v)=>{
      if(format(new Date(v.fecha), 'yyyy-MM-dd')==fecha_aux){
        this.ventas[cantidad] = this.ventas[cantidad] + v.monto  
      } else{
        cantidad += 1
        fecha_aux = format(new Date(v.fecha), 'yyyy-MM-dd')
      }
    })
    this.actualizarVentas()
  }
  actualizarVentas():void{
    this.chartOptions.series = [
      {name: "Ventas",data: this.ventas}
    ];
    this.chartOptions = {...this.chartOptions}
    this.loadingVentasSemanales = false
    this.cdr.detectChanges()
  }
}
