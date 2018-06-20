import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoCdmKnockoutComponent } from './prono-cdm-knockout.component';

describe('PronoCdmKnockoutComponent', () => {
  let component: PronoCdmKnockoutComponent;
  let fixture: ComponentFixture<PronoCdmKnockoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoCdmKnockoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoCdmKnockoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
