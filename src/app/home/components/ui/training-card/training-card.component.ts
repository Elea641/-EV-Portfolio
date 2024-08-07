import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from 'src/app/home/models/training.type';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent {
  @Input() data!: Training;
}
