import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { IMAGES } from '../../core/constants/images-url';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  images = IMAGES;
}
