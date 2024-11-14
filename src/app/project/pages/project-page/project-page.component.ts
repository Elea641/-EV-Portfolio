import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetDetailsDataComponent } from '../../components/feature/projet-details-data/project-details-data.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, ProjetDetailsDataComponent],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements AfterViewInit {
  scrollToTop = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      this.scrollToTop = true;
    }, 0);
  }
}
