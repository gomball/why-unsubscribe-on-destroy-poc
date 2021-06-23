import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WontWorkComponent } from './wont-work.component';

describe('WontWorkComponent', () => {
  let component: WontWorkComponent;
  let fixture: ComponentFixture<WontWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WontWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WontWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
