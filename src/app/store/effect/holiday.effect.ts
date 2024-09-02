import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as holidayAction from '../action/holiday.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { Holiday } from "../../core/models/holiday.interface";
import { HolidayService } from "../../core/services/holiday.service";

@Injectable()
export class HolidayEffect {

    private actions = inject(Actions);

    constructor(private holidayServices: HolidayService) { }
    
    getHolidays$ = createEffect(() =>
        this.actions.pipe(
            //ofType() listens to a single Action. ofType() filters the Action.
            ofType(holidayAction.loadHolidays),
            mergeMap(() => {
                return this.holidayServices.getAllHoliday().pipe(
                        map((holidays: Holiday[]) => holidayAction.loadHolidaysSuccess({ holidays })),
                        catchError(error => of(holidayAction.loadHolidaysFail({ error: error.Message })))
                    );
            })
        )
    );

    // createHoliday$ = createEffect(() =>
    //     this.actions.pipe(
    //         ofType(holidayAction.createHoliday),
    //         mergeMap((action) => {
    //             return this.holidayServices.createHoliday(action.holiday).pipe(
    //                 map((action: any) => { 
    //                     holidayAction.loadHolidays();
    //                     return holidayAction.createHolidaySuccess();
    //                 }),
    //                 catchError(error => of(holidayAction.createHolidayFail({ error: error.message })))
    //             )
    //         })
    //     )
    // );

}