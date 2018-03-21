import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
// import {MatDialogModule} from '@angular/material/dialog';
// import { FormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material';
// import { MatInputModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material';
import { MyFormComponent } from './my-form/my-form.component';
import { AllMudulModule } from './moduls/all-mudul/all-mudul.module';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MyFormComponent,
  ],
  imports: [
    BrowserModule,
    // MatDialogModule,
    // FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    AllMudulModule

  ],
  // hien thi diolog component
  entryComponents: [ DialogComponent, MyFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
