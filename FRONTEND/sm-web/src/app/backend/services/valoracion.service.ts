import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Valoracion, ValoracionRequest } from '../interfaces/valoracion';
import { Filtro } from '../interfaces/filtro';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  private apiUrl = 'http://192.168.18.12:8089';
  
  constructor(private http: HttpClient) { }
  
  public getListaValoraciones(filtro:Filtro): Promise<Valoracion[]>{
    const url = `${this.apiUrl}/valoration/lista-valoracion`;
    return new Promise((resolve, reject) => {
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify({...filtro}),
        }
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
          if (Array.isArray(data)) {
            const valoraciones: Valoracion[] = data.map(item => ({
              idvaloracion:item.idvaloracion,
              usuario:item.usuario,
              nombres: item.nombres,
              valoracion:item.valoracion,
              opinion:item.opinion,
              fecha:item.fecha,
              clasificacion:item.clasificacion,
              idpedido:item.idpedido
            }));
            resolve(valoraciones);
          } else {
            throw new Error('La respuesta no es un arreglo.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  public setValoracion(valoracion:ValoracionRequest): Promise<Valoracion>{
    const url = `${this.apiUrl}/valoration/save-valoracion`;
    return new Promise((resolve, reject) => {
      fetch(
        url,
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify({...valoracion}),
        }
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud.');
          }
          return response.json();
        })
        .then(data => {
          if (data) {
            const valoracion: Valoracion = {
              idvaloracion:data.idvaloracion,
              usuario:data.usuario,
              nombres: data.nombres,
              valoracion:data.valoracion,
              opinion:data.opinion,
              fecha:data.fecha,
              clasificacion:data.clasificacion,
              idpedido:data.idpedido
            }
            resolve(valoracion);
          } else {
            throw new Error('Error al obtener la respuesta.');
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
