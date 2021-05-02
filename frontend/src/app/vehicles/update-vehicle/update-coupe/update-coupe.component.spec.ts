import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoupeComponent } from './update-coupe.component';

describe('UpdateCoupeComponent', () => {
  let component: UpdateCoupeComponent;
  let fixture: ComponentFixture<UpdateCoupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
