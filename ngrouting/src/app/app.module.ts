import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { provideHttpClient } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PnfComponent,
    UserComponent,
    UserdetailComponent,
    PostComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
