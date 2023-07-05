import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../interfaces/categoria';
import { DetallesPedidoResponse, PedidoRequest, PedidoResponse } from '../interfaces/pedido';
import { Mesa } from '../interfaces/mesa';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor(private http: HttpClient){

  }

  public getCategoryList(): Promise<Categoria[]> {
    const url = `${this.apiUrl}/inventary/categories`;
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
            const categorias: Categoria[] = data.map(item => ({
              idcategoria:item.idcategoria,
              nombre:item.nombre,
              descripcion: item.descripcion,
              estado:item.estado
            }));
            resolve(categorias);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  getProductList(): Promise<Producto[]> {
    const url = `${this.apiUrl}/inventary/products`;
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
            const productos: Producto[] = data.map(item => ({
              idproducto: item.idproducto,
              nombre: item.nombre,
              descripcion: item.descripcion,
              precio: item.precio,
              estado: item.estado,
              descuento: item.descuento,
              imagen: item.imagen,
              categoria: item.categoria
            }));
            resolve(productos);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  getFoodList(): Promise<Producto[]> {
    const url = `${this.apiUrl}/inventary/foodlist`;
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
            const productos: Producto[] = data.map(item => ({
              idproducto: item.idproducto,
              nombre: item.nombre,
              descripcion: item.descripcion,
              precio: item.precio,
              estado: item.estado,
              descuento: item.descuento,
              imagen: item.imagen,
              categoria: item.categoria
            }));
            resolve(productos);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  getDrinkList(): Promise<Producto[]> {
    const url = `${this.apiUrl}/inventary/drinklist`;
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
            const productos: Producto[] = data.map(item => ({
              idproducto: item.idproducto,
              nombre: item.nombre,
              descripcion: item.descripcion,
              precio: item.precio,
              estado: item.estado,
              descuento: item.descuento,
              imagen: item.imagen,
              categoria: item.categoria
            }));
            resolve(productos);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  getProduct(idproducto:number): Promise<Producto> {
    const url = `${this.apiUrl}/inventary/foodlist/show/${idproducto}`;
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
            const productos: Producto = {
              idproducto: data.idproducto,
              nombre: data.nombre,
              descripcion: data.descripcion,
              precio: data.precio,
              estado: data.estado,
              descuento: data.descuento,
              imagen: data.imagen,
              categoria: data.categoria
            };
            resolve(productos);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
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

}
