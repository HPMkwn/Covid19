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
import { HelpDeleteComponent } from './help-delete/help-delete.component';
import { MapComponent } from './map/map.component';
import { StateReportComponent } from './state-report/state-report.component';
import { CityReportComponent } from './city-report/city-report.component';
import { DataShowComponent } from './data-show/data-show.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';

const routes: Routes = [
  {
    path: 'pie',
    component: PieComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
  {
    path: 'data-show',
    component: DataShowComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'state-report',
    component: StateReportComponent,
  },
  {
    path: 'city-report',
    component: CityReportComponent,
  },
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
  {
    path: 'help/help-delete',
    // loadChildren: () => import('./help/help.component').then(m => m.AdminModule),
    component: HelpDeleteComponent,
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
