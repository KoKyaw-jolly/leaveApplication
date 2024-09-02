import { createReducer, on } from "@ngrx/store";
import * as staffAction from "../action/staff.action";
import { StaffState, staffInitialState } from "../state/staff.state";
import { Staff } from "../../core/models/staff.interface";

export const staffReducer = createReducer(
    staffInitialState,
    on(staffAction.loadStaff, (state: StaffState) =>
        ({ ...state, listLoading: true, error: null })
    ),
    on(staffAction.loadStaffSuccess, (state: StaffState, action: { staffList: Staff[] }) =>
        ({ ...state, staffList: action.staffList, listLoading: false, error: null })
    ),
    on(staffAction.loadStaffFail, (state: StaffState, action: { error: any }) =>
        ({ ...state, listLoading: false, error: action.error })
    )
);