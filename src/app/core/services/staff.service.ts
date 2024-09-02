import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Staff } from '../models/staff.interface';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) { }

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>('http://localhost:3200/api/staffs/all-staff/');
  }

  createEditStaff(staff: Staff, createEditStatus: string): Observable<Staff> {
    if (createEditStatus === 'create') {
      return this.http.post<Staff>('http://localhost:3200/api/staffs/staff/create', staff);
    } else {
      return this.http.post<Staff>('http://localhost:3200/api/staffs/staff/edit', staff);
    }
  }

  deleteStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>('http://localhost:3200/api/staffs/staff/delete', staff);
  }

}
