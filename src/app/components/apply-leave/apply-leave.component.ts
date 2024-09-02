import { Component, OnDestroy, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { UserLeaveSummaryComponent } from '../../share/components/user-leave-summary/user-leave-summary.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { LeaveRecord } from '../../core/models/leave.interface';
import * as leaveActions from '../../store/action/leave.action';
import { Subscription } from 'rxjs';
import { selectLeave } from '../../store/selector/leave.selector';

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
export class ApplyLeaveComponent implements OnInit, OnDestroy {

  applyLeaveForm: FormGroup;
  userInfo: any;
  applyLeaveLoading: boolean = false;

  totalLeaveDays: number = 0;

  private subscribe: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.applyLeaveForm = this.fb.group({
      leaveType: ['', Validators.required],
      dateRange: [[], [Validators.required]],
      phone: [''],
      reason: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscribe.add(
      this.store.select(selectAuthUserInfo).subscribe(res => {
        this.userInfo = res.userInfo;
      })
    )
    this.subscribe.add(
      this.store.select(selectLeave).subscribe(res => {
        this.applyLeaveLoading = res.applyLeaveLoading;
        if (res.applyLeaveLoading) {
          this.applyLeaveForm.disable();
        } else if (res.applyLeaveLoading == false && res.error === null) {
          this.applyLeaveForm.enable();
          this.totalLeaveDays = 0;
          this.applyLeaveForm.reset();
        } else if (res.applyLeaveLoading == false && res.error != null) {
          this.applyLeaveForm.enable();
        }
      })
    )
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
    if (!this.applyLeaveForm.valid) {
      Object.values(this.applyLeaveForm.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    } else {
      this.applyLeaveForm.disable();
      console.log('this.applyLeaveForm.value', this.applyLeaveForm.value);
      const applyLeaveData: LeaveRecord = {
        id: '',
        staffId: this.userInfo.staffId,
        fullName: this.userInfo.fullName,
        applyDate: new Date(),
        leaveType: this.undefinedCheck(this.applyLeaveForm.get('leaveType')?.value),
        takenDays: this.totalLeaveDays,
        startDate: this.undefinedCheck(this.applyLeaveForm.get('dateRange')?.value[0]),
        endDate: this.undefinedCheck(this.applyLeaveForm.get('dateRange')?.value[1]),
        phoneDuringLeave: this.undefinedCheck(this.applyLeaveForm.get('phone')?.value),
        reason: this.undefinedCheck(this.applyLeaveForm.get('reason')?.value),
        leaveStatus: 'Pending'
      }
      this.store.dispatch(leaveActions.applyLeave({ leaveData: applyLeaveData }));
    }
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