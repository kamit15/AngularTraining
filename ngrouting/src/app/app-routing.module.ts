import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserdetailComponent },
  { path: 'post', component: PostComponent, canActivate: [authGuard] },
  { path: 'post/:id', component: PostdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
