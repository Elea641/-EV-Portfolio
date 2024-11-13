import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { Observable } from 'rxjs';
import { ProjectDetailsCardComponent } from '../../ui/project-details-card/project-details-card.component';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details-data',
  standalone: true,
  imports: [CommonModule, ProjectDetailsCardComponent],
  templateUrl: './project-details-data.component.html',
  styleUrls: ['./project-details-data.component.scss'],
})
export class ProjetDetailsDataComponent implements OnInit {
  project$!: Observable<Project | null>;

  constructor(
    private dataService: DataService<Project>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap
      .get('name')
      ?.replace(/-/g, ' ');

    if (projectName)
      this.project$ = this.dataService.getByName(
        'assets/datas/list-projects.json',
        projectName
      );
  }
}
