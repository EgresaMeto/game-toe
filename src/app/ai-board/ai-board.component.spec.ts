import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBoardComponent } from './ai-board.component';

describe('AiBoardComponent', () => {
  let component: AiBoardComponent;
  let fixture: ComponentFixture<AiBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
