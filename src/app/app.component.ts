import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonDesignComponent } from './components/common-design/common-design.component';
import { APP_IMPORTS } from './app.import';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonDesignComponent,APP_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sipLeaveApplication';
}
