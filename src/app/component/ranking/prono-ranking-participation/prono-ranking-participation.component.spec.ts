import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoRankingParticipationComponent } from './prono-ranking-participation.component';

describe('PronoRankingParticipationComponent', () => {
  let component: PronoRankingParticipationComponent;
  let fixture: ComponentFixture<PronoRankingParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoRankingParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoRankingParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
