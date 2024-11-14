import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from 'src/app/home/models/training.type';
import { Observable } from 'rxjs';
import { TrainingComponent } from '../../ui/training/training.component';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-training-data',
  standalone: true,
  imports: [CommonModule, TrainingComponent],
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.scss'],
})
export class TrainingDataComponent {
  trainings$: Observable<Training[]> = this.dataService.getAll(
    'assets/datas/list-training.json'
  );

  constructor(private dataService: DataService<Training>) { }
}
