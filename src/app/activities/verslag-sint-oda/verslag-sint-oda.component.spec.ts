import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerslagSintOdaComponent } from './verslag-sint-oda.component';

describe('VerslagSintOdaComponent', () => {
  let component: VerslagSintOdaComponent;
  let fixture: ComponentFixture<VerslagSintOdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerslagSintOdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerslagSintOdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
