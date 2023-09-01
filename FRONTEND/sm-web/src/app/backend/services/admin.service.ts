import { Injectable } from '@angular/core';
import { FiltroVentas } from '../interfaces/filtro';
import { Transaccion } from '../interfaces/transaccion';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor() { }
  getVentasSemanales(filtro:FiltroVentas):Promise<Transaccion[]>{
    const url = `${this.apiUrl}/transaction/ventas-semanales`;
    return new Promise((resolve,reject)=>{
      fetch(
        url, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({...filtro}),
        }
      ).then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      }).then((data)=>{
        if(Array.isArray(data)){
          const transacciones: Transaccion[] = data.map(item=>({
            idtransaccion: item.idtransaccion,
            monto: item.monto,
            fecha: item.fecha,
            idorigen: item.idorigen,
            tipo: item.tipo,
            descripcion: item.descripcion
          }));
          resolve(transacciones)
        } else{
          throw new Error("Error al obtener los datos")
        }
      })
      .catch(error=>{
        reject(error)
      })
    })
  }
}
