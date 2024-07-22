import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent {

  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  
}
