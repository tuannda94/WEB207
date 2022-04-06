import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'product',
  //   component: ProductComponent
  // },
  // {
  //   path: 'product/create',
  //   component: ProductFormComponent
  // },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailComponent
  // },
  // {
  //   path: 'product/:id/edit',
  //   component: ProductFormComponent
  // },

  // {
  //   path: 'app',
  //   component: AppComponent
  // },
  // {
  //   path: 'student',
  //   component: StudentComponent
  // },
  {
    path: 'register',
    component: RegisterComponent
  },

  // Route vs layout
  {
    path: '',
    component: ClientComponent,
    // component trong children sẽ được render vào phần đặt
    // router-outlet trong component ClientComponent
    children: [
      {
        path: '',
        component: ProductComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: 'detail',
            component: ProductDetailComponent
          },
          {
            path: 'form',
            component: ProductFormComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
