import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlApi: string = environment.urlApi
  constructor(private _httpClient: HttpClient) { }
  public getAllLibros(): Observable<Array<any>> {
    let url = this.urlApi + '/get/?category=libros_programacion&criteria=most_viewed';
    return this._httpClient.get<Array<any>>(url);
  }
  public getLibro(userId: string): Observable<any> {
    let url = this.urlApi +"get/?id=" + userId;
    return this._httpClient.get<any>(url);
  }
}
