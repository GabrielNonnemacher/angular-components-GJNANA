import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGjnanaLibComponent } from './mat-gjnana-lib.component';

describe('MatGjnanaLibComponent', () => {
  let component: MatGjnanaLibComponent;
  let fixture: ComponentFixture<MatGjnanaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatGjnanaLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatGjnanaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
