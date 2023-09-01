import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {Observable} from "rxjs";
import { formatDate } from '@angular/common';
import { Notificacion } from './backend/interfaces/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'sm-web';


}
