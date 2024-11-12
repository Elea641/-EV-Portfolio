import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityCardComponent } from '../../ui/quality-card/quality-card.component';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';

@Component({
  selector: 'app-quality-data',
  standalone: true,
  imports: [CommonModule, QualityCardComponent],
  templateUrl: './quality-data.component.html',
  styleUrls: ['./quality-data.component.scss'],
})
export class QualityDataComponent implements OnInit {
  isDarkTheme = true;
  qualityDatas = [
    { name: 'Pédagogue', img: '../../../../assets/pictures/logo-teach.svg' },
    {
      name: "Esprit d'équipe",
      img: '../../../../assets/pictures/logo-team.svg',
    },
    { name: 'Curieuse', img: '../../../../assets/pictures/logo-question.svg' },
  ];

  constructor(public themeUtilService: ThemeUtilService) {
  }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem("theme") === "dark-theme" ? true : false;


    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }
}
