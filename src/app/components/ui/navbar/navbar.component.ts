import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  isNavActive = false;
  isLightTheme = false;
  isScrolled = false;

  themeImages = {
    light: {
      moon: 'assets/pictures/logo-moon-light.png',
      github: 'assets/pictures/logo-github-light.png',
      linkedin: 'assets/pictures/logo-linkedin-light.png',
      burger: 'assets/pictures/logo-burger-bar-light.png',
    },
    dark: {
      moon: 'assets/pictures/logo-sun-dark.png',
      github: 'assets/pictures/logo-github-dark.png',
      linkedin: 'assets/pictures/logo-linkedin-dark.png',
      burger: 'assets/pictures/logo-burger-bar-dark.png',
    },
  };

  currentImages = this.themeImages.light;


  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light-theme';
    document.body.className = this.isLightTheme ? 'light-theme' : '';
    this.updateImages();
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
    this.isLightTheme = !this.isLightTheme;
    const themeClass = this.isLightTheme ? 'light-theme' : '';
    document.body.className = themeClass;
    localStorage.setItem('theme', themeClass);
    this.updateImages(); 
    }

    updateImages() {
      this.currentImages = this.isLightTheme ? this.themeImages.dark : this.themeImages.light;
    }
}
