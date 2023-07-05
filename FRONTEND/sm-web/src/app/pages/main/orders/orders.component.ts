import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit{
  tableSelected: number = -1;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.navigate(['/orders/tables']);
  }
}
