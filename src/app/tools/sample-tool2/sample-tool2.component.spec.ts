import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTool2Component } from './sample-tool2.component';

describe('SampleTool2Component', () => {
  let component: SampleTool2Component;
  let fixture: ComponentFixture<SampleTool2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTool2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTool2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
