import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { CarouselProjectComponent } from '../carousel-project/carousel-project.component';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule, CarouselProjectComponent],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent {
  @Input() project!: Project;
}
