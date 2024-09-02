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
    ),
    on(staffAction.createStaff, (state: StaffState) =>
        ({ ...state, crudLoading: true, error: null })
    ),
    on(staffAction.createStaffSuccess, (state: StaffState, action: { msg:any }) =>
        ({ ...state, crudLoading: false, error: null })
    ),
    on(staffAction.createStaffFail, (state: StaffState, action: { error: any }) =>
        ({ ...state, crudLoading: false, error: action.error })
    ),
    on(staffAction.deleteStaff, (state: StaffState) =>
        ({ ...state, crudLoading: true, error: null })
    ),
    on(staffAction.deleteStaffSuccess, (state: StaffState, action: { msg:any }) =>
        ({ ...state, crudLoading: false, error: null })
    ),
    on(staffAction.deleteStaffFail, (state: StaffState, action: { error: any }) =>
        ({ ...state, crudLoading: false, error: action.error })
    ),
);