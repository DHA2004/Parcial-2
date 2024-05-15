import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class PacienteService {
    private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }
}
