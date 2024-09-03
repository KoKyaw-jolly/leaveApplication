import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMAGES } from '../../core/constants/images-url';
import { APP_IMPORT } from '../../app.import';
import { HttpClient } from '@angular/common/http';
import { Staff, staffEmptyInitialObj } from '../../core/models/staff.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { StaffService } from '../../core/services/staff.service';
import { selectStaffs } from '../../store/selector/staff.selector';
import * as staffAction from '../../store/action/staff.action';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';
import { staffInitialState } from '../../store/state/staff.state';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss'
})
export class StaffManagementComponent implements OnInit, OnDestroy {

  images = IMAGES;
  listStyle: string = 'card';
  staffListLoading: boolean = false;
  staffListData: Staff[] = [];
  staffCreateEditModal: boolean = false;
  staffDetailsModal: boolean = false;
  staffDeleteModal: boolean = false;
  staffDetailsObj: Staff = staffEmptyInitialObj;

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
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) {
    this.staffForm = this.fb.group({
      fullName: ['', Validators.required],
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

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(selectStaffs).subscribe(res => {
        this.staffListData = res.staffList;
        this.staffListLoading = res.listLoading;
        this.createEditBtnLoading = res.crudLoading;
        if (res.crudLoading == false && res.error == null) {
          this.closeModal();
        }
        if (res.error != null) {
          this.createEditError.visable = true;
          this.createEditError.message = res.error;
        } else {
          this.createEditError.visable = false;
        }
      })
    );
  }

  closeModal(): void {
    this.staffCreateEditModal = false;
    this.createEditError.visable = false;
    this.staffDetailsModal = false;
    this.staffDeleteModal = false;
    this.staffDetailsObj = staffEmptyInitialObj;
    this.staffForm.reset();
  }

  createStaff(): void {
    this.staffCreateEditModal = true;
    this.setpCurrent = 0;
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
      Object.values(this.staffForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      this.createEditBtnLoading = false;
      return;
    } else {
      const staffData: Staff = {
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
      };
      this.store.dispatch(staffAction.createStaff({ staff: staffData, createEditStatus: this.createEditStatus }));
    }
  }

  openStaffDetails(staff: Staff): void {
    this.staffDetailsObj = staff;
    this.staffDetailsModal = true;
  }
  deleteStaff(staff: Staff): void {
    this.staffDeleteModal = true;
    this.staffDetailsObj = staff;
  }

  deleteStaffConfirm(): void {
    this.store.dispatch(staffAction.deleteStaff({ staff: this.staffDetailsObj }));
  }

  undefinedCheck(value: any) {
    if (value === undefined) {
      return '';
    }
    return value;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
