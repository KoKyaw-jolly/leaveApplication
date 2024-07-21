import { Component } from '@angular/core';
import { APP_IMPORT } from '../../../app.import';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule,APP_IMPORT],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  isCollapsed = false;
}
