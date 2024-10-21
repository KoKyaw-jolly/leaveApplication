import { createAction, props } from "@ngrx/store";
import { AppNotification } from "../../core/models/notification.interface";

export const createEditNotification = createAction('[Notification] Create edit notification',props<{ notification: AppNotification }>());
export const createEditNotificationSuccess = createAction('[Notification] Create edit notification success',props<{ msg: any }>());
export const createEditNotificationFail = createAction('[Notification] Create edit notification fail',props<{ error: any }>());

export const loadNotificationAll = createAction('[Notification] Load notification all');
export const loadNotificationAllSuccess = createAction('[Notification] Load notification all success', props<{ notificationAll: AppNotification[] }>());
export const loadNotificationAllFail = createAction('[Notification] Load notification all fail', props<{ error: any }>());

export const loadNotificationUser = createAction('[Notification] Load notification user',props<{ staffID: string }>());
export const loadNotificationUserSuccess = createAction('[Notification] Load notification user success', props<{ notificationUser: AppNotification[] }>());
export const loadNotificationUserFail = createAction('[Notification] Load notification User fail', props<{ error: any }>());

export const createEditLeavePolicy = createAction('[Notification] Create edit leave policy',props<{ leavePolicy: string }>());
export const createEditLeavePolicySuccess = createAction('[Notification] Create edit leave policy success', props<{ msg: any }>());
export const createEditLeavePolicyFail = createAction('[Notification] Create edit leave policy fail', props<{ error: any }>());

export const loadLeavePolicy = createAction('[Notification] Load leave policy');
export const loadLeavePolicySuccess = createAction('[Notification] Load leave policy success', props<{ leavePolicy: String }>());;
export const loadLeavePolicyFail = createAction('[Notification] Load leave policy fail', props<{ error: any }>());