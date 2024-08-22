
import { AuthInfoState } from "./auth.state";
import { HolidayState } from "./holiday.state";
import { StaffState } from "./staff.state";

export interface AppState {
    // fruit: any;
    authInfo: AuthInfoState;
    staff: StaffState;
    holidays: HolidayState;
}