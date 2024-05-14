import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGjnanaComponent } from './button-gjnana.component';

describe('ButtonGjnanaComponent', () => {
  let component: ButtonGjnanaComponent;
  let fixture: ComponentFixture<ButtonGjnanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGjnanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonGjnanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
