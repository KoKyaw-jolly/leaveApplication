import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { QuillEditorComponent } from 'ngx-quill'
import { HttpClient } from '@angular/common/http';
import { Notification } from '../../core/models/notification.interface';
import { differenceInCalendarDays } from 'date-fns';


@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    APP_IMPORT,
    QuillEditorComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent implements OnInit {

  date: Date = new Date();
  oldContent: string = "";
  content: string = "";
  editState: boolean = false;
  notiScheduled: boolean = true;

  listOfData: Notification[] = [
    {
      id: 1,
      date: new Date('2024-07-29T10:00:00Z'),
      title: 'System Maintenance',
      description: 'The system will be down for maintenance from 10 PM to 12 AM.',
      notifyTo: 'All'
    },
    {
      id: 2,
      date: new Date('2024-07-28T14:30:00Z'),
      title: 'New Policy Update',
      description: 'Please review the updated leave policy document.',
      notifyTo: 'Staff'
    },
    {
      id: 3,
      date: new Date('2024-07-27T09:00:00Z'),
      title: 'Meeting Reminder',
      description: 'Reminder for the staff meeting scheduled at 3 PM today.',
      notifyTo: 'Staff'
    },
    {
      id: 4,
      date: new Date('2024-07-26T16:45:00Z'),
      title: 'New Feature Release',
      description: 'A new feature has been released on the platform. Please check it out.',
      notifyTo: 'All'
    },
    {
      id: 5,
      date: new Date('2024-07-25T11:15:00Z'),
      title: 'Holiday Announcement',
      description: 'The office will be closed on Friday for a public holiday.',
      notifyTo: 'All'
    },
    {
      id: 6,
      date: new Date('2024-07-24T08:00:00Z'),
      title: 'Training Session',
      description: 'A training session on the new software will be held at 2 PM.',
      notifyTo: 'Staff'
    },
    {
      id: 7,
      date: new Date('2024-07-23T13:30:00Z'),
      title: 'Password Change Reminder',
      description: 'Please change your password before the end of the month.',
      notifyTo: 'All'
    },
    {
      id: 8,
      date: new Date('2024-07-22T17:00:00Z'),
      title: 'Performance Reviews',
      description: 'Annual performance reviews will begin next week.',
      notifyTo: 'Staff'
    },
    {
      id: 9,
      date: new Date('2024-07-21T15:45:00Z'),
      title: 'Office Relocation',
      description: 'The office will be relocated to a new address next month.',
      notifyTo: 'All'
    },
    {
      id: 10,
      date: new Date('2024-07-20T12:30:00Z'),
      title: 'Feedback Request',
      description: 'Please provide your feedback on the recent company event.',
      notifyTo: 'Staff'
    }
  ];

  quillConfig = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['clean']
      ]
    },
    theme: 'snow'
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data/policy-temp-data.json').subscribe((data) => {
      this.oldContent = data.data;
      this.content = this.oldContent;
    });
  }

  test(): void {
    console.log(this.notiScheduled);
  }

  disabledDate = (current: Date): boolean =>
    differenceInCalendarDays(current, this.date) <= 0;

  leavePolicySave(): void {
    this.editState = false;
    console.log(this.content);
  }
}
