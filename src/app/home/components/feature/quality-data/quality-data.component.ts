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
export class QualityDataComponent implements OnInit {
  currentImages!: ThemeImages;
  imagesArray: { image: string; name: string }[] = [];

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

  qualityNames = ['Pédagogue', "Esprit d'équipe", 'Curieuse'];

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

    const imageKeys = Object.keys(this.currentImages) as Array<
      keyof ThemeImages
    >;

    this.imagesArray = imageKeys.map((key, index) => ({
      image: this.currentImages[key] || 'assets/pictures/default-image.png',
      name: this.qualityNames[index],
    }));
  }
}
