import { createReducer, on } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loadFruitSuccess } from "../action/fruit.action";
import { authInitialState } from "../state/auth.state";

export const initialState: any = {
    fruit: []
}

export const fruitReducer = createReducer(
    authInitialState,
    on(loadFruitSuccess, (state: any, action) =>
        ({ ...state, fruit: action.fruits })
    ),
)