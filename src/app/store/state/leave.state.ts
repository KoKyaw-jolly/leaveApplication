import { LeaveRecord } from "../../core/models/leave.interface";

export interface LeaveState {
    leaveRecordsAll: LeaveRecord[];
    leaveRecordsUser: LeaveRecord[];
    loading: boolean;
    error:any
}
export const leaveInitialState: LeaveState = {
    leaveRecordsAll: [],
    leaveRecordsUser: [],
    loading: false,
    error: null
}