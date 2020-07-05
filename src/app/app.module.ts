import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HelpComponent } from './help/help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpFindComponent } from './help-find/help-find.component';
import { HelpFormComponent } from './help-form/help-form.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { ReportComponent } from './report/report.component';
import { HelpService } from './help.service';
import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PageNotFoundComponent,
    HelpFindComponent,
    HelpFormComponent,
    HelpComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HelpService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
