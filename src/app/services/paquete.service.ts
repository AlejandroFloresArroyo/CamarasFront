import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private http: HttpClient) { }

  getFotos(id: string) {
    return this.http.get(`http://localhost:5000/api/paquete/fotos/${id}`)
  }
}
