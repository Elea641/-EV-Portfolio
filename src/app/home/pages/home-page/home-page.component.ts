import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from '../../components/ui/introduction/introduction.component';
import { PresentationComponent } from '../../components/ui/presentation/presentation.component';
import { TrainingComponent } from '../../components/ui/training/training.component';
import { ContactComponent } from '../../components/ui/contact/contact.component';
import { CurriculumVitaeComponent } from '../../components/ui/curriculum-vitae/curriculum-vitae.component';
import { PortfolioComponent } from '../../components/ui/portfolio/portfolio.component';
import { ProjectDataComponent } from '../../components/feature/project-data/project-data.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    IntroductionComponent,
    PresentationComponent,
    TrainingComponent,
    ContactComponent,
    CurriculumVitaeComponent,
    PortfolioComponent,
    ProjectDataComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
