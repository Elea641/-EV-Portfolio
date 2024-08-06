import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from '../../components/ui/introduction/introduction.component';
import { PresentationComponent } from '../../components/ui/presentation/presentation.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, IntroductionComponent, PresentationComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
