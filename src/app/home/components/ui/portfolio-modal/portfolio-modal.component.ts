import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';

@Component({
  selector: 'app-portfolio-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss'],
})
export class PortfolioModalComponent {
  @Input() project: Project | null = null;

  closeModal() {
    this.project = null;
  }
}
