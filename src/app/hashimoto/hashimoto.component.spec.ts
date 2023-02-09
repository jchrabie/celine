import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashimotoComponent } from './hashimoto.component';

describe('HashimotoComponent', () => {
  let component: HashimotoComponent;
  let fixture: ComponentFixture<HashimotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashimotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashimotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
