import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {SplitterModule} from 'primeng/splitter';
import {TabViewModule} from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ClipboardModule } from 'ngx-clipboard';
import { ConfigassistComponent } from './configassist/configassist.component';
import { DebugassistComponent } from './debugassist/debugassist.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CustomconfigComponent } from './customconfig/customconfig.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigassistComponent,
    DebugassistComponent,
    CustomconfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    TableModule,
    SplitterModule,
    TabViewModule,
    InputTextareaModule,
    ClipboardModule,
    CheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
