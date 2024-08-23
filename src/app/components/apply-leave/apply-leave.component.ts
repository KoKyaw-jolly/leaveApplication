import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { UserLeaveSummaryComponent } from '../../share/components/user-leave-summary/user-leave-summary.component';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveTypes } from '../../core/constants/leave.constant';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { LeaveRecord } from '../../core/models/leave.interface';
import { LeaveService } from '../../core/services/leave.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [
    APP_IMPORT,
    UserLeaveSummaryComponent
  ],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent implements OnInit {

  applyLeaveForm: FormGroup;
  userInfo: any;
  submitLoading: boolean = false;

  totalLeaveDays: number = 0;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private leaveService: LeaveService,
    private message: NzMessageService
  ) {
    this.applyLeaveForm = this.fb.group({
      leaveType: ['', Validators.required],
      dateRange: [[], [Validators.required]],
      phone: [''],
      reason: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.select(selectAuthUserInfo).subscribe(res => {
      this.userInfo = res.userInfo;
    })
  }

  restartForm() {
    this.applyLeaveForm.setValue({
      leaveType: '',
      dateRange: [],
      phone: '',
      reason: '',
    });
    this.applyLeaveForm.markAsUntouched();
    this.applyLeaveForm.markAsPristine();
    this.applyLeaveForm.reset();
  }

  onChange(result: any[]): void {
    if (result != null && result.length == 2) {
      const diffTime = Math.abs(result[1].getTime() - result[0].getTime());
      this.totalLeaveDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    } else {
      this.totalLeaveDays = 0;
    }
  }
  onSubmit() {
    this.submitLoading = true;
    if (this.applyLeaveForm.invalid) {
      this.submitLoading = false;
      Object.values(this.applyLeaveForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    } else {
      const applyLeaveData: LeaveRecord = {
        id: '',
        staffId: this.userInfo.staffId,
        fullName: this.userInfo.fullName,
        applyDate: new Date(),
        leaveType: this.undefinedCheck(this.applyLeaveForm.get('leaveType')?.value),
        takenDays: this.totalLeaveDays,
        startDate: this.undefinedCheck(this.applyLeaveForm.get('dateRange')?.value[0]),
        endDate: this.undefinedCheck(this.applyLeaveForm.get('dateRange')?.value[0]),
        phoneDuringLeave: this.undefinedCheck(this.applyLeaveForm.get('phone')?.value),
        reason: this.undefinedCheck(this.applyLeaveForm.get('reason')?.value),
        leaveStatus: 'Pending'
      }

      this.leaveService.applyLeave(applyLeaveData).subscribe({
        next: (res) => {
          this.message.create('success', `Leave Apply Successfully!`);
          this.restartForm();
        },
        error: (err) => {
          this.message.create('error', `Leave Apply Failed!`);
          this.submitLoading = false;
        },
        complete: () => {
          this.submitLoading = false;
        }
      })
    }
  }

  undefinedCheck(value: any) {
    if (value === undefined) {
      return '';
    }
    return value;
  }
}
