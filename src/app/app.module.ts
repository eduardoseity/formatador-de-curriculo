import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './layout/content/content.component';
import { StepsNavComponent } from './layout/steps-nav/steps-nav.component';
import { ViewerComponent } from './layout/viewer/viewer.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ResumeViewerComponent } from './pages/resume-viewer/resume-viewer.component';
import { ReplaceString } from './pipe/replace-string.pipe';
import { StringValidate } from './pipe/string-validate.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    StepsNavComponent,
    ContentComponent,
    FormsComponent,
    ViewerComponent,
    ResumeViewerComponent,
    StringValidate,
    ReplaceString
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
