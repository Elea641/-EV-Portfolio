import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quality-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality-card.component.html',
  styleUrls: ['./quality-card.component.scss'],
})
export class QualityCardComponent {
  @Input() data!: { image: string; name: string };
}
