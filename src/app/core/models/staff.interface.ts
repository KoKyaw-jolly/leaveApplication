import { LeaveTypeDetails } from "./leave.interface";

export interface Staff {
    staffId: string;
    fullName: string;
    image: string;
    gender: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    address: string;
    role: 'Admin' | 'Staff' | '';
    leaveBalance: LeaveTypeDetails[];
}