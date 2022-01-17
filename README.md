### GIT
Configure Git
	https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html

Install Git
	https://git-scm.com/download/win

###### Installations
Setup Angular 
	https://angular.io/guide/setup-local
		
Install NodeJS
	https://nodejs.org/en/download/
	 
Install NPM
	https://docs.npmjs.com/cli/v8/commands/npm-install

### Angular Project
npm install -g @angular/cli
ng new hospital-management

	//If there are any execution policy exceptions, run below commands
	set-ExecutionPolicy RemoteSigned -Scope CurrentUser
	Get-ExecutionPolicy -list
	
cd hospital-management
	
npm install bootstrap	
npm install jquery

ng serve --open

### Commands used to create all components and services
Create doctor and patient folder under app
1. cd src/app/doctor
ng g c create-doctor,
ng g c get-doctor,
ng g c doctor-list

2. cd src/app/patient
ng g c create-patient,
ng g c get-patient,
ng g c patient-list

cd.. 
cd..

3. create services folder under app
cd src/app/services
a. ng g s doctor-service
b. ng g s patient-service

# HospitalManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
