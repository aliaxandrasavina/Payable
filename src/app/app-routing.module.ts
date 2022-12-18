import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/provider/clients/clients.component';
import { ScheduleComponent } from './components/provider/schedule/schedule.component';
import { ServicesComponent } from './components/provider/services/services.component';

const routes: Routes = [
  {
    path: 'provider-services',
    component: ServicesComponent,
  },
  {
    path: 'provider-clients',
    component: ClientsComponent,
  },
  {
    path: 'provider-schedule',
    component: ScheduleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
