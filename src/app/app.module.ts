import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { GetDoctorComponent } from './doctor/get-doctor/get-doctor.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { GetPatientComponent } from './patient/get-patient/get-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    GetDoctorComponent,
    CreatePatientComponent,
    PatientListComponent,
    GetPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
