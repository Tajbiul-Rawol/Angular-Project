import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent} from "./admission/admission.component";
import { StudentsComponent } from "./students/students.component";
import { ServerComponent } from "./server/server.component";


const routes: Routes = [
  {
    path: 'admission',
    component: AdmissionComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'server',
    component: ServerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
