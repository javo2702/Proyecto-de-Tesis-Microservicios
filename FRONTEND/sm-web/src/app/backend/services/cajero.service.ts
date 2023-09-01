import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoResponse, DetallesPedidoResponse } from '../interfaces/pedido';
import { Mesa } from '../interfaces/mesa';
import { Responsee } from '../interfaces/response';
import { Filtro } from '../interfaces/filtro';
import { Transaccion, TransaccionRequest } from '../interfaces/transaccion';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor(private http: HttpClient) { }
  getPedidoDetalleMesa(id:number):Promise<PedidoResponse>{
    const url = `${this.apiUrl}/order/orderlist/${id}/detalles/table`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            let detalles:DetallesPedidoResponse[] = []
            data.detalles.forEach((d:any)=>{
              detalles.push({
                iddetalles_pedido: d.iddetalles_pedido,
                idproducto: d.idproducto,
                cantidad: d.cantidad
              })
            })
            const pedidos: PedidoResponse = {
              idpedido: data.idpedido,
              fecha: data.fecha,
              monto: data.monto,
              estado: data.estado,
              idcliente: data.idcliente,
              idmozo: data.idmozo,
              idcomprobante: data.idcomprobante,
              idmesa: data.idmesa,
              numero:data.numero,
              estado_mes:data.estado_mes,
              detalles:detalles
            }
            resolve(pedidos);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  endOrderState(id:number):Promise<Responsee>{
    const url = `${this.apiUrl}/order/orderlist/order/${id}/end-state`;
    return new Promise((resolve, reject) => {
      fetch(
        url, {
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({}),
        }
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(res => {
          if (res) {
            resolve(res);
          } else {
            throw new Error('Error al obtener respuesta.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  restoreTableState(id:number):Promise<Mesa[]>{
    const url = `${this.apiUrl}/order/orderlist/table/${id}/restore-state`;
    return new Promise((resolve, reject) => {
      fetch(
        url, {
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({}),
        }
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const mesas: Mesa[] = data.map(item => ({
              idmesa:item.idmesa,
              numero:item.numero,
              capacidad:item.capacidad,
              ubcacion:item.ubicacion,
              estado:item.estado
            }));
            resolve(mesas);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
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
}
