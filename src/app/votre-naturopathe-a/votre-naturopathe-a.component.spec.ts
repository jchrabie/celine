import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotreNaturopatheAComponent } from './votre-naturopathe-a.component';

describe('VotreNaturopatheAComponent', () => {
  let component: VotreNaturopatheAComponent;
  let fixture: ComponentFixture<VotreNaturopatheAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotreNaturopatheAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotreNaturopatheAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
