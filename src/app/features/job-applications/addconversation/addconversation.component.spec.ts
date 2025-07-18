import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconversationComponent } from './addconversation.component';

describe('AddconversationComponent', () => {
  let component: AddconversationComponent;
  let fixture: ComponentFixture<AddconversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddconversationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddconversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
