import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeComponent } from './Components/employee/employee.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeeListComponent
  },
  {
    path: 'form',
    component: EmployeeComponent
  },
  {
    path: 'form/:id',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
