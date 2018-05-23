import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarContainerComponent } from './toolbar-container/toolbar-container.component';
import { ToolbarSelectorComponent } from './toolbar-container/toolbar-selector/toolbar-selector.component';
import { SampleTool1Component } from './tools/sample-tool1/sample-tool1.component';
import { SampleTool2Component } from './tools/sample-tool2/sample-tool2.component';
import { SampleTool3Component } from './tools/sample-tool3/sample-tool3.component';
import { SampleTool4Component } from './tools/sample-tool4/sample-tool4.component';

import { MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatCardModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatIconModule
  } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContainerComponent,
    ToolbarSelectorComponent,
    SampleTool1Component,
    SampleTool2Component,
    SampleTool3Component,
    SampleTool4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
