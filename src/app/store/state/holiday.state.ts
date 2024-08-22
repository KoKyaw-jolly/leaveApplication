import { Holiday } from "../../core/models/holiday.interface";

export interface HolidayState {
    holidays: Holiday[];
    loading: boolean;
    error: any;
}

export const holidayInitialState: HolidayState = {
    holidays: [],
    loading: false,
    error: null
}