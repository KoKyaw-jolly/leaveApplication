import { createReducer, on } from "@ngrx/store";
import { holidayInitialState } from "../state/holiday.state";
import * as holidayAction from "../action/holiday.action";

export const holidayReducer = createReducer(
    holidayInitialState,
    on(holidayAction.loadHolidays, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(holidayAction.loadHolidaysSuccess, (state: any, action) =>
        ({ ...state, holidays: action.holidays, loading: false, error: null })
    ),
    on(holidayAction.loadHolidaysFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(holidayAction.createEditHoliday, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(holidayAction.createEditHolidaySuccess, (state: any, action) =>
        ({ ...state, loading: false, error: null })
    ),
    on(holidayAction.createEditHolidayFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(holidayAction.deleteHoliday, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(holidayAction.deleteHolidaySuccess, (state: any, action) =>
        ({ ...state, loading: false, error: null })
    ),
    on(holidayAction.deleteHolidayFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
)