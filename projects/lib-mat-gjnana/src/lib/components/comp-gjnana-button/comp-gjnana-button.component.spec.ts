import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGjnanaButtonComponent } from './comp-gjnana-button.component';

describe('CompGjnanaButtonComponent', () => {
  let component: CompGjnanaButtonComponent;
  let fixture: ComponentFixture<CompGjnanaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompGjnanaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompGjnanaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
