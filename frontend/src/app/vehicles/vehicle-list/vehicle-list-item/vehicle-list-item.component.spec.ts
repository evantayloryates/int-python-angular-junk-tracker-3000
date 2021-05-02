import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListItemComponent } from './vehicle-list-item.component';

describe('VehicleListItemComponent', () => {
  let component: VehicleListItemComponent;
  let fixture: ComponentFixture<VehicleListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
