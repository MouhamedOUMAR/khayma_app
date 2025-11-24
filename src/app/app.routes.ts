import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Regions } from './pages/regions/regions';
import { Kheymas } from './pages/kheymas/kheymas';
import { Planner } from './pages/planner/planner';
import { Experiences } from './pages/experiences/experiences';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'regions', component: Regions },
  { path: 'kheymas', component: Kheymas },
  { path: 'planner', component: Planner },
  { path: 'experiences', component: Experiences },
  { path: 'admin', component: Admin },
  { path: '**', redirectTo: '' }
];
