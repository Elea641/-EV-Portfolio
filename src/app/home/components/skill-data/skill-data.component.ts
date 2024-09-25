import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skill.type';
import { HomeService } from '../../shared/home.service';
import { SkillComponent } from '../ui/skill/skill.component';

@Component({
  selector: 'app-skill-data',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skill-data.component.html',
  styleUrls: ['./skill-data.component.scss'],
})
export class SkillDataComponent {
  skills$: Observable<Skill[]> = this.homeService.getAll(
    'assets/datas/list-skill.json'
  );

  constructor(private homeService: HomeService<Skill>) {}
}
