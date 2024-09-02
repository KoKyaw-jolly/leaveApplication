import { LeaveRecord } from "../../core/models/leave.interface";

export interface LeaveState {
    leaveRecordsAll: LeaveRecord[];
    leaveRecordsUser: LeaveRecord[];
    calendarEvents: any[];
    leaveReportData: LeaveRecord[];
    loading: boolean;
    error:any
}
export const leaveInitialState: LeaveState = {
    leaveRecordsAll: [],
    leaveRecordsUser: [],
    calendarEvents: [],
    leaveReportData: [],
    loading: false,
    error: null
}