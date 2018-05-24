import { Tool } from './../shared';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.css']
})
export class ToolbarContainerComponent {
  tools: Tool[] = [
    {id: 1, name: 'sample-tool1', selected: false },
    {id: 2, name: 'sample-tool2', selected: false },
    {id: 3, name: 'sample-tool3', selected: false },
    {id: 4, name: 'sample-tool4', selected: false }
  ];

  constructor() { }

  toggleVisibility(event) {
    // console.log('Toggle event recieved: ', event);
    const toolIndex = this.tools.findIndex((tool: Tool) => {
      return tool.id === event.source.value;
    });
    this.tools[toolIndex] = Object.assign({}, this.tools[toolIndex], { selected: event.checked });
  }

}
