import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';





const routes: Routes = [
  
  {path: '' , component: StudentsComponent},
  {path: 'home' , component: StudentsComponent},
  {path: 'add' , component:AddStudentComponent},
  {path: 'details/:id' , component:StudentDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
