import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksPageComponent } from './components/tasks/tasks-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch:'full' },
  { path: 'list', component: TasksPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
