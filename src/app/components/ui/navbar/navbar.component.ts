import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  isNavActive = false;
  isScrolled = false;
  isDarkTheme!: boolean;

  constructor(public themeUtilService: ThemeUtilService) {}

  ngOnInit() {
    this.isDarkTheme =
      localStorage.getItem('theme') === 'dark-theme' ? true : false;

    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }

  ngAfterViewInit() {
    const burger = document.getElementById('burger');
    burger?.addEventListener('click', () => {
      this.isNavActive = !this.isNavActive;
    });
  }

  closeMenu() {
    this.isNavActive = false;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    const target = event.target as HTMLElement;
    const navLinks = document.getElementById('nav-links');
    const burger = document.getElementById('burger');

    if (navLinks && !navLinks.contains(target) && !burger?.contains(target)) {
      this.isNavActive = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleTheme() {
    this.themeUtilService.toggleTheme();
  }
}
