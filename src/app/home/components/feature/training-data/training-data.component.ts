import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from 'src/app/home/models/training.type';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/home/shared/home.service';
import { TrainingComponent } from '../../ui/training/training.component';

@Component({
  selector: 'app-training-data',
  standalone: true,
  imports: [CommonModule, TrainingComponent],
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss'],
})
export class TrainingDataComponent {
  trainings$: Observable<Training[]> = this.homeService.getAll(
    'assets/datas/list-training.json'
  );

  constructor(private homeService: HomeService<Training>) {}
}
