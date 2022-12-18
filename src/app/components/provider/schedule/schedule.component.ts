

import { ChangeDetectorRef, Component } from '@angular/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarOptions, EventApi, EventInput } from '@fullcalendar/core';
import { INITIAL_EVENTS } from './event-utils';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  currentEvents: EventApi[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    initialEvents: INITIAL_EVENTS,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    eventsSet: this.handleEvents.bind(this)
  };

  constructor(private changeDetector: ChangeDetectorRef) {}
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}
