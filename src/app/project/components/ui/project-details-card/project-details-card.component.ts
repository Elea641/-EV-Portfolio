import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss'],
})
export class ProjectDetailsCardComponent implements OnInit {
  @Input() project!: Project

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

