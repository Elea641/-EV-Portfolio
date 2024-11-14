import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Training } from 'src/app/home/models/training.type';

@Component({
  selector: 'app-training-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-modal.component.html',
  styleUrls: ['./training-modal.component.scss'],
})
export class TrainingModalComponent {
  @Input() training: Training | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    document.querySelector('.modal')?.classList.remove('modal-open');
    this.closeModalEvent.emit();
    document.body.classList.remove('no-scroll');
  }
}
