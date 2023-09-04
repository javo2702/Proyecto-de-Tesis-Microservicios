import { Injectable } from '@angular/core';
import { Mesa } from '../interfaces/mesa';
import { PedidoResponse, DetallesPedidoResponse, PedidoRequest } from '../interfaces/pedido';
import { Responsee } from '../interfaces/response';
import { environment } from 'src/environments/environment';
import { ExchangeRate } from '../interfaces/exchangeRate';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor() { }
  getExchangeRate():Promise<ExchangeRate>{
    const url = `https://v6.exchangerate-api.com/v6/${environment.exchange_rate_api_key}/latest/USD`
    console.log(url)
    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud.');
        }
        return response.json();
      })
      .then(data=>{
        const exchange = {
          result:data.result,
          time_last_update_unix:data.time_last_update_unix,
          time_next_update_unix:data.time_next_update_unix,
          base_code:data.base_code,
          rate:data.conversion_rates.PEN
        }
        resolve(exchange);
      })
      .catch(error => {
        reject(error);
      });
    })
  }
  getPedidos(fecha:string):Promise<PedidoResponse[]>{
    const url = `${this.apiUrl}/order/orderlist?fecha=${fecha}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const pedidos: PedidoResponse[] = data.map(item => ({
              idpedido: item.idpedido,
              fecha: item.fecha,
              monto: item.monto,
              estado: item.estado,
              idcliente: item.idcliente,
              idmozo: item.idmozo,
              idcomprobante: item.idcomprobante,
              idmesa: item.idmesa,
              numero:null,
              estado_mes:null,
              detalles:null
            }));
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
  getPedidoDetalle(id:number):Promise<PedidoResponse>{
    const url = `${this.apiUrl}/order/orderlist/${id}/detalles`;
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
  setPedido(pedido:PedidoRequest):Promise<PedidoResponse>{
    const url = `${this.apiUrl}/order/orderlist/save`;
    return new Promise((resolve, reject) => {
      fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({...pedido}),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud POST.');
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            const pedidoresponse: PedidoResponse = {
              idpedido: data.idpedido,
              fecha: data.fecha,
              monto: data.monto,
              estado: data.estado,
              idcliente: data.idcliente,
              idmozo: data.idmozo,
              idcomprobante: data.idcomprobante,
              idmesa: data.idmesa,
              numero:null,
              estado_mes:null,
              detalles:null
            }
            resolve(pedidoresponse);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  changeStatePedido(id:number,pedido:PedidoRequest,fecha:string):Promise<PedidoResponse[]>{
    const url = `${this.apiUrl}/order/orderlist/order/${id}/state?fecha=${fecha}`;
    return new Promise((resolve, reject) => {
      fetch(
        url, {
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({...pedido}),
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
            const pedidos: PedidoResponse[] = data.map(item => ({
              idpedido: item.idpedido,
              fecha: item.fecha,
              monto: item.monto,
              estado: item.estado,
              idcliente: item.idcliente,
              idmozo: item.idmozo,
              idcomprobante: item.idcomprobante,
              idmesa: item.idmesa,
              numero:null,
              estado_mes:null,
              detalles:null
            }));
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
  getTables():Promise<Mesa[]>{
    const url = `${this.apiUrl}/order/tables`;
    return new Promise((resolve, reject) => {
      fetch(url)
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
  deletePedido(idpedido:number,idmesa:number,fecha:string):Promise<PedidoResponse[]>{
    const url = `${this.apiUrl}/order/orderlist/order/${idpedido}/table/${idmesa}/delete?fecha=${fecha}`;
    return new Promise((resolve, reject) => {
      fetch(
        url, {
          method: 'DELETE'
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
            const pedidos: PedidoResponse[] = data.map(item => ({
              idpedido: item.idpedido,
              fecha: item.fecha,
              monto: item.monto,
              estado: item.estado,
              idcliente: item.idcliente,
              idmozo: item.idmozo,
              idcomprobante: item.idcomprobante,
              idmesa: item.idmesa,
              numero:null,
              estado_mes:null,
              detalles:null
            }));
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
}
