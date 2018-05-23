import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTool1Component } from './sample-tool1.component';

describe('SampleTool1Component', () => {
  let component: SampleTool1Component;
  let fixture: ComponentFixture<SampleTool1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTool1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTool1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
