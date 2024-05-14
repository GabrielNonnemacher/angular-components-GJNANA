import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGjnanaComponent } from './header-gjnana.component';

describe('HeaderGjnanaComponent', () => {
  let component: HeaderGjnanaComponent;
  let fixture: ComponentFixture<HeaderGjnanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGjnanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderGjnanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
