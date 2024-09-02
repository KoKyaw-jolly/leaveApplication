import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../core/constants/images-url';
import { APP_IMPORT } from '../../app.import';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../../core/models/staff.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
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
  staffForm: FormGroup;

  createEditBtnLoading: boolean = false;
  createEditError = {
    visable: false,
    message: ''
  };
  createEditStatus: string = 'create';
  deleteConfirmModal?: NzModalRef;

  constructor(
    private staffService: StaffService,
    private store: Store<AppState>,
    private http: HttpClient,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) {
    this.staffForm = this.fb.group({
      fullName: ['asd', Validators.required],
      gender: ['male'],
      position: ['', Validators.required],
      department: ['', Validators.required],
      // image: ['',
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
      annual: [0, Validators.required],
      offInLieu: [0, Validators.required],
      medical: [0, Validators.required],
    })
  }

  ngOnInit(): void {
    this.store.dispatch(staffAction.loadStaff());
    this.store.select(selectStaffs).subscribe(res => {
      this.staffListData = res.staffList;
      this.staffListLoading = res.listLoading;
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

  createStaff(): void {
    this.staffCreateEditModal = true;
    this.resetStaffForm();
    this.setpCurrent = 0;
    this.createEditError.visable = false;
    this.createEditStatus = 'create';
  }

  editStaff(staffData: Staff): void {
    this.createEditStatus = 'edit';
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
    this.staffService.createEditStaff(StaffData, this.createEditStatus).subscribe(
      {
        next: (res) => {
          this.staffCreateEditModal = false;
          this.message.create('success', `Staff Create Successfully!`);
          this.store.dispatch(staffAction.loadStaff());
        },
        error: (err) => {
          this.createEditError.visable = true;
          this.createEditError.message = err.error.message ? err.error.message : 'Something went wrong!';
          this.createEditBtnLoading = false;
        },
        complete: () => {
          this.createEditBtnLoading = false;
        }
      }
    )
  }

  openStaffDetails(staff: Staff): void {
    this.staffDetailsObj = staff;
    this.staffDetailsModal = true;
  }

  deleteStaffConfirm(staffData: Staff): void {
    this.deleteConfirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          this.staffService.deleteStaff(staffData).subscribe({
            next: (res) => {
              this.message.create('success', 'Staff Delete Successfully!');
              this.store.dispatch(staffAction.loadStaff());
              console.log(res);
              resolve(res);
            },
            error: (err) => {
              this.message.create('error', 'Staff Delete Fail!');
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
