import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipoDetail } from './equipo-detail';
import { environment } from '../../environments/environment.development';
import { catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl: string = environment.baseUrl + 'equipos'; 

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<EquipoDetail[]> {
    return this.http
      .get<EquipoDetail[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }
  getEquipo(marca: string): Observable<EquipoDetail> {
    return this.http.get<EquipoDetail>(this.apiUrl + '/' + marca);
  }

  createBook(equipo: EquipoDetail): Observable<EquipoDetail> {
    return this.http.post<EquipoDetail>(this.apiUrl, equipo);
  }

  createEmpresaEquipo(marca: string, idEmpresa: number) {
    return this.http.post(
      this.apiUrl + '/' + marca + '/authors/' + idEmpresa,
      undefined
    );
  }
}





 

