import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetDetailsDataComponent } from '../../components/feature/projet-details-data/project-details-data.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, ProjetDetailsDataComponent],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {}
