import { ChangeDetectorRef, Component } from '@angular/core';
import { Categoria } from 'src/app/backend/interfaces/categoria';
import { DetallesPedidoRequest, PedidoRequest, PedidoResponse } from 'src/app/backend/interfaces/pedido';
import { Producto } from 'src/app/backend/interfaces/producto';
import { User } from 'src/app/pages/auth/model/user.interface';
import { OrderItem } from '../register/register.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';
import { ApiService } from 'src/app/backend/services/api.service';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  
}
