import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ProductOnboardingComponent } from './product-onboarding/product-onboarding.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UserDetailsComponent }from './user-details/user-details.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'page1', component:Page1Component},
  {path:'adduser', component:AdduserComponent},
  {path:'product-onboarding', component:ProductOnboardingComponent},
  {path:'users-list', component: UsersListComponent},
  {path:'user-detail', component:UserDetailsComponent},
  {path:'', redirectTo:"login",pathMatch:'full'},
  { path: "**",redirectTo:"",pathMatch:'full'},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
