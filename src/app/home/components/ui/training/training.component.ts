import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCardComponent } from '../training-card/training-card.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, TrainingCardComponent],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {}
