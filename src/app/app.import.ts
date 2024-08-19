import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FullCalendarModule } from '@fullcalendar/angular';
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TruncatePipe } from "./core/pipes/truncate.pipe";
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

export const APP_IMPORT = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    TruncatePipe,
    NzIconModule, 
    NzLayoutModule, 
    NzMenuModule,
    NzButtonComponent,
    NzInputModule,
    NzInputNumberModule,
    NzFormModule,
    NzTypographyModule,
    NzIconModule,
    NzSelectModule,
    NzDatePickerModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzModalModule,
    NzPopoverModule,
    NzStepsModule,
    NzRadioModule,
    NzTagModule,
    NzCheckboxModule,
    NzPopoverModule
]