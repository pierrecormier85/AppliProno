import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoCdmGroupComponent } from './prono-cdm-group.component';

describe('PronoCdmGroupComponent', () => {
  let component: PronoCdmGroupComponent;
  let fixture: ComponentFixture<PronoCdmGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoCdmGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoCdmGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
