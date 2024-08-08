import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from '../../components/ui/introduction/introduction.component';
import { PresentationComponent } from '../../components/ui/presentation/presentation.component';
import { TrainingComponent } from '../../components/ui/training/training.component';
import { ContactComponent } from '../../components/ui/contact/contact.component';
import { CurriculumVitaeComponent } from '../../components/ui/curriculum-vitae/curriculum-vitae.component';
import { PortfolioComponent } from '../../components/ui/portfolio/portfolio.component';
import { ProjectDataComponent } from '../../components/feature/project-data/project-data.component';
import { TrainingDataComponent } from '../../components/feature/training-data/training-data.component';

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
    TrainingDataComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const scrollButtonImage = document.getElementById(
      'scroll-button-image'
    ) as HTMLImageElement;

    if (scrollToTopButton && scrollButtonImage) {
      const changeImageAtPixels = 3.5 * 16;
      const viewportHeight = window.innerHeight;
      const changeImageAt150vh = (107 * viewportHeight) / 100;

      window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > changeImageAt150vh) {
          scrollButtonImage.src = 'assets/pictures/logo-arrow-up.png';
        } else if (scrollPosition > changeImageAtPixels) {
          scrollButtonImage.src = 'assets/pictures/logo-arrow-up-gray.png';
        } else {
          scrollButtonImage.src = 'assets/pictures/logo-arrow-up.png';
        }
      });

      scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
