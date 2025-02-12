import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { GenderPipe } from "./gender.pipe";
import { NestedComponent } from "./nested.component";
import { TaxPipe } from "./tax.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { TestpipePipe } from './testpipe.pipe';
import { provideHttpClient } from "@angular/common/http";
import { CallapiComponent } from './callapi/callapi.component';
import { DetailapiComponent } from './detailapi/detailapi.component';
import { PostcallapiComponent } from './postcallapi/postcallapi.component';
import { PostsdetailapiComponent } from './postsdetailapi/postsdetailapi.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent,
        AnotherComponent,
        NestedComponent,
        GenderPipe,
        TaxPipe,
        TformComponent,
        RformComponent,
        TestpipePipe,
        CallapiComponent,
        DetailapiComponent,
        PostcallapiComponent,
        PostsdetailapiComponent],
    bootstrap: [AppComponent,
        AnotherComponent
    ],
    providers: [
        provideHttpClient()
    ]
})
export class AppModule { }