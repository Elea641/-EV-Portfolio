import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, PortfolioModalComponent, RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent implements OnInit {
  @Input() data!: Project;
  isModalOpen = false;
  isDarkTheme = false;

  constructor(public themeUtilService: ThemeUtilService) {}

  ngOnInit() {
    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }

  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('modal-open');
    }, 0);
  }
}
