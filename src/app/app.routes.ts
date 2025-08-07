import { Routes } from '@angular/router';
import { ListComponent } from './pages/users/components/list/list.component';

export const routes: Routes = [
  { path: '', loadComponent: () => ListComponent },
];
