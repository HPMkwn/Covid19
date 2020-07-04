import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { HelpComponent } from './help/help.component';
import { HelpFindComponent } from './help-find/help-find.component';
import { HelpFormComponent } from './help-form/help-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import {ReportComponent} from './report/report.component';



const routes: Routes = [
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
  {
    path: 'addPerson',
    component: AddPersonComponent,
  },
  {
    path: 'updatePerson',
    component: UpdatePersonComponent,
  
  },
  {
    path: 'help',
    // loadChildren: () => import('./help/help.component').then(m => m.AdminModule),
    component: HelpComponent,
  },
  {
    path: 'help/help-find',
    // loadChildren: () => import('./help/help.component').then(m => m.AdminModule),
    component: HelpFindComponent,
  },
  {
    path: 'help/help-form',
    // loadChildren: () => import('./help/help.component').then(m => m.AdminModule),
    component: HelpFormComponent,
  },
  // {
  //   path: 'crisis-center',
  //   loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  //   data: { preload: true }
  // },
  { path: '', redirectTo: '/person', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
