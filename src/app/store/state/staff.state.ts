import { Staff } from "../../core/models/staff.interface";


export interface StaffState {
    staffList: Staff[];
    listLoading: boolean;
    crudLoading: boolean;
    error:any
}

export const staffInitialState: StaffState = {
    staffList: [],
    listLoading: false,
    crudLoading: false,
    error: null
}