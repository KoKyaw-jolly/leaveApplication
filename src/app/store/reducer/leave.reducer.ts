import { createReducer, on } from "@ngrx/store";
import { leaveInitialState } from "../state/leave.state";
import * as leaveAction from "../action/leave.action";

export const leaveReducer = createReducer(
    leaveInitialState,
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
)