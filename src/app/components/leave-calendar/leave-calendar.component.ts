import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { CalendarOptions, DateSelectArg, DatesSetArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import * as leaveActions from '../../store/action/leave.action';
import * as leaveSelect from '../../store/selector/leave.selector';
import * as holidaySelect from '../../store/selector/holiday.selector';
import { LeaveRecord } from '../../core/models/leave.interface';
import { Holiday } from '../../core/models/holiday.interface';

@Component({
  selector: 'app-leave-calendar',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './leave-calendar.component.html',
  styleUrl: './leave-calendar.component.scss'
})
export class LeaveCalendarComponent implements OnInit {

  holidayModal: boolean = false;
  leaveDetailsModal: boolean = false;

  holidayModalData: any;
  leaveDetailsModalData: any;
  leaveRecordsEvent: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    datesSet: this.handleDatesSet.bind(this),
    events: [],
    eventClick: (info) => this.openModal(info.event),
    dayMaxEventRows: true, // Enable "more" link if too many events
    // dayMaxEvents: 1,
    // expandRows: true,
    height: 550, // Adjust height based on content
    weekends: true,
    // eventContent: this.renderEventContent.bind(this),
  };
  allEvents: any[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(leaveActions.loadLeaveCalendar());
    this.initHolidays();
  }

  initHolidays(): void {
    this.store.select(leaveSelect.selectLeaveCalendar).subscribe(
      (res) => {
        if (res) {
          console.log(res)
          const holidayEvents = res.map(
            (item: any) => {
              return item.eventType == 'holiday' ? {
                title: item.name + '',
                start: item.startDate,
                display: 'background',
                extendedProps: {
                  name: item.name,
                  date: item.startDate,
                  description: item.description
                }
              } : {
                title: item.fullName + '',
                start: item.startDate,
                end: item.endDate,
                display: '',
                extendedProps: {
                  fullName: item.fullName,
                  leaveType: item.leaveType,
                  phone: item.phoneDuringLeave,
                  reason: item.reason
                }
              }
            }
          )
          console.log(holidayEvents);
          this.calendarOptions.events = holidayEvents
        }
      }
    )
  }

  handleDateClick(arg: any) {
    // alert('date click! ' + arg);
  }

  handleDatesSet(arg: DatesSetArg) {
    // console.log('current date range:', arg);
  }

  closeAllModal() {
    this.holidayModal = false;
    this.leaveDetailsModal = false;
  }

  openModal(event: any) {
    if (event.display == 'background') {
      this.holidayModalData = event.extendedProps;
      this.holidayModal = true;
    } else {
      this.leaveDetailsModalData = event.extendedProps;
      this.leaveDetailsModal = true;
    }
  }
}