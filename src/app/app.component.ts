import { Component, inject } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DebugService } from './debug.service';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // private componentsList = inject(DebugService).getComponents();

  title = 'next';

  //base_items! : [];
  base_items:Array<{header: string, content: string, enabled:boolean, selector:string;}> =[];
  items:Array<{header: string, content: string, enabled:boolean, selector:string;}> =[];
  index : number = 0;;
  

  ngOnInit() {    
    // enabled: false - hides only the inside content.
    this.base_items = [
      { header: 'Debug Assist', content: 'Code Here', enabled: false, selector: 'app-debugassist'},
      { header: 'Config Assist', content: 'Learn About Web Technologies', enabled:true, selector: 'app-configassist'},
      { header: 'Articles', content: 'Read some Tech Articles', enabled : true, selector: 'app-configassist'},
    ];  
     this.getItems();
  }

  getItems() {
    for (let item of this.base_items) {
      if(item.enabled == true) {
        this.items.push(item);
      }
    }    
  }

  // get getComponent() {
  //    const obj: any = this.componentsList[this.index];
  //   this.index++;
  //   return obj;

  // }


}
