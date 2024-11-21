import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { CarouselProjectComponent } from '../carousel-project/carousel-project.component';
import { RouterModule } from '@angular/router';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule, CarouselProjectComponent, RouterModule],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent implements OnInit {
  @Input() project!: Project;
  isDarkTheme = false;

  constructor(public themeUtilService: ThemeUtilService) {}

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
