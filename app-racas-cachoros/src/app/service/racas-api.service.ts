import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Raca } from '../model/raca.model';

@Injectable({
  providedIn: 'root'
})
export class RacasApiService {

  private apiUrl = 'https://api.thedogapi.com/v1/breeds';

  constructor(private http: HttpClient) { }

  getRacas(): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.apiUrl);
  }
}
