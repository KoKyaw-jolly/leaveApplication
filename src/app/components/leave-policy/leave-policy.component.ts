import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leave-policy',
  standalone: true,
  imports: [],
  templateUrl: './leave-policy.component.html',
  styleUrl: './leave-policy.component.scss'
})
export class LeavePolicyComponent implements OnInit {
  @ViewChild('policyContent', { static: false })
  policyContent!: ElementRef;

  content: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data/policy-temp-data.json').subscribe((data) => {
      this.content = data.data;
      this.policyContent.nativeElement.innerHTML = this.content;
    });
  }
}
