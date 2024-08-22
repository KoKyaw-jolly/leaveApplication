import { Staff } from "../../core/models/staff.interface";

export interface AuthInfo {
    user: Staff
}

export interface AuthInfoState {
    userInfo: AuthInfo;
    loading: boolean;
    error:any
}

export const authInitialState: AuthInfoState = {
    userInfo: {
        user: {
            staffId: '',
            fullName: '',
            image: '',
            gender: '',
            position: '',
            department: '',
            email: '',
            phone: '',
            address: '',
            role: '',
            leaveBalance: []
        }
    },
    loading: false,
    error: null
}