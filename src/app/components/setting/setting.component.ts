import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { QuillEditorComponent } from 'ngx-quill'
import { HttpClient } from '@angular/common/http';
import { AppNotification, appNotificationEmptyInitialObj } from '../../core/models/notification.interface';
import { differenceInCalendarDays } from 'date-fns';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import * as generalSettingActions from '../../store/action/general-setting.action';
import { selectGeneralSetting } from '../../store/selector/general-setting.selector';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  generalSettingLoding: boolean = false;

  // notification
  notiScheduled: boolean = true;
  notificationForm: FormGroup;
  date: Date = new Date();
  notificationList: AppNotification[] = [];
  notificationObj: AppNotification = appNotificationEmptyInitialObj;
  notificationModal: boolean = false;

  //Leave Policy
  leavePolicyOldContent: string = '';
  leavePolicyContent: string = '';
  leavePolicyEditState: boolean = false;
  quillConfig = {
    modules: {
      toolbar: [
        // [{ header: [1, 2, 3, 4, 5, 6] }],
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

  private subscription: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.notificationForm = this.fb.group({
      notiScheduled: [false],
      notiScheduledDate: [null],
      notifyTo: ['all', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(generalSettingActions.loadNotificationAll());
    this.store.dispatch(generalSettingActions.loadLeavePolicy());
    this.subscription.add(
      this.store.select(selectGeneralSetting).subscribe(res => {
        if (res && res != null) {
          // Notification
          this.generalSettingLoding = res.loading;
          this.notificationList = res.notificationsAll;
          // LeavePolicy
          this.leavePolicyOldContent = res.leavePolicy;

          if (res.loading == false && res.error === null) {
            this.clearNotiForm();
            this.leavePolicyContent = res.leavePolicy;
            this.leavePolicyEditState = false;
          }
        }
      })
    )
  }

  //notification
  onSubmitNotification(): void {
    if (!this.notificationForm.valid) {
      Object.values(this.notificationForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    } else {
      console.log('this.notificationForm.value', this.notificationForm.value);
      const notificationData: AppNotification = {
        id: '',
        date: this.notiScheduled ? this.notificationForm.value.notiScheduledDate : new Date(),
        title: this.notificationForm.value.title,
        description: this.notificationForm.value.description,
        notifyTo: this.notificationForm.value.notifyTo
      }
      this.store.dispatch(generalSettingActions.createEditNotification({ notification: notificationData }));
    }
  }

  clearNotiForm(): void {
    this.notificationForm.reset();
    this.notificationForm.setValue({
      notiScheduled: false,
      notiScheduledDate: null,
      notifyTo: 'all',
      title: '',
      description: ''
    });
  }

  disabledDate = (current: Date): boolean => differenceInCalendarDays(current, this.date) <= 0;

  notiDetails(notiData: AppNotification): void {
    this.notificationModal = true;
    this.notificationObj = notiData;
  }
  // Leave Policy
  leavePolicySave(): void {
    if (this.leavePolicyContent === this.leavePolicyOldContent) {
      this.leavePolicyEditState = false;
    } else {
      this.store.dispatch(generalSettingActions.createEditLeavePolicy({ leavePolicy: this.leavePolicyContent }));
    }
  }

  closeModal(): void {
    this.notificationModal = false;
  }
}
