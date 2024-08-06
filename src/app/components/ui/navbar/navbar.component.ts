import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger?.addEventListener('click', () => {
      navLinks?.classList.toggle('nav-active');
    });
  }
}
