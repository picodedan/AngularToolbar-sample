import { Tool } from './../../shared';
import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-toolbar-selector',
  templateUrl: './toolbar-selector.component.html',
  styleUrls: ['./toolbar-selector.component.css']
})
export class ToolbarSelectorComponent {
  @Input() tools: Tool[];
  @Output() toggle = new EventEmitter();
}
