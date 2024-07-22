import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NzButtonComponent } from "ng-zorro-antd/button";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTypographyModule } from "ng-zorro-antd/typography";

 export const APP_IMPORT = [
    CommonModule,
    FormsModule,
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
    NzDatePickerModule
]