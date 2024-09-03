import { createReducer, on } from "@ngrx/store";
import { leaveInitialState } from "../state/leave.state";
import * as leaveAction from "../action/leave.action";

export const leaveReducer = createReducer(
    leaveInitialState,
    on(leaveAction.applyLeave, (state: any) =>
        ({ ...state, applyLeaveLoading: true, error: null })
    ),
    on(leaveAction.applyLeaveSuccess, (state: any) =>
        ({ ...state, applyLeaveLoading: false , error: null })
    ),
    on(leaveAction.applyLeaveFail, (state: any, action) =>
        ({ ...state, applyLeaveLoading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveRecordsAll, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(leaveAction.loadLeaveRecordsAllSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveRecordsAll: action.leaveRecordsAll, error: null })
    ),
    on(leaveAction.loadLeaveRecordsAllFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveRecordsUser, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(leaveAction.loadLeaveRecordsUserSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveRecordsUser: action.leaveRecordsUser, error: null })
    ),
    on(leaveAction.loadLeaveRecordsUserFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveCalendar, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(leaveAction.loadLeaveCalendarSuccess, (state: any, action) =>
        ({ ...state, loading: false, calendarEvents: action.calendarEvents, error: null })
    ),
    on(leaveAction.loadLeaveCalendarFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.loadLeaveReport, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(leaveAction.loadLeaveReportSuccess, (state: any, action) =>
        ({ ...state, loading: false, leaveReportData: action.leaveReportData, error: null })
    ),
    on(leaveAction.loadLeaveReportFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(leaveAction.approveRejectLeave, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(leaveAction.approveRejectLeaveSuccess, (state: any) =>
        ({ ...state, loading: false , error: null })
    ),
    on(leaveAction.approveRejectLeaveFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
)