import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from '../training-card/training-card.component';
import { Training } from 'src/app/home/models/training.type';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, TrainingCardComponent],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit {
  @Input() trainings!: Training[];
  private sectionObserver: IntersectionObserver;
  private cardObserver: IntersectionObserver | null = null;

  constructor() {
    this.sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.observeCards();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  }

  ngOnInit(): void {
    const sectionElement = document.querySelector('#training');
    if (sectionElement) {
      this.sectionObserver.observe(sectionElement);
    }
  }

  observeCards(): void {
    this.cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (element.parentNode) {
            const index = Array.from(element.parentNode.children).indexOf(
              element
            );

            if (entry.isIntersecting) {
              element.classList.add('in-view');
              element.classList.remove('out-of-view');
              element.style.transitionDelay = `${index * 0.2}s`;
            } else {
              element.classList.add('out-of-view');
              element.classList.remove('in-view');
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const trainingCards = document.querySelectorAll('ul > li');
    trainingCards.forEach(card => this.cardObserver?.observe(card));
  }
}
