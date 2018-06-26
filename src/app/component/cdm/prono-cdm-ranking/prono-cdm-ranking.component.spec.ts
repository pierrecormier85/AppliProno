import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoCdmRankingComponent } from './prono-cdm-ranking.component';

describe('PronoCdmRankingComponent', () => {
  let component: PronoCdmRankingComponent;
  let fixture: ComponentFixture<PronoCdmRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoCdmRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoCdmRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
