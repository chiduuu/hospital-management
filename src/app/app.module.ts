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
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // {
  //   path: 'doctors', component: DoctorListComponent,
  //   children: [
  //     {
  //       path:'create', component: CreateDoctorComponent
  //     },
  //     {
  //       path: ':id', component: GetDoctorComponent
  //     },
  //     {
  //       path: 'list', component: DoctorListComponent
  //     }
  // ]
  // },
  // {
  //   path: 'patients', component: PatientListComponent,
  //   children: [
  //     {
  //       path:'create', component: CreatePatientComponent
  //     },
  //     {
  //       path: ':id', component: GetPatientComponent
  //     },
  //     {
  //       path: 'list', component: PatientListComponent
  //     }
  // ]
  // },
  { path: 'doctors', component: DoctorListComponent },
  {
    path: 'doctor/create',
    component: CreateDoctorComponent,
  },
  {
    path: 'doctor/:id',
    component: GetDoctorComponent,
  },
  {
    path: 'patients',
    component: PatientListComponent,
  },
  {
    path: 'patient/create',
    component: CreatePatientComponent,
  },
  {
    path: 'patient/:id',
    component: GetPatientComponent,
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    GetDoctorComponent,
    CreatePatientComponent,
    PatientListComponent,
    GetPatientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
