import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookMenuComponent } from './e-book-menu.component';

describe('EBookComponent', () => {
  let component: EBookMenuComponent;
  let fixture: ComponentFixture<EBookMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EBookMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBookMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
