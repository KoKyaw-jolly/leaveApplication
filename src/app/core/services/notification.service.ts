import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Notification } from '../models/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) { }

  getAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>('http://localhost:3200/api/holidays/all-holiday/');
  }
  getUserNotification(staffID:string): Observable<Notification[]> {
    return this.http.get<Notification[]>('http://localhost:3200/api/holidays/all-holiday/', { params: { staffID: staffID } });
  }
}
