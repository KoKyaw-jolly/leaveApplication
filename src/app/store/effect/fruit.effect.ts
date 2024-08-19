import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fruitAction from '../action/fruit.action';
import { catchError, map, mergeMap, of } from "rxjs";
// import { UserInterface } from "../interfaces/user.interface";
import { TestService } from "../../core/services/test.service";
import { Fruit } from "../../core/models/fruit.interface";

@Injectable()
export class FruitEffects {

    private actions = inject(Actions);
    // private userService = inject(TestService);

    constructor(private userService: TestService) { }
    
    getUsers$ = createEffect(() =>
        //this.actions$ = a stream of Actions.
        this.actions.pipe(
            //ofType() listens to a single Action. ofType() filters the Action.
            ofType(fruitAction.loadFruit),
            mergeMap(() => {
                return this.userService
                    .getAllFruit()
                    .pipe(
                        map(
                            (fruits: Fruit[]) => fruitAction.loadFruitSuccess({ fruits })),
                        catchError(error => of(fruitAction.loadFruitFail({ error: error.Message })))
                    );
            })
        )
    );

}