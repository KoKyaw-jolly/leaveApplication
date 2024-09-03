import { Injectable, inject } from "@angular/core";
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import * as holidayAction from '../action/holiday.action';
import { catchError, map, mergeMap, of } from "rxjs";
import { Holiday } from "../../core/models/holiday.interface";
import { HolidayService } from "../../core/services/holiday.service";
import { NzMessageService } from "ng-zorro-antd/message";

@Injectable()
export class HolidayEffect {

    private actions = inject(Actions);

    constructor(
        private holidayServices: HolidayService,
        private message: NzMessageService
    ) { }

    getHolidays$ = createEffect(() =>
        this.actions.pipe(
            ofType(holidayAction.loadHolidays),
            mergeMap(() => {
                return this.holidayServices.getAllHoliday().pipe(
                    map((holidays: Holiday[]) => holidayAction.loadHolidaysSuccess({ holidays })),
                    catchError(error => of(holidayAction.loadHolidaysFail({ error: error.Message })))
                );
            })
        )
    );

    createEditHoliday$ = createEffect(() =>
        this.actions.pipe(
            ofType(holidayAction.createEditHoliday),
            mergeMap((action) => {
                return this.holidayServices.createEditHoliday(action.holiday, action.createEditStatus).pipe(
                    map((action: any) => {
                        const resMsg = action.msg ? action.msg : 'Save Successfully!';
                        this.message.create('success', resMsg);
                        return holidayAction.createEditHolidaySuccess({ msg: resMsg });
                    }),
                    catchError(error => {
                        const resErr = error.msg ? error.msg : 'Save fail! Please try again.';
                        this.message.create('error', resErr);
                        return of(holidayAction.createEditHolidayFail({ error: resErr }))
                    })
                )
            })
        )
    )

    deleteHoliday$ = createEffect(() =>
        this.actions.pipe(
            ofType(holidayAction.deleteHoliday),
            mergeMap((action) => {
                return this.holidayServices.deleteHoliday(action.holiday).pipe(
                    map((action: any) => {
                        const resMsg = action.msg ? action.msg : 'Delete Successfully!';
                        this.message.create('success', resMsg);
                        return holidayAction.deleteHolidaySuccess({ msg: resMsg });
                    }),
                    catchError(error => {
                        const resErr = error.msg ? error.msg : 'Delete fail! Please try again.';
                        this.message.create('error', resErr);
                        return of(holidayAction.deleteHolidayFail({ error: resErr }))
                    })
                )
            })
        )
    )

}