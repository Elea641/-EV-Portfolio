import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  getByName(url: string, name: string): Observable<T | null> {
    const dataList$ = this.getAll(url);
    return dataList$.pipe(
      map((dataList: T[]) => {
        const project = dataList.find((item: any) => item.name === name);
        return project || null;
      })
    );
  }

}
