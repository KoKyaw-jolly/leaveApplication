import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { CalendarOptions, DateSelectArg, DatesSetArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-leave-calendar',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './leave-calendar.component.html',
  styleUrl: './leave-calendar.component.scss'
})
export class LeaveCalendarComponent {

  holidayModal: boolean = false;
  leaveDetailsModal: boolean = false;

  holidayModalData: any;
  leaveDetailsModalData: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    datesSet: this.handleDatesSet.bind(this),
    events: [
      // Background events for holidays
      {
        title: 'Holiday 1', start: '2024-07-04', display: 'background', extendedProps: {
          name: 'Holiday',
          description: 'This is Holiday'
        }
      },
      {
        title: 'Holiday 2', start: '2024-07-20', display: 'background', extendedProps: {
          name: 'Holiday',
          description: 'This is Holiday'
        }
      },
      // Other events
      {
        title: 'Ko Ko Kyaw', date: '2024-07-04', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      },
      {
        title: 'Ko Ko Kyaw 2', date: '2024-07-02', display: '', extendedProps: {
          fullName: 'Ko Ko Kyaw 2',
          leaveType: 'Annual',
          phone: '09-87654321',
          reason: 'Personal'
        }
      }
    ],

    eventClick: (info) => this.openModal(info.event),
    dayMaxEventRows: true, // Enable "more" link if too many events
    // dayMaxEvents: 1,
    // expandRows: true,
    height: 550, // Adjust height based on content
    weekends: true,
    // eventContent: this.renderEventContent.bind(this),
  };

  handleDateClick(arg: any) {
    // alert('date click! ' + arg);
  }

  handleDatesSet(arg: DatesSetArg) {
    console.log('current date range:', arg);
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
