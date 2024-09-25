import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityDataComponent } from '../../feature/quality-data/quality-data.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, QualityDataComponent],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {}
