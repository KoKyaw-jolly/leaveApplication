import { createReducer, on } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loadFruitSuccess } from "../action/fruit.action";

export const initialState: any = {
    fruit: []
}

export const fruitReducer = createReducer(
    initialState,
    on(loadFruitSuccess, (state: any, action) =>
        ({ ...state, fruit: action.fruits })
    ),
)