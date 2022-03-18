import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'student',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
