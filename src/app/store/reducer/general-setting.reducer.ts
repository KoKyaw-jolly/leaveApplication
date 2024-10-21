import { createReducer, on } from "@ngrx/store";
import * as generalSettingAction from "../action/general-setting.action";
import { generalSettingInitialState } from "../state/general-setting.state";
import { AppNotification } from "../../core/models/notification.interface";

export const generalSettingReducer = createReducer(
    generalSettingInitialState,
    on(generalSettingAction.loadNotificationAll, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(generalSettingAction.loadNotificationAllSuccess, (state: any, action: { notificationAll: AppNotification[] }) =>
        ({ ...state, notificationsAll: action.notificationAll, loading: false, error: null })
    ),
    on(generalSettingAction.loadNotificationAllFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(generalSettingAction.loadNotificationUser, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(generalSettingAction.loadNotificationUserSuccess, (state: any, action) =>
        ({ ...state, notificationsUser: action.notificationUser, loading: false, error: null })
    ),
    on(generalSettingAction.loadNotificationUserFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(generalSettingAction.createEditNotification, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(generalSettingAction.createEditNotificationSuccess, (state: any, action) =>
        ({ ...state, loading: false, error: null })
    ),
    on(generalSettingAction.createEditNotificationFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(generalSettingAction.createEditLeavePolicy, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(generalSettingAction.createEditLeavePolicySuccess, (state: any, action) =>
        ({ ...state, loading: false, error: null })
    ),
    on(generalSettingAction.createEditLeavePolicyFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    ),
    on(generalSettingAction.loadLeavePolicy, (state: any) =>
        ({ ...state, loading: true, error: null })
    ),
    on(generalSettingAction.loadLeavePolicySuccess, (state: any, action) =>
        ({ ...state, leavePolicy: action.leavePolicy, loading: false, error: null })
    ),
    on(generalSettingAction.loadLeavePolicyFail, (state: any, action) =>
        ({ ...state, loading: false, error: action.error })
    )
)