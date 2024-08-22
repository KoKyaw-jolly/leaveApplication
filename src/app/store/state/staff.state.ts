import { Staff } from "../../core/models/staff.interface";


export interface StaffState {
    staffList: Staff[];
    loading: boolean;
    error:any
}

export const staffInitialState: StaffState = {
    staffList: [],
    loading: false,
    error: null
}