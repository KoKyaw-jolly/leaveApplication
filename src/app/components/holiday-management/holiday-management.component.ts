import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { Holiday } from '../../core/models/holiday.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HolidayService } from '../../core/services/holiday.service';
import { selectHolidays } from '../../store/selector/holiday.selector';
import * as holidayAction from '../../store/action/holiday.action';

@Component({
  selector: 'app-holiday-management',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './holiday-management.component.html',
  styleUrl: './holiday-management.component.scss'
})
export class HolidayManagementComponent implements OnInit {

  holidayListData: Holiday[] = [];
  holidayDetailsModal: boolean = false;
  createHolidayEditModal: boolean = false;
  createEditState: string = '';
  holidayDetailsObj: Holiday = {
    id: '',
    name: '',
    date: new Date(),
    description: ''
  }

  //form
  holidayForm: FormGroup;
  deleteConfirmModal?: NzModalRef;
  createLoading: boolean = false;
  createEditError = {
    visable: false,
    message: ''
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private holidayService: HolidayService,
    private message: NzMessageService,
    private modal: NzModalService
  ) {
    this.holidayForm = this.fb.group({
      name: ['', Validators.required],
      date: [new Date(), [Validators.required]],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.store.select(selectHolidays).subscribe(res => {
      this.holidayListData = res.holidays;
    })
  }

  createHoliday(): void {
    this.resetForm();
    this.createHolidayEditModal = true;
    this.createEditState = 'create';
  }

  editHoliday(holidayDetails: Holiday): void {
    this.holidayForm.setValue({
      name: holidayDetails.name,
      date: new Date(holidayDetails.date),
      description: holidayDetails.description
    });
    this.createHolidayEditModal = true;
    this.createEditState = 'edit';
  }

  openHolidayDetails(holidayDetails: Holiday): void {
    this.holidayDetailsModal = true;
    this.holidayDetailsObj = holidayDetails;
  }

  closeModal() {
    this.holidayDetailsModal = false;
    this.createHolidayEditModal = false;
  }

  resetForm(): void {
    this.holidayForm.setValue({
      name: '',
      date: new Date(),
      description: ''
    });
    this.holidayForm.reset();
  }

  saveHoliday() {
    this.createLoading = true;
    if (this.holidayForm.invalid) {
      Object.values(this.holidayForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      this.createLoading = false;
      return;
    } else {
      const holidayData: Holiday = {
        id: '',
        name: this.undefinedCheck(this.holidayForm.get('name')?.value),
        date: this.undefinedCheck(this.holidayForm.get('date')?.value),
        description: this.undefinedCheck(this.holidayForm.get('description')?.value)
      }

      this.holidayService.createEditHoliday(holidayData, this.createEditState).subscribe({
        next: (res) => {
          this.message.create('success', `Create Holiday Successfully!`);
          this.resetForm();
          this.createHolidayEditModal = false;
          this.createLoading = false;
          this.store.dispatch(holidayAction.loadHolidays());
        },
        error: (err) => {
          this.createEditError.visable = true;
          this.createEditError.message = err.error.message ? err.error.message : 'Something went wrong!';
          this.createLoading = false;
        },
        complete: () => {
        }
      })
    }
  }

  deleteHolidayConfirm(holidayData: Holiday): void {
    this.deleteConfirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete this holiday?',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.holidayService.deleteHoliday(holidayData).subscribe({
            next: (res) => {
              this.message.create('success', 'Holiday Delete Successfully!');
              this.store.dispatch(holidayAction.loadHolidays());
              resolve(res);
            },
            error: (err) => {
              this.message.create('error', 'Holiday Delete Fail!');
              reject(err);
            },
            complete: () => {

            }
          });
        }).catch(() => console.log('Oops errors!'))
    });
  }

  undefinedCheck(value: any) {
    if (value === undefined) {
      return '';
    }
    return value;
  }
}
