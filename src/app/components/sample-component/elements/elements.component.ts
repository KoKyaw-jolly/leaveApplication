import { Component } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';

@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {

}
