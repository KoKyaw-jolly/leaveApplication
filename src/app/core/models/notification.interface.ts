export interface AppNotification {
    id: string;
    date: Date | null;
    title: string;
    description: string;
    notifyTo: 'Admin' | 'Staff' | 'All';
}

export const appNotificationEmptyInitialObj: AppNotification = {
    id: '',
    date: null,
    title: '',
    description: '',
    notifyTo: 'All'
}