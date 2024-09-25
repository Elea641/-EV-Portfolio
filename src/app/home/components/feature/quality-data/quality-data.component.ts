import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityCardComponent } from '../../ui/quality-card/quality-card.component';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';
import { ThemeImages } from 'src/app/home/models/themeImages.interface';

@Component({
  selector: 'app-quality-data',
  standalone: true,
  imports: [CommonModule, QualityCardComponent],
  templateUrl: './quality-data.component.html',
  styleUrls: ['./quality-data.component.scss'],
})
export class QualityDataComponent {
  currentImages!: ThemeImages;
  imagesArray: string[] = [];

  themeImages: { light: ThemeImages; dark: ThemeImages } = {
    light: {
      teach: 'assets/pictures/logo-teach-dark.png',
      team: 'assets/pictures/logo-team-dark.png',
      curious: 'assets/pictures/logo-curious-dark.png',
    },
    dark: {
      teach: 'assets/pictures/logo-teach-light.png',
      team: 'assets/pictures/logo-team-light.png',
      curious: 'assets/pictures/logo-curious-light.png',
    },
  };

  constructor(public themeUtilService: ThemeUtilService) {
    this.updateCurrentImages();
    this.themeUtilService.toggleTheme();
  }

  ngOnInit() {
    this.themeUtilService.isLightThemeChanged$.subscribe(() => {
      this.updateCurrentImages();
    });
  }

  updateCurrentImages() {
    this.currentImages = this.themeUtilService.updateImages(this.themeImages);
    this.imagesArray = Object.values(this.currentImages);
  }
}
