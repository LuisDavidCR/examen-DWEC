import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component/home.component';
import { NewComponent } from './pages/new.component/new.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'new', component: NewComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
