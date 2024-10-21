import { Injectable, inject } from "@angular/core";
import { AppNotification } from "../../core/models/notification.interface";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GeneralSettingService } from "../../core/services/general-setting.service";
import { NzMessageService } from "ng-zorro-antd/message";
import { catchError, map, mergeMap, of } from "rxjs";
import * as generalSettingAction from "../action/general-setting.action";


@Injectable()
export class GeneralSettingEffect {

    private actions = inject(Actions);

    constructor(
        private generalSettingService: GeneralSettingService,
        private message: NzMessageService
    ) { }

    getNotificationAll$ = createEffect(() =>
        this.actions.pipe(
            ofType(generalSettingAction.loadNotificationAll),
            mergeMap(() => {
                return this.generalSettingService.getNotidicationAll().pipe(
                    map((notificationAll: AppNotification[]) => {
                        console.log(notificationAll);
                        return generalSettingAction.loadNotificationAllSuccess({ notificationAll });
                    }
                    ),
                    catchError(error => of(generalSettingAction.loadNotificationAllFail({ error: error.message })))
                );
            })
        )
    );
    getNotificationUser$ = createEffect(() =>
        this.actions.pipe(
            ofType(generalSettingAction.loadNotificationUser),
            mergeMap((action) => {
                return this.generalSettingService.getNotidicationUser(action.staffID).pipe(
                    map((notificationUser: AppNotification[]) => {
                        return generalSettingAction.loadNotificationUserSuccess({ notificationUser });
                    }
                    ),
                    catchError(error => of(generalSettingAction.loadNotificationUserFail({ error: error.message })))
                );
            })
        )
    );

    createEditNotification$ = createEffect(() =>
        this.actions.pipe(
            ofType(generalSettingAction.createEditNotification),
            mergeMap((action) => {
                return this.generalSettingService.createNotification(action.notification).pipe(
                    map((action: any) => {
                        const resMsg = action.msg ? action.msg : 'Sent notification successfully!';
                        this.message.create('success', resMsg);
                        return generalSettingAction.createEditNotificationSuccess({ msg: resMsg });
                    }),
                    catchError(error => {
                        const resErr = error.msg ? error.msg : 'Sent notification fail! Please try again.';
                        this.message.create('error', resErr);
                        return of(generalSettingAction.createEditNotificationFail({ error: resErr }))
                    })
                );
            })
        )
    );

    getLeavePolicy$ = createEffect(() =>
        this.actions.pipe(
            ofType(generalSettingAction.loadLeavePolicy),
            mergeMap(() => {
                return this.generalSettingService.getLeavePolicy().pipe(
                    map((action: any) => {
                        console.log(action.leavePolicy);
                        return generalSettingAction.loadLeavePolicySuccess({ leavePolicy: action.leavePolicy });
                    }
                    ),
                    catchError(error => of(generalSettingAction.loadLeavePolicyFail({ error: error.message })))
                );
            })
        )
    );

    createEditLeavePolicy$ = createEffect(() =>
        this.actions.pipe(
            ofType(generalSettingAction.createEditLeavePolicy),
            mergeMap((action) => {
                return this.generalSettingService.createEditLeavePloicy(action.leavePolicy).pipe(
                    map((action: any) => {
                        const resMsg = action.msg ? action.msg : 'Edit leave policy successfully!';
                        this.message.create('success', resMsg);
                        return generalSettingAction.createEditLeavePolicySuccess({ msg: resMsg });
                    }
                    ),
                    catchError(error => {
                        const resErr = error.msg ? error.msg : 'Edit leave ploicy fail! Please try again.';
                        this.message.create('error', resErr);
                        return of(generalSettingAction.createEditLeavePolicyFail({ error: resErr }))
                    })
                );
            })
        )
    );

}