import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from 'src/app/home/models/skill.type';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skills!: Skill[];
}
