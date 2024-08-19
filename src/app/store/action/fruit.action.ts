import { createAction, props } from "@ngrx/store";
import { Fruit } from "../../core/models/fruit.interface";

export const loadFruit = createAction('[Fruit] Load Fruit');
export const loadFruitSuccess = createAction('[Fruit] Load Fruit Success',props<{fruits:Fruit[]}>()); 
export const loadFruitFail = createAction('[Fruit] Load Fruit Fail',props<{error:any}>());