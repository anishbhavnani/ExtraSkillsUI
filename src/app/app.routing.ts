import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { DialogComponent } from './dialog/dialog.component';
import { ParentsregisterComponent } from './parentsregister/parentsregister.component';

const routes: Routes = [
  { path: 'parentsregister', component: ParentsregisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  {path : '', component : HomeComponent}
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
