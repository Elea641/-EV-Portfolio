import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from 'src/app/home/models/training.type';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { TrainingModalComponent } from '../training-modal/training-modal.component';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, TrainingModalComponent],
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent implements OnInit {
  @Input() data!: Training;

  isModalOpen = false;
  isDarkTheme = false;

  constructor(public themeUtilService: ThemeUtilService) {}

  ngOnInit() {
    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }

  openModal() {
    this.isModalOpen = true;
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('modal-open');
    }, 0);
  }
}
