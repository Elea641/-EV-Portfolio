import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeUtilService {
  isLightTheme!: boolean;
  private themeSubject = new Subject<boolean>();
  isLightThemeChanged$ = this.themeSubject.asObservable();
  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  loadInitializeTheme(): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return new Observable(observer => {
      setTimeout(() => {
        this.isLoadingSubject.next(false);
        observer.next(true);
        observer.complete();
      }, 2800);
    });
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-theme') {
      this.isLightTheme = true;
      document.body.className = savedTheme;
      this.themeSubject.next(this.isLightTheme);
    } else {
      this.isLightTheme = false;
    }
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
    const themeClass = this.isLightTheme ? 'light-theme' : '';
    document.body.className = themeClass;
    localStorage.setItem('theme', themeClass);
    this.themeSubject.next(this.isLightTheme);
  }
}
