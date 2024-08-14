import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Raca } from '../model/raca.model';

@Injectable({
  providedIn: 'root'
})
export class RacasApiService {

  private apiUrl = 'https://api.thedogapi.com/v1/breeds';

  constructor(private http: HttpClient) {}

  getRacas(): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  
  getRacaById(id: number): Observable<Raca> {
    return this.http.get<Raca>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError(() => new Error('Ocorreu um erro ao acessar a API. Por favor, tente novamente mais tarde.'));
  }
}
