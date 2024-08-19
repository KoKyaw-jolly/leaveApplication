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
import { selectStaff } from '../../store/selector/staff.selector';
import * as staffAction from '../../store/action/staff.action';

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
    staffId: 0,
    fullName: '',
    image: '',
    gender: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    address: '',
    role: 'Staff',
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
    role: new FormControl('Staff')
  });

  constructor(
    private staffService: StaffService,
    private store: Store<AppState>,
    private http: HttpClient,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    // this.http.get<any[]>('assets/data/staff-temp-data.json').subscribe((data) => {
    //   this.staffListData = data;
    //   console.log(data);
    // });

    this.store.dispatch(staffAction.loadStaff());
    this.store.select(selectStaff).subscribe(res => {
      this.staffListData = res.staffData;
      this.staffListLoading = res.loading;
      console.log(res);
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
      role: 'Staff'
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
  }

  //step
  pre(): void {
    this.setpCurrent -= 1;
  }

  next(): void {
    this.setpCurrent += 1;
  }

  saveStaff(): void {
    if (this.staffForm.invalid) {
      this.staffForm.markAllAsTouched();
      return;
    }
    // Handle form submission
    console.log(this.staffForm.value);
  }

  editStaff(staffData: Staff): void {
    this.staffCreateEditModal = true;
    this.setpCurrent = 0;
    console.log(staffData);
    this.staffForm.setValue({
      fullName: staffData.fullName,
      gender: staffData.gender,
      position: staffData.position,
      department: staffData.department,
      email: staffData.email,
      phone: staffData.phone,
      address: staffData.address,
      role: staffData.role
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
}
