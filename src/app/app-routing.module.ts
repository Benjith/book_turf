import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AppBarComponent } from './pages/common/app-bar/app-bar.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'},
    {path:'home',component:HomeComponent,
    children:[{
      path:"",component:AppBarComponent
    }]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
