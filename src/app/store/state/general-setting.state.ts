import { AppNotification } from "../../core/models/notification.interface";

export interface GeneralSettingState {
    notificationsAll: AppNotification[];
    notificationsUser: AppNotification[];
    leavePolicy: any;
    loading: boolean;
    error: any;
}

export const generalSettingInitialState: GeneralSettingState = {
    notificationsAll: [],
    notificationsUser: [],
    leavePolicy: '',
    loading: false,
    error: null
}
