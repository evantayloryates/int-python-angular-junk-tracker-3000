import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSedanComponent } from './update-sedan.component';

describe('UpdateSedanComponent', () => {
  let component: UpdateSedanComponent;
  let fixture: ComponentFixture<UpdateSedanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSedanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
