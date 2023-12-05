import { Injectable, Type } from '@angular/core';
import { ConfigassistComponent } from './configassist/configassist.component'; 
import { DebugassistComponent } from './debugassist/debugassist.component'; 
import {CustomconfigComponent} from './customconfig/customconfig.component';


@Injectable({ providedIn: 'root' })
export class DebugService {
  getComponents() {
    return [
      {
        component: ConfigassistComponent,
        inputs: { name: 'Dr. IQ', bio: 'Smart as they come' },
        // selector :  'app-configassist'
      },
      {
        component: DebugassistComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
        // selector1 :  'app-debugassist'
      },
      {
        component: CustomconfigComponent,
        inputs: { name: 'Bombasto', bio: 'Brave as they come' },
        // selector :  'app-customconfig'
      }
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
