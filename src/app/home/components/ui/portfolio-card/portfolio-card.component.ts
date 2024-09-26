import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/home/models/project.type';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, PortfolioModalComponent],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  @Input() data!: Project;
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
