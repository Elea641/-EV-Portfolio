import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Skill } from '../../../models/skill.type';
import { SkillComponent } from '../../ui/skill/skill.component';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-skill-data',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skill-data.component.html',
  styleUrls: ['./skill-data.component.scss'],
})
export class SkillDataComponent {
  skills$: Observable<Skill[]> = this.dataService.getAll(
    'assets/datas/list-skill.json'
  );

  constructor(private dataService: DataService<Skill>) {}
}
