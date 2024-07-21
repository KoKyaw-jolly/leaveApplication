import { Component, OnInit } from '@angular/core';
import { ElementsComponent } from "../../components/sample-component/elements/elements.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [ElementsComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
