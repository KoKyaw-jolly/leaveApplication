import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../core/constants/images-url';
import { APP_IMPORT } from '../../app.import';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../../core/models/staff.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { StaffService } from '../../core/services/staff.service';
import { selectStaffs } from '../../store/selector/staff.selector';
import * as staffAction from '../../store/action/staff.action';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss'
})
export class StaffManagementComponent implements OnInit {

  images = IMAGES;
  listStyle: string = 'card';
  staffListLoading: boolean = false;
  staffListData: Staff[] = [];
  staffCreateEditModal: boolean = false;
  staffDetailsModal: boolean = false;
  staffDetailsObj: Staff = {
    staffId: '',
    fullName: '',
    image: '',
    gender: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    leaveBalance: []
  }
  //staff create/edit step
  setpCurrent: number = 0;

  //form
  staffForm = new FormGroup({
    fullName: new FormControl('asd', [Validators.required]),
    gender: new FormControl('male'),
    position: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    // image: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    annual: new FormControl(0, [Validators.required]),
    offInLieu: new FormControl(0, [Validators.required]),
    medical: new FormControl(0, [Validators.required]),
  });

  createEditBtnLoading: boolean = false;
  createEditBtnError = {
    visable: false,
    message: ''
  };

  constructor(
    private staffService: StaffService,
    private store: Store<AppState>,
    private http: HttpClient,
    private modal: NzModalService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(staffAction.loadStaff());
    this.store.select(selectStaffs).subscribe(res => {
      this.staffListData = res.staffList;
      this.staffListLoading = res.loading;
    })
  }

  resetStaffForm(): void {
    this.staffForm.setValue({
      fullName: '',
      gender: 'male',
      position: 'Developer',
      department: 'Dev Team',
      email: '',
      phone: '',
      address: '',
      role: '',
      annual: 0,
      offInLieu: 0,
      medical: 0,
    });
    this.staffForm.markAsUntouched();
    this.staffForm.markAsPristine();
  }

  closeModal(): void {
    this.staffCreateEditModal = false;
    this.staffDetailsModal = false;
  }

  staffCreateClick(): void {
    this.staffCreateEditModal = true;
    this.resetStaffForm();
    this.setpCurrent = 0;
    this.createEditBtnError.visable = false;
  }

  //step
  pre(): void {
    this.setpCurrent -= 1;
  }

  next(): void {
    this.setpCurrent += 1;
  }

  saveStaff(): void {
    this.createEditBtnLoading = true
    if (this.staffForm.invalid) {
      this.staffForm.markAllAsTouched();
      this.createEditBtnLoading = false;
      return;
    }
    const StaffData: Staff = {
      staffId: '',
      fullName: this.undefinedCheck(this.staffForm.get('fullName')?.value),
      image: '',
      gender: this.undefinedCheck(this.staffForm.get('gender')?.value),
      position: this.undefinedCheck(this.staffForm.get('position')?.value),
      department: this.undefinedCheck(this.staffForm.get('department')?.value),
      email: this.undefinedCheck(this.staffForm.get('email')?.value),
      phone: this.undefinedCheck(this.staffForm.get('phone')?.value),
      address: this.undefinedCheck(this.staffForm.get('address')?.value),
      role: this.undefinedCheck(this.staffForm.get('role')?.value),
      leaveBalance: [
        {
          leaveType: 'Annual',
          totalDays: this.undefinedCheck(this.staffForm.get('annual')?.value),
          remainingDays: this.undefinedCheck(this.staffForm.get('annual')?.value)
        },
        {
          leaveType: 'Off-In-Lieu',
          totalDays: this.undefinedCheck(this.staffForm.get('offInLieu')?.value),
          remainingDays: this.undefinedCheck(this.staffForm.get('offInLieu')?.value)
        },
        {
          leaveType: 'Medical',
          totalDays: this.undefinedCheck(this.staffForm.get('medical')?.value),
          remainingDays: this.undefinedCheck(this.staffForm.get('medical')?.value)
        },
      ]
    }

    // this.store.dispatch(staffAction.createStaff({ staff: StaffData }));
    this.staffService.createStaff(StaffData).subscribe(
      {
        next: (res) => {
          this.staffCreateEditModal = false;
          this.message.create('success', `Staff Create Successfully!`);
          this.store.dispatch(staffAction.loadStaff());
        },
        error: (err) => {
          this.createEditBtnError.visable = true;
          this.createEditBtnError.message = err.error.message ? err.error.message : 'Something went wrong!';
        },
        complete: () => {
          this.createEditBtnLoading = false;
        }
      }
    )
  }

  editStaff(staffData: Staff): void {
    this.staffCreateEditModal = true;
    this.setpCurrent = 0;
    this.staffForm.setValue({
      fullName: staffData.fullName,
      gender: staffData.gender,
      position: staffData.position,
      department: staffData.department,
      email: staffData.email,
      phone: staffData.phone,
      address: staffData.address,
      role: staffData.role,
      annual: 0,
      offInLieu: 0,
      medical: 0,
    });
  }

  openStaffDetails(staff: Staff): void {
    this.staffDetailsObj = staff;
    this.staffDetailsModal = true;
  }

  deleteStaffConfirm(staffData: Staff): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this staff?</i>',
      // nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => {
        console.log('Name - ', staffData.fullName)
      }
    });
  }

  undefinedCheck(value: any) {
    if (value === undefined) {
      return '';
    }
    return value;
  }
}
