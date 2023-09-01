import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValoracionRequest } from 'src/app/backend/interfaces/valoracion';
import { ValoracionService } from 'src/app/backend/services/valoracion.service';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent {
  loading:Boolean = false
  success:Boolean = false
  successMessage:string = ""
  messageError:string = "";
  error:Boolean = false;
  opinionForm = new FormGroup({
    codigo: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    nombres: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
    opinion: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
    }),
  });
  maxRating: number = 5;
  initialRating: number = 0;

  stars: number[] = [];
  currentRating: number = this.initialRating;

  constructor(private cdr:ChangeDetectorRef,private valoracionService: ValoracionService){}

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
    this.currentRating = this.initialRating;
  }

  rate(rating: number) {
    this.currentRating = rating;
  }
  valorar(){
    if(this.opinionForm.valid){
      var valoracion: ValoracionRequest = {
        usuario: "undefined",
        nombres: this.opinionForm.get("nombres")?.value!,
        valoracion: this.currentRating,
        opinion: this.opinionForm.get("opinion")?.value!,
        clasificacion: "",
        idpedidoin: parseInt(this.opinionForm.get("codigo")?.value!)
      }
      this.loading = true
      this.valoracionService.setValoracion(valoracion)
        .then(valoracionRegistrada=>{
          this.loading = false
          this.success = true
          this.successMessage = "Opinion registrada"
          this.cdr.detectChanges()
          this.opinionForm.reset({
            codigo: '',
            nombres: '',
            opinion: '',
          })
          this.currentRating = 0;
          setTimeout(() => {
            this.success = false
            this.cdr.detectChanges()
          }, 4500);
        })
        .catch(error => {
          this.error = true
          this.messageError = "Hubo un problema al intentar registrar su valoración, intentelo nuevamente luego"
          setTimeout(() => {
            this.error = false
            this.cdr.detectChanges()
          }, 1500);
        });
    } else{
      this.error = true
      this.messageError = "Debe llenar todos los campos"
      setTimeout(() => {
        this.error = false
        this.cdr.detectChanges()
      }, 1500);
    }
    
  }
}
