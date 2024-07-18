import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

export const APP_IMPORTS = [
    CommonModule,
    RouterModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzIconModule
]