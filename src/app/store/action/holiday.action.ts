import { createAction, props } from "@ngrx/store";
import { Holiday } from "../../core/models/holiday.interface";

export const loadHolidays = createAction('[Holiday] Load holidays');
export const loadHolidaysSuccess = createAction('[Holiday] Load holidays success', props<{ holidays: Holiday[] }>());
export const loadHolidaysFail = createAction('[Holiday] Load holidays fail', props<{ error: any }>());


export const createEditHoliday = createAction('[Holiday] Create holiday',props<{holiday:Holiday,createEditStatus:string}>());
export const createEditHolidaySuccess = createAction('[Holiday] Create holiday success', props<{ msg: any }>());
export const createEditHolidayFail = createAction('[Holiday] Create holiday fail',props<{error:any}>());

export const deleteHoliday = createAction('[Holiday] Delete holiday',props<{holiday:Holiday}>());
export const deleteHolidaySuccess = createAction('[Holiday] Delete holiday success',props<{msg:any}>());
export const deleteHolidayFail = createAction('[Holiday] Delete holiday fail',props<{error:any}>());