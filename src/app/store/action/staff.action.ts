import { createAction, props } from "@ngrx/store";
import { Staff } from "../../core/models/staff.interface";

export const loadStaff = createAction('[Staff] Load Staff');
export const loadStaffSuccess = createAction('[Staff] Load Staff Success',props<{staffList:Staff[]}>()); 
export const loadStaffFail = createAction('[Staff] Load Staff Fail',props<{error:any}>());

// export const createStaff = createAction('[Staff] Create Staff',props<{staff:Staff}>());
// export const createStaffSuccess = createAction('[Staff] Create Staff Success');
// export const createStaffFail = createAction('[Staff] Create Staff Success',props<{error:any}>());