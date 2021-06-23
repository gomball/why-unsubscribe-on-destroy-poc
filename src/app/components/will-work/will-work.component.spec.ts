import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillWorkComponent } from './will-work.component';

describe('WillWorkComponent', () => {
  let component: WillWorkComponent;
  let fixture: ComponentFixture<WillWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
