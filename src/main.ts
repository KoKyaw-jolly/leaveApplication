import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNzIcons } from './app/icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { APP_ROUTES } from './app/app.routes';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FruitEffects } from './app/store/effect/fruit.effect';
import { fruitReducer } from './app/store/reducer/fruit.reducer';
import { staffReducer } from './app/store/reducer/staff.reducer';
import { StaffEffect } from './app/store/effect/staff.effect';
import { AuthEffect } from './app/store/effect/auth.effect';
import { authReducer } from './app/store/reducer/auth.reducer';
import { metaReducers } from './app/store/reducer/app.reducer';
import { holidayReducer } from './app/store/reducer/holiday.reducer';
import { HolidayEffect } from './app/store/effect/holiday.effect';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideNzIcons(),
    provideNzI18n(en_US),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom(
      FormsModule,
      StoreModule.forRoot(
        { 
          authInfo: authReducer,
          staff: staffReducer,
          holidays: holidayReducer
        },
        {
          metaReducers,
          runtimeChecks: {
            strictActionImmutability: false,
            strictStateImmutability: true
          }
        }
      ),
      EffectsModule.forRoot([
        StaffEffect,
        AuthEffect,
        HolidayEffect
      ]),
      StoreDevtoolsModule.instrument()
    )
  ]
}).catch(err => console.error(err));
