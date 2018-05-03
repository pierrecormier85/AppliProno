import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoCdmCompletComponent } from './prono-cdm-complet.component';

describe('PronoCdmCompletComponent', () => {
  let component: PronoCdmCompletComponent;
  let fixture: ComponentFixture<PronoCdmCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoCdmCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoCdmCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
