import { createAction, props } from "@ngrx/store";
import { Holiday } from "../../core/models/holiday.interface";

export const loadHolidays = createAction('[Holiday] load Holidays');
export const loadHolidaysSuccess = createAction('[Holiday] load Holidays Success', props<{ holidays: Holiday[] }>());
export const loadHolidaysFail = createAction('[Holiday] load Holidays Fail', props<{ error: any }>());

// export const createHoliday = createAction('[Holiday] Create Holiday',props<{holiday:Holiday}>());
// export const createHolidaySuccess = createAction('[Holiday] Create Holiday Success');
// export const createHolidayFail = createAction('[Holiday] Create Holiday Success',props<{error:any}>());