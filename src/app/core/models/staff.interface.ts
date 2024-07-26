import { LeaveTypeDetails } from "./leave.interface";

export interface Staff {
    staffId: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    position : string;
    department : string;
    role : 'Admin' | 'Staff';
    leaveBalance : LeaveTypeDetails[];
}