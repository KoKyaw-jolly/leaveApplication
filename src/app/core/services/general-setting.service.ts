import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppNotification } from '../models/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingService {
  constructor(private http: HttpClient) { }

  getNotidicationAll(): Observable<AppNotification[]> {
    return this.http.get<AppNotification[]>('http://localhost:3200/api/general-setting/notification/notification-all');
}
  getNotidicationUser(staffID: string): Observable<AppNotification[]> {
    return this.http.get<AppNotification[]>('http://localhost:3200/api/general-setting/notification/notification-user', { params: { staffID: staffID } });
  }

  createNotification(notification: AppNotification): Observable<AppNotification> {
    return this.http.post<AppNotification>('http://localhost:3200/api/general-setting/notification/create', notification);
  }

  getLeavePolicy(): Observable<string> {
    return this.http.get<string>('http://localhost:3200/api/general-setting/leave-policy');
  }

  createEditLeavePloicy(leavePolicy: string): Observable<any> {
    return this.http.post<any>('http://localhost:3200/api/general-setting/leave-policy/create', { params: { leavePolicy: leavePolicy } });
  }

  // deleteNotification(notification: Notification): Observable<AppNotification> {
  //   return this.http.post<AppNotification>('http://localhost:3200/api/general-setting/notification/delete', notification);
  // }

}
