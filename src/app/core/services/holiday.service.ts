import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Holiday } from '../models/holiday.interface';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  constructor(private http: HttpClient) {}

  getAllHoliday(): Observable<Holiday[]> {
    return this.http.get<Holiday[]>('http://localhost:3200/api/holidays/all-holiday/');
  }

  createHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>('http://localhost:3200/api/holidays/holiday/create', holiday);
  }

  deleteHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http.post<Holiday>('http://localhost:3200/api/holidays/holiday/delete', holiday);
  }

}
