import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/home/models/project.type';
import { DataService } from 'src/app/shared/data.service';
import { Observable } from 'rxjs';
import { ProjectDetailsCardComponent } from '../../ui/project-details-card/project-details-card.component';

@Component({
  selector: 'app-project-details-data',
  standalone: true,
  imports: [CommonModule, ProjectDetailsCardComponent],
  templateUrl: './project-details-data.component.html',
  styleUrls: ['./project-details-data.component.scss'],
})
export class ProjetDetailsDataComponent implements OnInit {
  project$!: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService<Project>
  ) { }

  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap.get('name');
    console.log(projectName);

    if (projectName) {
      this.project$ = this.dataService.getByName(
        'assets/datas/list-projects.json',
        projectName.replace('-', ' ')
      );
    }
  }
}
