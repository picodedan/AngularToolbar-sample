import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTool4Component } from './sample-tool4.component';

describe('SampleTool4Component', () => {
  let component: SampleTool4Component;
  let fixture: ComponentFixture<SampleTool4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTool4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTool4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
