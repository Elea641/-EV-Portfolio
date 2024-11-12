import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Project } from 'src/app/home/models/project.type';
import { PortfolioComponent } from '../../ui/portfolio/portfolio.component';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-project-data',
  standalone: true,
  imports: [CommonModule, PortfolioComponent],
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.scss'],
})
export class ProjectDataComponent {
  projects$: Observable<Project[]> = this.dataService.getAll(
    'assets/datas/list-projects.json'
  );

  constructor(private dataService: DataService<Project>) {}
}
