import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from 'src/app/home/models/project.type';
import { HomeService } from 'src/app/home/shared/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  projects$: Observable<Project[]> = this.homeService.getAll();

  constructor(private homeService: HomeService) {}
}
