import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Project } from 'src/app/home/models/project.type';
import { PortfolioComponent } from '../../ui/portfolio/portfolio.component';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-project-list-data',
  standalone: true,
  imports: [CommonModule, PortfolioComponent],
  templateUrl: './project-list-data.component.html',
  styleUrls: ['./project-list-data.component.scss'],
})
export class ProjectListDataComponent {
  projects$: Observable<Project[]> = this.dataService.getAll(
    'assets/datas/list-projects.json'
  );

  constructor(private dataService: DataService<Project>) {}
}
