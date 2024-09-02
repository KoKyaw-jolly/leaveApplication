import { createAction, props } from "@ngrx/store";
import { Notification } from "../../core/models/notification.interface";

export const loadNotificationAll = createAction('[Notification] load notification all');
export const loadNotificationAllSuccess = createAction('[Notification] load notification all success', props<{ notificationAll: Notification[] }>());
export const loadNotificationAllFail = createAction('[Notification] load notification all fail', props<{ error: any }>());

export const loadNotificationUser = createAction('[Notification] load notification user',props<{ staffID: string }>());
export const loadNotificationUserSuccess = createAction('[Notification] load notification user success', props<{ notificationUser: Notification[] }>());
export const loadNotificationUserFail = createAction('[Notification] load notification User fail', props<{ error: any }>());
