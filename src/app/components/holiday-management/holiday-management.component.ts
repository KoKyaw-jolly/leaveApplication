import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { Holiday, holidayEmptyInitalObj } from '../../core/models/holiday.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HolidayService } from '../../core/services/holiday.service';
import { selectHolidays } from '../../store/selector/holiday.selector';
import * as holidayAction from '../../store/action/holiday.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-holiday-management',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './holiday-management.component.html',
  styleUrl: './holiday-management.component.scss'
})
export class HolidayManagementComponent implements OnInit, OnDestroy {

  holidayListData: Holiday[] = [];
  holidayDetailsModal: boolean = false;
  holidayCreateEditModal: boolean = false;
  holidayDeleteModal: boolean = false;
  createEditState: string = '';
  holidayDetailsObj: Holiday = holidayEmptyInitalObj;
  holidayLoading: boolean = false;

  //form
  holidayForm: FormGroup;
  deleteConfirmModal?: NzModalRef;
  createEditError = {
    visable: false,
    message: ''
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.holidayForm = this.fb.group({
      name: ['', Validators.required],
      date: [new Date(), [Validators.required]],
      description: [''],
    });
  }
  private subscribe: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscribe.add(
      this.store.select(selectHolidays).subscribe(res => {
        this.holidayListData = res.holidays;
        this.holidayLoading = res.loading;
        if (res.loading == false && res.error == null) {
          this.closeModal();
        }
        if (res.error != null) {
          this.createEditError = {
            visable: true,
            message: res.error
          }
        } else {
          this.createEditError = {
            visable: false,
            message: ''
          }
        }
      })
    )
  }

  createHoliday(): void {
    this.holidayCreateEditModal = true;
    this.createEditState = 'create';
  }

  editHoliday(holidayDetails: Holiday): void {
    this.holidayForm.setValue({
      name: holidayDetails.name,
      date: new Date(holidayDetails.date),
      description: holidayDetails.description
    });
    this.holidayCreateEditModal = true;
    this.createEditState = 'edit';
  }

  openHolidayDetails(holidayDetails: Holiday): void {
    this.holidayDetailsModal = true;
    this.holidayDetailsObj = holidayDetails;
  }

  closeModal() {
    this.holidayDetailsModal = false;
    this.holidayCreateEditModal = false;
    this.holidayDeleteModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.createEditError = {
      visable: false,
      message: ''
    }
    this.holidayForm.setValue({
      name: '',
      date: new Date(),
      description: ''
    });
    this.holidayForm.reset();
  }

  createEditHoliday() {
    if (this.holidayForm.invalid) {
      Object.values(this.holidayForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    } else {
      const holidayData: Holiday = {
        id: '',
        name: this.undefinedCheck(this.holidayForm.get('name')?.value),
        date: this.undefinedCheck(this.holidayForm.get('date')?.value),
        description: this.undefinedCheck(this.holidayForm.get('description')?.value)
      }

      this.store.dispatch(holidayAction.createEditHoliday({ holiday: holidayData, createEditStatus: this.createEditState }));
    }
  }
  deleteHoliday(holidayDetails: Holiday): void {
    this.holidayDeleteModal = true;
    this.holidayDetailsObj = holidayDetails;
  }
  deleteHolidayConfirm(): void {
    this.store.dispatch(holidayAction.deleteHoliday({ holiday: this.holidayDetailsObj }));
  }

  undefinedCheck(value: any) {
    if (value === undefined) {
      return '';
    }
    return value;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
