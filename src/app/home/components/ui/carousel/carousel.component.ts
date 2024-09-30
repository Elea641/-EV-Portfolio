import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: any;

  quotes = [
    {
      text: 'The only limit to our realization of tomorrow is our doubts of today.',
      author: 'Franklin D. Roosevelt',
    },
    {
      text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000); // Change de slide toutes les 10 secondes
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.quotes.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}
