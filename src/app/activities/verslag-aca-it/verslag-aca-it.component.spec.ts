import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerslagAcaItComponent } from './verslag-aca-it.component';

describe('VerslagAcaItComponent', () => {
  let component: VerslagAcaItComponent;
  let fixture: ComponentFixture<VerslagAcaItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerslagAcaItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerslagAcaItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
