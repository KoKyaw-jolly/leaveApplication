import { createAction, props } from "@ngrx/store";
import { Staff } from "../../core/models/staff.interface";

export const loadStaff = createAction('[Staff] Load Staff');
export const loadStaffSuccess = createAction('[Staff] Load Staff Success',props<{staff:Staff[]}>()); 
export const loadStaffFail = createAction('[Staff] Load Staff',props<{error:any}>());