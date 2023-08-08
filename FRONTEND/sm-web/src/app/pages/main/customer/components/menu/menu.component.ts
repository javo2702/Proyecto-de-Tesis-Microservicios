import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/backend/interfaces/categoria';
import { Producto } from 'src/app/backend/interfaces/producto';
import { ApiService } from 'src/app/backend/services/api.service';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  categoria:string = ""
  selectedPlatos:boolean = true
  productosMostrar:Producto[] = []
  productosMostrarCopy:Producto[] = []
  categoriaMostrar:Categoria[] = []
  platos: Producto[] = []
  bebidos: Producto[] = []
  platosCopy: Producto[] = []
  bebidosCopy: Producto[] = []
  categoriasapi: Categoria[] | undefined;
  categoriacopy1: Categoria[] | undefined;
  categoriacopy2: Categoria[] | undefined;
  categoryFood:Categoria[] = [];
  categoryDrink:Categoria[] = [];
  selectedFoodCategory:number = -1
  selectedDrinkCategory:number = -1
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private authService: AuthService,
    private apiService: ApiService,
    public http: HttpClient,
    private cdr:ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    this.getFood()
    this.getDrink()
    this.getCategories()
  }
  getFood(){
    this.apiService.getFoodList()
      .then(productos => {
        this.platos = productos
        this.platosCopy = this.platos
        this.productosMostrar = this.platosCopy
        this.productosMostrarCopy = this.productosMostrar
        this.cdr.detectChanges()
      })
      .catch(error => {
        console.error(error);
      });
  }
  getDrink(){
    this.apiService.getDrinkList()
      .then(productos => {
        this.bebidos = productos
        this.bebidosCopy = this.bebidos
        this.cdr.detectChanges()
      })
      .catch(error => {
        console.error(error);
      });
  }
  getCategories(){
    this.apiService.getCategoryList()
      .then(categorias => {
        this.categoriasapi = categorias;
        this.categoriacopy1 = this.categoriasapi
        this.categoriacopy2 = this.categoriasapi
        this.categoriacopy1.forEach((c)=>{
          if(c.idcategoria<14 || c.idcategoria > 17){
            this.categoryFood?.push(c)
            this.cdr.detectChanges()
          } else{
            this.categoryDrink?.push(c)
            this.cdr.detectChanges()
          }
          this.categoriaMostrar = this.categoryFood
        })
        this.cdr.detectChanges()
      })
      .catch(error => {
        console.error(error);
      });
  }
  changeProducsCategoriesPlatos(){
    this.selectedPlatos = true;
    this.productosMostrar = this.platos
    this.productosMostrarCopy = this.productosMostrar
    this.categoriaMostrar = this.categoryFood
  }
  changeProducsCategoriesBebidas(){
    this.selectedPlatos = false;
    this.productosMostrar = this.bebidos
    this.productosMostrarCopy = this.productosMostrar
    this.categoriaMostrar = this.categoryDrink
  }
  getPlatosByCategory(nombre:Categoria){
    this.categoria = nombre.nombre
    let actived = this.categoriasapi?.indexOf(nombre)!
    let previousActived = this.selectedFoodCategory
    this.selectedFoodCategory = actived
    this.categoriasapi![actived].actived = true
    if(previousActived!= -1){
      this.categoriasapi![previousActived].actived = false
    }
    this.productosMostrar = this.productosMostrarCopy.filter(({categoria}:Producto)=>{
      return categoria.toLowerCase().includes(nombre.nombre)
    })
  }
  getBebidasByCategory(nombre:Categoria){
    let actived = this.categoriasapi?.indexOf(nombre)!
    let previousActived = this.selectedDrinkCategory
    this.selectedDrinkCategory = actived
    this.categoriasapi![actived].actived = true
    if(previousActived!= -1){
      this.categoriasapi![previousActived].actived = false
    }
    this.bebidos = this.bebidosCopy.filter(({categoria}:Producto)=>{
      return categoria.toLowerCase().includes(nombre.nombre)
    })  
  }
}
