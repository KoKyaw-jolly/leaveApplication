import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { LeaveRecord } from '../models/leave.interface';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  constructor(private http: HttpClient) {}

  applyLeave(leaveRecord: LeaveRecord): Observable<LeaveRecord> {
    return this.http.post<LeaveRecord>('http://localhost:3200/api/leave/apply-leave', leaveRecord);
  }

  getAllLeaveRecords(): Observable<LeaveRecord[]> {
    return this.http.get<LeaveRecord[]>('http://localhost:3200/api/leave/leave-records/all');
  }

  getUserLeaveRecords(staffID: string): Observable<LeaveRecord[]> {
    return this.http.get<LeaveRecord[]>('http://localhost:3200/api/leave/leave-records/user', { params: { staffID: staffID } });
  }
}