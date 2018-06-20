import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoCdmGroupListComponent } from './prono-cdm-group-list.component';

describe('PronoCdmGroupListComponent', () => {
  let component: PronoCdmGroupListComponent;
  let fixture: ComponentFixture<PronoCdmGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoCdmGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoCdmGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
