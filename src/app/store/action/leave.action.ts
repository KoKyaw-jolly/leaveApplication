import { createAction, props } from "@ngrx/store";
import { LeaveRecord } from "../../core/models/leave.interface";

export const applyLeave = createAction('[Leave] apply leave', props<{ leaveData: LeaveRecord }>());
export const applyLeaveSuccess = createAction('[Leave] apply leave success', props<{ msg: any }>());
export const applyLeaveFail = createAction('[Leave] apply leave fail', props<{ error: any }>());

export const loadLeaveRecordsAll = createAction('[Leave] load leave records all');
export const loadLeaveRecordsAllSuccess = createAction('[Leave] load leave records all success', props<{ leaveRecordsAll: LeaveRecord[] }>());
export const loadLeaveRecordsAllFail = createAction('[Leave] load leave records all fail', props<{ error: any }>());

export const loadLeaveRecordsUser = createAction('[Leave] load leave records user',props<{ staffID: string }>());
export const loadLeaveRecordsUserSuccess = createAction('[Leave] load leave records user success', props<{ leaveRecordsUser: LeaveRecord[] }>());
export const loadLeaveRecordsUserFail = createAction('[Leave] load leave records User fail', props<{ error: any }>());

export const loadLeaveCalendar = createAction('[Leave] load leave calendar');
export const loadLeaveCalendarSuccess = createAction('[Leave] load leave calendar Success', props<{ calendarEvents: any[] }>());
export const loadLeaveCalendarFail = createAction('[Leave] load leave calendar fail', props<{ error: any }>());

export const loadLeaveReport = createAction('[Leave] load leave report', props<{ filterData: any }>());
export const loadLeaveReportSuccess = createAction('[Leave] load leave report Success', props<{ leaveReportData: LeaveRecord[] }>());
export const loadLeaveReportFail = createAction('[Leave] load leave report fail', props<{ error: any }>());