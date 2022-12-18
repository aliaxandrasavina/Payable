import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/provider/services/services.component';
import { ClientsComponent } from './components/provider/clients/clients.component';
import { ScheduleComponent } from './components/provider/schedule/schedule.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { DurationPickerModule } from 'ngx-duration-picker';
import { MatDialogModule } from '@angular/material/dialog';
import { AddClientDialogComponent } from './components/provider/clients/add-client-dialog/add-client-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ClientsComponent,
    ScheduleComponent,
    AddClientDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DurationPickerModule,
    

    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
