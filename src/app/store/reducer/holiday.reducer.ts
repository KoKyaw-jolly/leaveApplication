import { createReducer, on } from "@ngrx/store";
import { holidayInitialState } from "../state/holiday.state";
import * as holidayAction from "../action/holiday.action";

export const holidayReducer = createReducer(
    holidayInitialState,
    on(holidayAction.loadHolidays, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(holidayAction.loadHolidaysSuccess, (state: any, action) =>
        ({ ...state, loading: false, holidays: action.holidays })
    ),
    on(holidayAction.loadHolidaysFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
)