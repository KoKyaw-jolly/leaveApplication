import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../../core/constants/images-url';
import { APP_IMPORT } from '../../app.import';
import { HttpClient } from '@angular/common/http';
import { Staff } from '../../core/models/staff.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  staffListData: Staff[] = [];
  staffModal: boolean = false;

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/staff-temp-data.json').subscribe((data) => {
      this.staffListData = data;
      console.log(data);
    });
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
    this.staffModal = false;
  }

  staffCreateClick(): void {
    this.staffModal = true;
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
}
