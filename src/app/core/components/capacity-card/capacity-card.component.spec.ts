import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityCardComponent } from './capacity-card.component';

describe('CapacityCardComponent', () => {
  let component: CapacityCardComponent;
  let fixture: ComponentFixture<CapacityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
