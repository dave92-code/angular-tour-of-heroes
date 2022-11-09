import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  // { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  {path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  // { path: 'tareas', component: TasksComponent }
  //lazy load :)
  {path: 'tareas', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
  {path: 'testing', loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
