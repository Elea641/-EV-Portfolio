import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ThemeUtilService } from './home/shared/theme.util.service';
import { LoaderComponent } from './components/ui/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EVPortfolio';
  isLoading = false;

  constructor(private themeService: ThemeUtilService) {}

  ngOnInit(): void {
    this.themeService.isLoading$.subscribe(loading => {
      this.isLoading = loading;
    });

    this.themeService.loadInitializeTheme().subscribe();
  }
}
