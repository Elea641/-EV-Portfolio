import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { ThemeImages } from 'src/app/home/models/themeImages.interface';

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
  currentImages: ThemeImages;

  themeImages: { light: ThemeImages; dark: ThemeImages } = {
    light: {
      moon: 'assets/pictures/logo-sun-dark.png',
      github: 'assets/pictures/logo-github-dark.png',
      linkedin: 'assets/pictures/logo-linkedin-dark.png',
      burger: 'assets/pictures/logo-burger-bar-dark.png',
    },
    dark: {
      moon: 'assets/pictures/logo-moon-light.png',
      github: 'assets/pictures/logo-github-light.png',
      linkedin: 'assets/pictures/logo-linkedin-light.png',
      burger: 'assets/pictures/logo-burger-bar-light.png',
    },
  };

  constructor(public themeUtilService: ThemeUtilService) {
    this.currentImages = this.themeUtilService.updateImages(this.themeImages);
  }

  ngOnInit() {
    this.themeUtilService.toggleTheme();
    this.currentImages = this.themeUtilService.updateImages(this.themeImages);
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
    this.currentImages = this.themeUtilService.updateImages(this.themeImages);
  }
}
