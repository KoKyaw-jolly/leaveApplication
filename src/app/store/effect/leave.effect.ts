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
}