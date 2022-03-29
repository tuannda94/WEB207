import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: 'students/form',
    component: StudentFormComponent
  },
  {
    path: 'students/form/:id',
    component: StudentFormComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  },
  {
    path: 'posts',
    component: PostComponent,
  },
  {
    path: 'posts/form',
    component: PostFormComponent,
  },
  {
    path: 'posts/form/:id',
    component: PostFormComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
