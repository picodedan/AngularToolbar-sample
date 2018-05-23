import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSelectorComponent } from './toolbar-selector.component';

describe('ToolbarSelectorComponent', () => {
  let component: ToolbarSelectorComponent;
  let fixture: ComponentFixture<ToolbarSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
