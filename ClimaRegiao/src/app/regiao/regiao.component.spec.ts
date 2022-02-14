import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiaoComponent } from './regiao.component';

describe('RegiaoComponent', () => {
  let component: RegiaoComponent;
  let fixture: ComponentFixture<RegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
