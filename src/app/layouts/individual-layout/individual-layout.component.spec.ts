import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLayoutComponent } from './individual-layout.component';

describe('IndividualLayoutComponent', () => {
  let component: IndividualLayoutComponent;
  let fixture: ComponentFixture<IndividualLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
