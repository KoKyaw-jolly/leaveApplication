import { AppState } from "../state/app.state";

export const selectHolidays = (state: AppState) => state.generalSetting;