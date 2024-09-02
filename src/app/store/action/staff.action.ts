import { createAction, props } from "@ngrx/store";
import { Staff } from "../../core/models/staff.interface";

export const loadStaff = createAction('[staff] Load staff');
export const loadStaffSuccess = createAction('[staff] Load staff success', props<{ staffList: Staff[] }>());
export const loadStaffFail = createAction('[staff] Load staff Fail', props<{ error: any }>());

export const createStaff = createAction('[staff] Create staff', props<{ staff: Staff, createEditStatus: string }>());
export const createStaffSuccess = createAction('[staff] Create staff success', props<{ msg: any }>());
export const createStaffFail = createAction('[staff] Create staff Fail', props<{ error: any }>());

export const deleteStaff = createAction('[staff] delete staff', props<{ staff: Staff }>());
export const deleteStaffSuccess = createAction('[staff] delete staff success', props<{ msg: any }>());
export const deleteStaffFail = createAction('[staff] delete staff fail', props<{ error: any }>());