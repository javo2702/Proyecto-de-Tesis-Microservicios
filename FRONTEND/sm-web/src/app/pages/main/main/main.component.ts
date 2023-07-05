import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/model/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  currentUser$ = this.authService.user$;
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.getModuleName()
  }
  getModuleName():void{
    this.currentUser$.subscribe(
      (usuario:any)=>{
        this.user = usuario
      },
      (error) => {
        alert("Error al obtener el nombre del módulo");
      }
    )
  }
}
