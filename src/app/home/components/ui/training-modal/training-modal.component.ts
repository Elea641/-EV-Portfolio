import { Component, Input } from '@angular/core';
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

  // Ajouter la classe 'modal-open' et 'no-scroll' au body lors de l'ouverture
  ngOnInit() {
    document.querySelector('.modal')?.classList.add('modal-open');
    document.body.classList.add('no-scroll'); // Empêche le scroll en arrière-plan
  }

  // Enlever les classes 'modal-open' et 'no-scroll' lors de la fermeture
  closeModal() {
    document.querySelector('.modal')?.classList.remove('modal-open');
    document.body.classList.remove('no-scroll'); // Réactiver le scroll en arrière-plan
  }

  // Nettoyer quand le composant est détruit (quand la modal se ferme)
  ngOnDestroy() {
    this.closeModal(); // S'assurer que les classes sont bien supprimées
  }
}
