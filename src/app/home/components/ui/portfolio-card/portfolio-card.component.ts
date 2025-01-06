import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent implements OnInit {
  @Input() data!: Project;
  isDarkTheme = false;

  constructor(public themeUtilService: ThemeUtilService) { }

  ngOnInit() {
    const themeChoice = localStorage.getItem('theme');
    if (!themeChoice || themeChoice === '') {
      this.isDarkTheme = true;
      localStorage.setItem('theme', '');
    } else {
      this.isDarkTheme = themeChoice === 'ligth-theme';
    }

    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }
}
