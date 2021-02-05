import { Routes } from '@angular/router';

import{ HomeComponent } from './components/home/home.component';
import{ SearchComponent } from './components/search/search.component';
import { UsersComponent } from './components/users/users.component';

export const ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'users',component: UsersComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch:'full',redirectTo: 'home'}
];

