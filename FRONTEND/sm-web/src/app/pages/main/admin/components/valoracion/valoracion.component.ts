import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { format } from "date-fns";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import { Filtro } from "src/app/backend/interfaces/filtro";
import { Valoracion } from "src/app/backend/interfaces/valoracion";
import { ValoracionService } from "src/app/backend/services/valoracion.service";

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
export class ValoracionComponent implements OnInit{
  positivos:number = 0
  negativos:number = 0
  neutrales:number = 0
  valoracionesSuccess:Boolean = false
  valoracionesListSuccess:Boolean = false
  loading:Boolean = true
  message:string = ""
  fecha = format(new Date(), 'yyyy-MM-dd');
  listaValoraciones: Valoracion[] = []
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor(private cdr:ChangeDetectorRef,private valoracionService: ValoracionService) {
    this.chartOptions = {
      series: [
        {
          name: "cantidad",
          data: [this.positivos, this.neutrales, this.negativos]
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
    console.log(this.chartOptions.series?.length)
  }
  ngOnInit(): void {
    this.getListaValoraciones()
    this.cdr.detectChanges()
  }
  getListaValoraciones(){
    const currentDate = new Date()
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    var filtro:Filtro = {
      fecha: "%"+formattedDate+"%"
    }
    this.valoracionService.getListaValoraciones(filtro)
    .then(valoraciones=>{
      this.message = ""
      this.valoracionesListSuccess = true
      valoraciones.forEach((v)=>{
        this.listaValoraciones.push(v);
      })
      this.calcularPositivos()
      this.calcularNegativos()
      this.calcularNeutrales()
      this.actualizarGrafico();
      this.valoracionesSuccess = true
      this.loading = false
      this.cdr.detectChanges()
    })
    .catch(error => {
      this.message = "No se ha podido cargar los datos, intentelo más tarde"
      this.loading = false
      this.cdr.detectChanges()
      console.error(error);
    });
  }
  calcularPositivos(){
    this.listaValoraciones.forEach((v)=>{
      if(v.clasificacion?.toLocaleLowerCase()=='positivo'){
        this.positivos = this.positivos + 1
      }
    })
    this.actualizarGrafico();
  }
  calcularNegativos(){
    this.listaValoraciones.forEach((v)=>{
      if(v.clasificacion?.toLocaleLowerCase()=='negativo'){
        this.negativos = this.negativos + 1
      }
    })
    this.actualizarGrafico();
  }
  calcularNeutrales(){
    this.listaValoraciones.forEach((v)=>{
      if(v.clasificacion?.toLocaleLowerCase()=='neutral'){
        this.neutrales = this.neutrales + 1
      }
    })
    this.actualizarGrafico();
  }
  actualizarGrafico(): void {
    this.chartOptions.series = [
      {
        name: "cantidad",
        data: [this.positivos, this.neutrales, this.negativos]
      }
    ];
    this.chartOptions = { ...this.chartOptions }; // Forzar actualización
  }
}
