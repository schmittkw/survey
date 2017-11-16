import { PollShowComponent } from './poll-show/poll-show.component';
import { PollNewComponent } from './poll-new/poll-new.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: PollListComponent
  },
  {
    path: 'create',
    component: PollNewComponent
  },
  {
    path: 'poll/:id',
    component: PollShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
