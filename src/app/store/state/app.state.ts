
import { AuthInfoState } from "./auth.state";
import { GeneralSettingState } from "./general-setting.state";
import { HolidayState } from "./holiday.state";
import { LeaveState } from "./leave.state";
import { StaffState } from "./staff.state";

export interface AppState {
    // fruit: any;
    authInfo: AuthInfoState;
    staff: StaffState;
    holidays: HolidayState;
    leave: LeaveState;
    generalSetting: GeneralSettingState;
}