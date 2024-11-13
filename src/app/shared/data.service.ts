import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {
  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  getByName(url: string, name: string): Observable<T> {
    return this.http.get<T>(`${url}?name=${name}`);
  }
}
