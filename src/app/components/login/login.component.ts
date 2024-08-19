import { Component, OnInit } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { IMAGES } from '../../core/constants/images-url';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.staffForm = this.fb.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm(): void {
    if (this.staffForm.valid) {
      console.log('submit', this.staffForm.value);
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
