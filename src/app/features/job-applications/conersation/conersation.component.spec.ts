import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConersationComponent } from './conersation.component';

describe('ConersationComponent', () => {
  let component: ConersationComponent;
  let fixture: ComponentFixture<ConersationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConersationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConersationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
