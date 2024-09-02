import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as leaveAction from '../action/leave.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { LeaveRecord } from "../../core/models/leave.interface";
import { LeaveService } from "../../core/services/leave.service";

@Injectable()
export class LeaveEffect {

    private actions = inject(Actions);

    private leaveService = inject(LeaveService)

    applyLeave$ = createEffect(() =>
        this.actions.pipe(
            ofType(leaveAction.applyLeave),
            mergeMap((action) => {
                return this.leaveService.applyLeave(action.leaveData).pipe(
                        map(() => leaveAction.applyLeaveSuccess()),
                        catchError(error => of(leaveAction.applyLeaveFail({ error: error.error })))
                    );
            })
        )
    );

    getLeavesAll$ = createEffect(() =>
        this.actions.pipe(
            ofType(leaveAction.loadLeaveRecordsAll),
            mergeMap(() => {
                return this.leaveService.getAllLeaveRecords().pipe(
                        map((leaveRecordsAll: LeaveRecord[]) => leaveAction.loadLeaveRecordsAllSuccess({ leaveRecordsAll })),
                        catchError(error => of(leaveAction.loadLeaveRecordsAllFail({ error: error.error })))
                    );
            })
        )
    );

    getLeavesUser$ = createEffect(() =>
        this.actions.pipe(
            ofType(leaveAction.loadLeaveRecordsUser),
            mergeMap((action) => {
                return this.leaveService.getUserLeaveRecords(action.staffID).pipe(
                        map((leaveRecordsUser: LeaveRecord[]) => leaveAction.loadLeaveRecordsUserSuccess({ leaveRecordsUser })),
                        catchError(error => of(leaveAction.loadLeaveRecordsUserFail({ error: error.error })))
                    );
            })
        )
    );

    getCalendarEvents$ = createEffect(() =>
        this.actions.pipe(
            ofType(leaveAction.loadLeaveCalendar),
            mergeMap(() => {
                return this.leaveService.getLeaveCalendar().pipe(
                        map((calendarEvents: any[]) => leaveAction.loadLeaveCalendarSuccess({ calendarEvents })),
                        catchError(error => of(leaveAction.loadLeaveCalendarFail({ error: error.error })))
                    );
            })
        )
    );

    getLeaveReportData$ = createEffect(() =>
        this.actions.pipe(
            ofType(leaveAction.loadLeaveReport),
            mergeMap((action) => {
                return this.leaveService.getLeaveReportData(action.filterData).pipe(
                        map((leaveReportData: any[]) => leaveAction.loadLeaveReportSuccess({ leaveReportData })),
                        catchError(error => of(leaveAction.loadLeaveReportFail({ error: error.error })))
                    );
            })
        )
    );
}