import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ArticulosModel } from '../models/articulo.models'


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http:HttpClient) { }
  public apiUrl:string = 'https://quiet-sea-92909.herokuapp.com'

  public getArticulos():Promise<any>{
    return this.http.get(`${this.apiUrl}/api/articulos`).toPromise();
  }

  public getArticuloById(id:number):Promise<any>{
    return this.http.get(`${this.apiUrl}/api/articulos/get/${id}`).toPromise();
  }

  public agregarArticulos(Articulo: ArticulosModel):Promise<any>{
    const url = `${this.apiUrl}/api/articulos/add`
    return this.http.post(url,Articulo).toPromise();
  }

  public eliminarArticulo(id:number):Promise<any>{
    return this.http.delete(`${this.apiUrl}/api/articulos/delete/${id}`).toPromise();
  }
}
