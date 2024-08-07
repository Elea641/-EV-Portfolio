import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly jsonUrl = 'assets/datas/list-projects.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }
}
