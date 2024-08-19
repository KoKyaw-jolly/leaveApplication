import { Component } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    APP_IMPORT
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  constructor(private router: Router) {}

  goBackHome(){
    this.router.navigate(['/']);
  }
}
