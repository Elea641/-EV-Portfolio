import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project/pages/project-page/project-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'projects/:name',
    component: ProjectPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];
