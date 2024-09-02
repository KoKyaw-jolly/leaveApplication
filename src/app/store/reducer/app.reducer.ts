import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { staffReducer } from "./staff.reducer";
import { authReducer } from "./auth.reducer";
import { LocalStorageConfig, localStorageSync } from "ngrx-store-localstorage";
import * as AuthAction from "../action/auth.action";
import { authInitialState } from "../state/auth.state";
import { staffInitialState } from "../state/staff.state";
import { holidayInitialState } from "../state/holiday.state";
import { holidayReducer } from "./holiday.reducer";
import { leaveInitialState } from "../state/leave.state";
import { leaveReducer } from "./leave.reducer";
import { generalSettingReducer } from "./general-setting.reducer";
import { generalSettingInitialState } from "../state/general-setting.state";

export const appReducer: ActionReducerMap<AppState> = {
    authInfo: authReducer,
    staff: staffReducer,
    holidays: holidayReducer,
    leave: leaveReducer,
    generalSetting: generalSettingReducer
}

const localStorageConfig: LocalStorageConfig = {
    rehydrate: true,
    storage: sessionStorage,
    removeOnUndefined: true,
    restoreDates: false,
    keys: [
        'authInfo',
        'staff',
        'holidays',
        'leave',
        'generalSetting'
    ]
}

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return function (state, action) {
        if (action.type === AuthAction.logOut.type) {
            state = {
                ...state,
                authInfo: authInitialState,
                staff: staffInitialState,
                holidays: holidayInitialState,
                leave: leaveInitialState,
                generalSetting : generalSettingInitialState
            }
        }
        return reducer(state, action);
    }
}

export function storageSyncReducer(reducer: ActionReducer<AppState>) {
    return localStorageSync(localStorageConfig)(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [storageSyncReducer, clearState];