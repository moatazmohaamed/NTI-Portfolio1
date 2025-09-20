import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Team } from './pages/team/team';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'team',
    component: Team
  },
  {
    path: 'contact',
    component: Contact
  },
];
