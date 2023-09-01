import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://192.168.18.12:8089';
  constructor() { }
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
  public getProductList(): Promise<Producto[]> {
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
  public getFoodList(): Promise<Producto[]> {
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
  public getDrinkList(): Promise<Producto[]> {
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
  public getProduct(idproducto:number): Promise<Producto> {
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
}
