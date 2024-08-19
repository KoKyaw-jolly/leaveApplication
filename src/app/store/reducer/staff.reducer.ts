import { createReducer, on } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loadFruitSuccess } from "../action/fruit.action";
import { loadStaff, loadStaffSuccess } from "../action/staff.action";

export const initialState: any = {
    staffData: [],
    loading: false
}

export const staffReducer = createReducer(
    initialState,
    on(loadStaff, (state: any, action) =>
        ({ ...state, loading: true })
    ),
    on(loadStaffSuccess, (state: any, action) =>
        ({ ...state, staffData: action.staff, loading: false })
    ),
)