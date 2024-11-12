import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from 'src/app/home/models/skill.type';
import { ThemeUtilService } from 'src/app/home/shared/theme.util.service';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input() skills!: Skill[];
  isDarkTheme = true;

  constructor(public themeUtilService: ThemeUtilService) {}

  ngOnInit() {
    this.isDarkTheme =
      localStorage.getItem('theme') === 'dark-theme' ? true : false;

    this.themeUtilService.isLightThemeChanged$.subscribe(isLight => {
      this.isDarkTheme = !isLight;
    });
  }
}
