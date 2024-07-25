import { Component } from '@angular/core';
import { APP_IMPORT } from '../../app.import';
import { UserLeaveSummaryComponent } from '../../share/components/user-leave-summary/user-leave-summary.component';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [
    APP_IMPORT,
    UserLeaveSummaryComponent
  ],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent {

  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

}
