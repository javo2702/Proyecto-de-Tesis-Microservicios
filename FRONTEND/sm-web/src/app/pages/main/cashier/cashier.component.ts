import { formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/backend/interfaces/notification';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit{
  constructor(private cdr:ChangeDetectorRef) { }
  ngOnInit() {
    this.connect();
  }
  noti:Notificacion = {message:"",time:""}
  notifications: Notificacion[] = []
  showNotification = false;
  connect(): void {
      console.log("init")
      let source = new EventSource('http://192.168.18.12:8089/sse/cashier');
      source.addEventListener('message', message => {
        console.log("a: "+message.data); 
        console.log(formatDate(new Date().toUTCString(),'dd/MM/yyyy HH:mm:ss','es'))
        //this.myData = message.data
        var not:Notificacion = {message:message.data.toString(),'time':formatDate(new Date().toUTCString(),'dd/MM/yyyy HH:mm:ss','es')}
        this.notifications.push(not)
        this.noti = this.notifications[this.notifications.length-1]
        this.showNotification = true
        setTimeout(() => {
          this.showNotification = false
          this.cdr.detectChanges()
        }, 5000);
        this.cdr.detectChanges()    
      });
      console.log("finish")
  }
}
