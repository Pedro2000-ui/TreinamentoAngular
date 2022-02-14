import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforegiaoComponent } from './inforegiao.component';

describe('InforegiaoComponent', () => {
  let component: InforegiaoComponent;
  let fixture: ComponentFixture<InforegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforegiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
