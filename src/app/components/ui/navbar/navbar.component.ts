import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  isNavActive = false;
  isScrolled = false;
  isDarkTheme!: boolean;

  constructor(
    public themeUtilService: ThemeUtilService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === '' ? true : false;

    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });

    this.router.events.subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }

  ngAfterViewInit() {
    const burger = document.getElementById('burger');
    burger?.addEventListener('click', () => {
      this.isNavActive = !this.isNavActive;
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToFragment();
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

  private scrollToFragment(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        setTimeout(() => {
          window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
        }, 200);
      }
    }
  }
}
