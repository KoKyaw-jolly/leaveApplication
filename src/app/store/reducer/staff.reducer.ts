import { createReducer, on } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loadFruitSuccess } from "../action/fruit.action";
import * as staffAction from "../action/staff.action";
import { staffInitialState } from "../state/staff.state";
import { state } from "@angular/animations";

export const staffReducer = createReducer(
    staffInitialState,
    on(staffAction.loadStaff, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(staffAction.loadStaffSuccess, (state: any, action) =>
        ({ ...state, staffList: action.staff, loading: false })
    ),
    on(staffAction.loadStaffFail, (state: any, action) =>
        ({ ...state, error: action.error, loading: false })
    ),
    on(staffAction.createStaff, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(staffAction.createStaffSuccess, (state: any, action) =>
        ({ ...state, loading: false })
    ),
    on(staffAction.createStaffFail, (state: any, action) =>
        ({ ...state, error: action, loading: false })
    ),

)