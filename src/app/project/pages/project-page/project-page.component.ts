import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetDetailsDataComponent } from '../../components/feature/projet-details-data/project-details-data.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [CommonModule, ProjetDetailsDataComponent],
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }
}
