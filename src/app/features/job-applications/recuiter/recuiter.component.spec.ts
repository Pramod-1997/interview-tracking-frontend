import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuiterComponent } from './recuiter.component';

describe('RecuiterComponent', () => {
  let component: RecuiterComponent;
  let fixture: ComponentFixture<RecuiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
