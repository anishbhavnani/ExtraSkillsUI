import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path : '', component : HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
