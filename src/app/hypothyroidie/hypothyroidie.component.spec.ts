import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypothyroidieComponent } from './hypothyroidie.component';

describe('HypothyroidieComponent', () => {
  let component: HypothyroidieComponent;
  let fixture: ComponentFixture<HypothyroidieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypothyroidieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HypothyroidieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
