import { Tool } from './../shared';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.css']
})
export class ToolbarContainerComponent implements OnInit {
  tools: Tool[] = [
    {id: 1, name: 'app-sample-tool1', selected: true },
    {id: 2, name: 'sample-tool2', selected: true },
    {id: 3, name: 'sample-tool3', selected: true },
    {id: 4, name: 'sample-tool4', selected: true }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(event) {
    // console.log('Toggle event recieved: ', event);
    const toolIndex = this.tools.findIndex((tool: Tool) => {
      return tool.id === event.value;
    });
    const toggle = this.tools[toolIndex];
    this.tools[toolIndex] = {
      id: toggle.id,
      name: toggle.name,
      selected: !toggle.selected
    };
  }

}
