import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from './entidad';

import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class EntidadService {
    private apiUrl = environment.baseUrl + 'courses.json';

constructor(private http: HttpClient) { }

getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.apiUrl);
  }
}
