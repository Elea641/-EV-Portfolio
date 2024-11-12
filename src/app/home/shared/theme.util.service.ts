import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeUtilService {
  isLightTheme!: boolean;
  private themeSubject = new Subject<boolean>();
  isLightThemeChanged$ = this.themeSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
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
    const themeClass = this.isLightTheme ? 'light-theme' : 'dark-theme';
    document.body.className = themeClass;
    localStorage.setItem('theme', themeClass);
    this.themeSubject.next(this.isLightTheme);
  }
}
