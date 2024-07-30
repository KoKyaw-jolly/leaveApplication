export interface Notification {
    id: number;
    date: Date;
    title: string;
    description: string;
    notifyTo: 'Admin' | 'Staff' | 'All';
}