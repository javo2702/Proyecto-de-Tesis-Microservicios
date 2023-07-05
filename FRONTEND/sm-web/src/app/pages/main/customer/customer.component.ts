import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/backend/interfaces/categoria';
import { Producto } from 'src/app/backend/interfaces/producto';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from 'src/app/backend/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent {

}
