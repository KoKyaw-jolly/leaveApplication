import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { Holiday } from '../../core/models/holiday.interface';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  holidayCreateEditModal: boolean = false;
  holidayDetailsObj: Holiday = {
    id: '',
    name: '',
    date: new Date(),
    description: ''
  }

  //form
  holidayForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
    description: new FormControl('')
  });

  constructor(private http: HttpClient, private modal: NzModalService) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/holiday-temp-data.json').subscribe((data) => {
      this.holidayListData = data;
    });
  }

  holidayCreate(): void {
    this.resetHolidayForm();
    this.holidayCreateEditModal = true;
  }

  openHolidayDetails(holidayDetails: Holiday): void {
    this.holidayDetailsModal = true;
    this.holidayDetailsObj = holidayDetails;
  }

  closeModal() {
    this.holidayDetailsModal = false;
    this.holidayCreateEditModal = false;
  }

  resetHolidayForm(): void {
    this.holidayForm.setValue({
      name: '',
      date: new Date(),
      description: ''
    });
    this.holidayForm.markAsUntouched();
    this.holidayForm.markAsPristine();
  }

  saveHoliday(): void {
    console.log('Holiday Save');
    this.resetHolidayForm();
  }

  deleteHolidayConfirm(holidayData: Holiday): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this holiday?</i>',
      // nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => {
        console.log('Name - ', holidayData.name)
      }
    });
  }
}
