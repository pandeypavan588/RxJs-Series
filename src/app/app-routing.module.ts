import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwaitComponent } from './components/async-await/async-await.component';


import { HomeComponent } from './components/home/home.component';
import { FromeventComponent } from './components/list/fromevent/fromevent.component';
import { IntervalComponent } from './components/list/interval/interval.component';
import { ListComponent } from './components/list/list.component';
import { OfFromComponent } from './components/list/of-from/of-from.component';
import { ToArrayComponent } from './components/list/to-array/to-array.component';
import { PromiseComponent } from './components/promise/promise.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'fromevent',
        component: FromeventComponent
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
      {
        path:'of-from',
        component: OfFromComponent
      },
      {
        path: 'toarray',
        component: ToArrayComponent
      }
    ]
  },
  {path: 'promise', component: PromiseComponent},
  {path:'async',component:AsyncAwaitComponent},
  
  {
    path: "", redirectTo: 'async',pathMatch:'full'
  },
  {
    path: '**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
