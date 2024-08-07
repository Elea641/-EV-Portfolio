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
}
