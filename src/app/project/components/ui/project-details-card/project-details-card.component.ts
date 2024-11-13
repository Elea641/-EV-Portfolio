import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss']
})
export class ProjectDetailsCardComponent {


  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
