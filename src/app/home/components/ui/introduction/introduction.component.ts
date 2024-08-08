import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const h2Element = document.querySelector('h2') as HTMLElement;
    if (h2Element) {
      h2Element.style.width = `${h2Element.scrollWidth}px`;
    }
  }
}
