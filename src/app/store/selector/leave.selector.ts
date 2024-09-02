import { AppState } from "../state/app.state";

export const selectLeaveRecordsAll = (state: AppState) => state.leave.leaveRecordsAll;
export const selectLeaveRecordsUser = (state: AppState) => state.leave.leaveRecordsUser;

export const selectLeaveCalendar = (state: AppState) => state.leave.calendarEvents;

export const selectLeaveReportData = (state: AppState) => state.leave.leaveReportData;