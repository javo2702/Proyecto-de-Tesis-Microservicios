import { Injectable } from '@angular/core';
import { Filtro, FiltroVentas } from '../interfaces/filtro';
import { Transaccion, TransaccionRequest } from '../interfaces/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor() { }
  getTransaccionesFecha(filtro:Filtro):Promise<Transaccion[]>{
    const url = `${this.apiUrl}/transaction/lista-transacciones`;
    return new Promise((resolve,reject)=>{
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({...filtro})
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then((data)=>{
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
  getPagosFecha(filtro:Filtro):Promise<Transaccion[]>{
    const url = `${this.apiUrl}/transaction/lista-transacciones-payments`;
    return new Promise((resolve,reject)=>{
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({...filtro})
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then((data)=>{
        if(Array.isArray(data)){
          const transacciones: Transaccion[] = data.map(item=>({
            idtransaccion: item.idtransaccion,
            monto: item.monto,
            fecha: item.fecha,
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
  registrarPago(pago:TransaccionRequest):Promise<Transaccion>{
    const url = `${this.apiUrl}/transaction/save-transaccion-payment`;
    return new Promise((resolve,reject)=>{
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({...pago})
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then((data)=>{
        if(data){
          const transacciones: Transaccion = {
            idtransaccion: data.idtransaccion,
            monto: data.monto,
            fecha: data.fecha,
            tipo: data.tipo,
            descripcion: data.descripcion
          }
          resolve(transacciones)
        } else{
          throw new Error("Error al registrar pago")
        }
      })
      .catch(error=>{
        reject(error)
      })
    })
  }
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
        console.table(response)
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
        console.error(error)
        reject(error)
      })
    })
  }
  getVentasFecha(filtro:Filtro):Promise<Transaccion[]>{
    const url = `${this.apiUrl}/transaction/lista-transacciones-order`;
    return new Promise((resolve,reject)=>{
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({...filtro})
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then((data)=>{
        if(Array.isArray(data)){
          const transacciones: Transaccion[] = data.map(item=>({
            idtransaccion: item.idtransaccion,
            monto: item.monto,
            fecha: item.fecha,
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
  registrarOrder(order:TransaccionRequest):Promise<Transaccion>{
    const url = `${this.apiUrl}/transaction/save-transaccion-order`;
    return new Promise((resolve,reject)=>{
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({...order})
        }
      )
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then((data)=>{
        if(data){
          const transacciones: Transaccion = {
            idtransaccion: data.idtransaccion,
            monto: data.monto,
            fecha: data.fecha,
            idorigen: data.idorigen,
            tipo: data.tipo,
            descripcion: data.descripcion
          }
          resolve(transacciones)
        } else{
          throw new Error("Error al registrar pago")
        }
      })
      .catch(error=>{
        reject(error)
      })
    })
  }
}
