import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMatGjnanaComponent } from './lib-mat-gjnana.component';

describe('LibMatGjnanaComponent', () => {
  let component: LibMatGjnanaComponent;
  let fixture: ComponentFixture<LibMatGjnanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibMatGjnanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibMatGjnanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
