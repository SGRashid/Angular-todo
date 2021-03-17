import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { TodoItemPageComponent } from './components/todo-item-page/todo-item-page.component';
import { Page404Component } from './components/page404/page404.component';


const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'todo-item/:id', component: TodoItemPageComponent },
    { path: '**', component: Page404Component },
  ];

  export default appRoutes;