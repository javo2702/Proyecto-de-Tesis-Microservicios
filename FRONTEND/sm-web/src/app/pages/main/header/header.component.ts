import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/model/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  currentUser$ = this.authService.user$;
  user: User | null = null;
  hideOption:Boolean = true

  constructor(private authService: AuthService) {
    this.getModuleName()
  }
  
  logout(): void {
    this.authService.logout();
  }
  getModuleName():void{
    this.currentUser$.subscribe(
      (usuario:any)=>{
        console.log(usuario)
        this.user = usuario
      },
      (error) => {
        alert("Error al obtener el nombre del módulo");
      }
    )
  }
  toggleOption():void{
    this.hideOption = !this.hideOption
  }
}
