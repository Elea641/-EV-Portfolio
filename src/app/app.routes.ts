import { Routes } from '@angular/router';
import { ProjectPageComponent } from './project/pages/project-page/project-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { themeResolver } from './home/shared/resolvers/themeResolver';

export const routes: Routes = [
  {
    path: 'projects/:name',
    component: ProjectPageComponent,
    resolve: {
      theme: themeResolver,
    },
  },
  {
    path: '',
    component: HomePageComponent,
  },
];
