import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_IMPORT } from '../../../app.import';
import { StaffService } from '../../../core/services/staff.service';
import { TestService } from '../../../core/services/test.service';
import { Observable } from 'rxjs';
import { loadFruit } from '../../../store/action/fruit.action';
import { selectFriuts } from '../../../store/selector/fruit.selector';
import { AppState } from '../../../store/state/app.state';
import { Staff } from '../../../core/models/staff.interface';
import * as staffAction from '../../../store/action/staff.action';
import { selectStaff } from '../../../store/selector/staff.selector';

@Component({
  selector: 'app-test-ngrx',
  standalone: true,
  imports: [APP_IMPORT],
  templateUrl: './test-ngrx.component.html',
  styleUrl: './test-ngrx.component.scss'
})
export class TestNgrxComponent implements OnInit {

  // staffList$: any;
  // fruitList$: any;
  // constructor(
  //   private staffService: StaffService,
  //   private testService: TestService,
  //   private store: Store<AppState>
  // ) {
  // }

  // ngOnInit(): void {
  //   // this.staffList$ = this.staffService.getAll();
  //   // this.fruitList$ = this.testService.getAllFruit();
  //   this.store.dispatch(loadFruit());
  //   this.store.select(selectFriuts).subscribe(res => {
  //     console.log(res);
  //   })
  // }

  staffList$: Staff[] = [];
  loading$: boolean = false;

  constructor(
    private staffService: StaffService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    // this.store.dispatch(loadFruit());
    // this.store.dispatch(staffAction.loadStaff());
    this.store.dispatch(staffAction.loadStaff());
    this.store.select(selectStaff).subscribe(res => {
      // this.staffList$ = res.staffList ?? [];
      this.loading$ = res.loading;
      console.log(res);
    })
  }
}
