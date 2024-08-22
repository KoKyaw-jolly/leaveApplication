import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as staffAction from '../action/staff.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { StaffService } from "../../core/services/staff.service";
import { Staff } from "../../core/models/staff.interface";

@Injectable()
export class StaffEffect {

    private actions = inject(Actions);
    // private staffService = inject(TestService);

    constructor(private staffService: StaffService) { }
    
    getStaff$ = createEffect(() =>
        //this.actions$ = a stream of Actions.
        this.actions.pipe(
            //ofType() listens to a single Action. ofType() filters the Action.
            ofType(staffAction.loadStaff),
            mergeMap(() => {
                return this.staffService.getAllStaff().pipe(
                        map((staff: Staff[]) => staffAction.loadStaffSuccess({ staff })),
                        catchError(error => of(staffAction.loadStaffFail({ error: error.Message })))
                    );
            })
        )
    );

    createStaff$ = createEffect(() =>
        this.actions.pipe(
            ofType(staffAction.createStaff),
            mergeMap((action) => {
                return this.staffService.createStaff(action.staff).pipe(
                    map((action: any) => { 
                        console.log(action);
                        return staffAction.createStaffSuccess();
                    }),
                    catchError(error => of(staffAction.createStaffFail({ error: error.message })))
                )
            })
        )
    );

}