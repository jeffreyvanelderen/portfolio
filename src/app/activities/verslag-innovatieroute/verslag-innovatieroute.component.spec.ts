import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerslagInnovatierouteComponent } from './verslag-innovatieroute.component';

describe('VerslagInnovatierouteComponent', () => {
  let component: VerslagInnovatierouteComponent;
  let fixture: ComponentFixture<VerslagInnovatierouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerslagInnovatierouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerslagInnovatierouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
