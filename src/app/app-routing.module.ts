import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/create',
    component: ProductFormComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product/:id/edit',
    component: ProductFormComponent
  },

  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       component: PhoneDashboard
  //     },
  //     {
  //       path: 'phone',
  //       component: PhoneDetail
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
