import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityItemComponent } from './capacity-item.component';

describe('CapacityItemComponent', () => {
  let component: CapacityItemComponent;
  let fixture: ComponentFixture<CapacityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
