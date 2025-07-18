import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobapComponent } from './viewjobap.component';

describe('ViewjobapComponent', () => {
  let component: ViewjobapComponent;
  let fixture: ComponentFixture<ViewjobapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewjobapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewjobapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
