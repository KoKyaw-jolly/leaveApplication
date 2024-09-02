import { Notification } from "../../core/models/notification.interface";

export interface GeneralSettingState{
    notificationsAll: Notification[];
    notificationsUser: Notification[];
    loading: boolean;
    error: any;
}

export const generalSettingInitialState: GeneralSettingState = {
    notificationsAll: [],
    notificationsUser: [],
    loading: false,
    error: null
}
