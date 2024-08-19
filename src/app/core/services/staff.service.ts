import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Staff } from '../models/staff.interface';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient) {}

  // getAllStaf(): Observable<any[]> {
  //   return of(['asd']);
  // }
  getAllStaff(): Observable<Staff[]> {
    return this.http.get<any[]>('assets/data/staff-temp-data.json').pipe(
      delay(3000)
    );
  }
}
