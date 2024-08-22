import { Component, OnInit, inject } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { IMAGES } from '../../core/constants/images-url';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppDataInitService } from '../../core/services/app-data-init.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { logOut } from '../../store/action/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  images = IMAGES;

  staffForm!: FormGroup;
  private appService = inject(AppDataInitService);
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm(): void {
    if (this.staffForm.valid) {
      console.log('submit', this.staffForm.value);
      this.appService.appDataInit(this.staffForm.value);
    } else {
      Object.values(this.staffForm.controls).forEach(control => {
        console.log('control', control);
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}


// private actions = inject(AppDataInitService);
// constructor(private appService: AppDataInitService) { }
// ngOnInit(): void {
//   // this.actions.appDataInit();
// }