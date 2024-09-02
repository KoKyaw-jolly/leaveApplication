import { createReducer, on } from "@ngrx/store";
import { leaveInitialState } from "../state/leave.state";
import * as leaveAction from "../action/leave.action";

export const leaveReducer = createReducer(
    leaveInitialState,
    on(leaveAction.applyLeave, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(leaveAction.applyLeaveSuccess, (state: any) =>
        ({ ...state, loading: false })
    ),
    on(leaveAction.applyLeaveFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveRecordsAll, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(leaveAction.loadLeaveRecordsAllSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveRecordsAll: action.leaveRecordsAll })
    ),
    on(leaveAction.loadLeaveRecordsAllFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveRecordsUser, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(leaveAction.loadLeaveRecordsUserSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveRecordsUser: action.leaveRecordsUser })
    ),
    on(leaveAction.loadLeaveRecordsUserFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveCalendar, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(leaveAction.loadLeaveCalendarSuccess, (state: any, action) =>
        ({ ...state, loading: false, calendarEvents: action.calendarEvents })
    ),
    on(leaveAction.loadLeaveCalendarFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveReport, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(leaveAction.loadLeaveReportSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveReportData: action.leaveReportData })
    ),
    on(leaveAction.loadLeaveReportFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
)