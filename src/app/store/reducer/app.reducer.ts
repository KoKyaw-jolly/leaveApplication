import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { staffReducer } from "./staff.reducer";
import { authReducer } from "./auth.reducer";
import { LocalStorageConfig, localStorageSync } from "ngrx-store-localstorage";
import * as AuthAction from "../action/auth.action";
import { authInitialState } from "../state/auth.state";
import { staffInitialState } from "../state/staff.state";

export const appReducer: ActionReducerMap<AppState> = {
    authInfo: authReducer,
    staff: staffReducer,
}

const localStorageConfig: LocalStorageConfig = {
    rehydrate: true,
    storage: sessionStorage,
    removeOnUndefined: true,
    restoreDates: false,
    keys: [
        'authInfo',
        'staff'
    ]
}

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {

    return function (state, action) {
        if (action.type === AuthAction.logOut.type) {
            state = {
                ...state,
                authInfo: authInitialState,
                staff: staffInitialState
            }
        }
        return reducer(state, action);
    }
}

export function storageSyncReducer(reducer: ActionReducer<AppState>) {
    return localStorageSync(localStorageConfig)(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [storageSyncReducer,clearState];