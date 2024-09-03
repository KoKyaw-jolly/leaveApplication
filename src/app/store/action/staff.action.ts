import { createAction, props } from "@ngrx/store";
import { Staff } from "../../core/models/staff.interface";

export const loadStaff = createAction('[Staff] Load staff');
export const loadStaffSuccess = createAction('[Staff] Load staff success', props<{ staffList: Staff[] }>());
export const loadStaffFail = createAction('[Staff] Load staff Fail', props<{ error: any }>());

export const createStaff = createAction('[Staff] Create staff', props<{ staff: Staff, createEditStatus: string }>());
export const createStaffSuccess = createAction('[Staff] Create staff success', props<{ msg: any }>());
export const createStaffFail = createAction('[Staff] Create staff fail', props<{ error: any }>());

export const deleteStaff = createAction('[Staff] Delete staff', props<{ staff: Staff }>());
export const deleteStaffSuccess = createAction('[Staff] Delete staff success', props<{ msg: any }>());
export const deleteStaffFail = createAction('[Staff] Delete staff fail', props<{ error: any }>());