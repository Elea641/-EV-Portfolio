import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-project.component.html',
  styleUrls: ['./carousel-project.component.scss'],
})
export class CarouselProjectComponent implements OnInit, OnDestroy {
  @Input() images = '';
  currentSlide = 0;
  intervalId: any;
  imageArray: string[] = [];
  isZoomed = false;

  ngOnInit() {
    this.startAutoSlide();
    this.imageArray = this.images.split(',').map(image => image.trim());
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.imageArray.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

  // Méthodes pour obtenir l'image précédente et suivante
  getPrevSlide() {
    return (this.currentSlide - 1 + this.imageArray.length) % this.imageArray.length;
  }

  getNextSlide() {
    return (this.currentSlide + 1) % this.imageArray.length;
  }
}
