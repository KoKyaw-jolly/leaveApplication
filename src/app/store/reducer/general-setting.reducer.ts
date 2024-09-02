import { createReducer, on } from "@ngrx/store";
import * as generalSettingAction from "../action/general-setting.action";
import { generalSettingInitialState } from "../state/general-setting.state";

export const generalSettingReducer = createReducer(
    generalSettingInitialState,
    on(generalSettingAction.loadNotificationAll, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(generalSettingAction.loadNotificationAllSuccess, (state: any, action) =>
        ({ ...state, loading: false, notificationAll: action.notificationAll })
    ),
    on(generalSettingAction.loadNotificationAllFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(generalSettingAction.loadNotificationUser, (state: any) =>
        ({ ...state, loading: true })
    ),
    on(generalSettingAction.loadNotificationUserSuccess, (state: any, action) =>
        ({ ...state, loading: false, notificationUser: action.notificationUser })
    ),
    on(generalSettingAction.loadNotificationUserFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    )
)