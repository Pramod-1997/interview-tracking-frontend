import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecuiterComponent } from './addrecuiter.component';

describe('AddrecuiterComponent', () => {
  let component: AddrecuiterComponent;
  let fixture: ComponentFixture<AddrecuiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrecuiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecuiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
