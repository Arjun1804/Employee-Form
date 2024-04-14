import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path:'viewemployee', component: ViewEmployeeComponent},
  {path:'addeditemployee', component: EmpAddEditComponent}
  // // Add other routes as needed
  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
