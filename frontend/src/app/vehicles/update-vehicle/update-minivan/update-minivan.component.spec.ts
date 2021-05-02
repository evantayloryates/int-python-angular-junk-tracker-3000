import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMinivanComponent } from './update-minivan.component';

describe('UpdateMinivanComponent', () => {
  let component: UpdateMinivanComponent;
  let fixture: ComponentFixture<UpdateMinivanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMinivanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMinivanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
