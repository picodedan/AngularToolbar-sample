import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTool3Component } from './sample-tool3.component';

describe('SampleTool3Component', () => {
  let component: SampleTool3Component;
  let fixture: ComponentFixture<SampleTool3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTool3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTool3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
