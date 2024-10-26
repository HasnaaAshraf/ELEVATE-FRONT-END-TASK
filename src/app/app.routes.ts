import { Routes } from '@angular/router';
import { HomeComponent } from './layout/basic/home/home.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';

export const routes: Routes = [
    {path:'' , redirectTo : 'home' , pathMatch:"full"},
    {path:'home' , component : HomeComponent},
    {path:'notfound' , component : NotfoundComponent},
    
];

