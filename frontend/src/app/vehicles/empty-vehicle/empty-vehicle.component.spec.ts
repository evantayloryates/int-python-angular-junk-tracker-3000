import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyVehicleComponent } from './empty-vehicle.component';

describe('EmptyVehicleComponent', () => {
  let component: EmptyVehicleComponent;
  let fixture: ComponentFixture<EmptyVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
