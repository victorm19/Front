import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InsertarPersona } from '../entities/insertarPersona';

const baseUrl = environment.baseUrlPersona;

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private readonly http: HttpClient) { }

  insertarPersona(data: InsertarPersona) {
    return this.http.post(`${baseUrl}`, data);
  }

  consultarPersona() {
    return this.http.get(`${baseUrl}/ObtenerPersonas`);
  }

}
