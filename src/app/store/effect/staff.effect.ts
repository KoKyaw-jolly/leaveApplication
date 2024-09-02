import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as staffAction from '../action/staff.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { StaffService } from "../../core/services/staff.service";
import { Staff } from "../../core/models/staff.interface";
import { NzMessageService } from "ng-zorro-antd/message";

@Injectable()
export class StaffEffect {

    private actions = inject(Actions);
    // private staffService = inject(TestService);

    constructor(
        private staffService: StaffService,
        private message: NzMessageService
    ) { }

    getStaff$ = createEffect(() =>
        //this.actions$ = a stream of Actions.
        this.actions.pipe(
            //ofType() listens to a single Action. ofType() filters the Action.
            ofType(staffAction.loadStaff),
            mergeMap(() => {
                return this.staffService.getAllStaff().pipe(
                    map((staffList: Staff[]) => staffAction.loadStaffSuccess({ staffList })),
                    catchError(error => of(staffAction.loadStaffFail({ error: error.Message })))
                );
            })
        )
    );

    createStaff$ = createEffect(() =>
        this.actions.pipe(
            ofType(staffAction.createStaff),
            mergeMap((action) => {
                return this.staffService.createEditStaff(action.staff, action.createEditStatus).pipe(
                    map((action: any) => {
                        return staffAction.createStaffSuccess({ msg: action.msg ? action.msg : 'Create Staff Successfully!' });
                    }),
                    catchError(error => of(staffAction.createStaffFail({ error: error.message ? error.message : 'Something went wrong!' })))
                )
            })
        )
    );

    deleteStaff$ = createEffect(() =>
        this.actions.pipe(
            ofType(staffAction.deleteStaff),
            mergeMap((action) => {
                return this.staffService.deleteStaff(action.staff).pipe(
                    map((action: any) => {
                        this.message.create('success', action.msg ? action.msg : 'Delete Staff Successfully!');
                        return staffAction.deleteStaffSuccess({ msg: action.msg ? action.msg : 'Delete Staff Successfully!' });
                    }),
                    catchError(error => {
                        this.message.create('error', error.message ? error.message : 'Something went wrong!');
                        return of(staffAction.deleteStaffFail({ error: error.message ? error.message : 'Something went wrong!' }))
                    })
                )
            })
        )
    );

}