# Angular 5, Angular Material, Infinite Scroll
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.
This project is demonstrating angular 5, angular material and infinite scroll

#### Angular 5

Open cmd with Administrator and install angular cli by executing the following command

npm install -g @angular/cli@latest
Once completed with angular cli installation now create the angular application by executing following command

ng new appplication_name
It will take some time to download the dependencies for angular application, Once you done then type the following

cd application_name
Type ng serve to start the application by default it will use localhost:4200 but you can configure hostname and port, –host and –port are the parameters of ng serve

e.g. ng serve –host=noman –port=8001
Open chrome and type http://noman:8001

#### Add angular material into angular project
Install [Angular Material](https://material.angular.io/guide/getting-started) 
<ul>
<li>npm install –save @angular/material @angular/cdk</li>
<li>npm install –save @angular/animations</li>
</ul>

Once you are done with installation open app.module.ts file and add the following:

import {BrowserAnimationsModule} from ‘@angular/platform-browser/animations’;

<pre>
imports: [
  MatButtonModule,
  BrowserAnimationsModule
]
</pre>

Open app.component.html and add the following:
<pre>
<button mat-button>Click me!</button>
</pre>

#### Routing 
ng g m components/wiki --routing
Add WikiModule in app.modules.ts

ng g c components/wiki/wiki-home -is

To deploy on nginx
ng build --prod --base-href=./
