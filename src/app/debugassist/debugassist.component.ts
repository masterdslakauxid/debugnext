import { Component } from '@angular/core';

@Component({
  selector: 'app-debugassist',
  templateUrl: './debugassist.component.html',
  styleUrls: ['./debugassist.component.scss']
})
export class DebugassistComponent {
  public sessionStorage = sessionStorage;
  alightPersonSessionToken:string | undefined;
  alightRequestHeader:string | undefined;
  myAPS: string | undefined;
  myARH: string | undefined;
  globalSessionId: string | undefined;
  resourceName: string | undefined;
  //{"channelRequestData" :"URL::home?linkId=123::gblsId::121212121::uxPageRequestId::1212" }

  
  constructor() {
    sessionStorage.setItem("alightPersonSessionToken", "qw34jsdffkwrk234k242342342");
    sessionStorage.setItem("alightRequestHeader", "{'clientid':123}");    

     this.myAPS = sessionStorage.getItem("alightPersonSessionToken")!;
     this.myARH =  sessionStorage.getItem("alightRequestHeader")!;
     
     this.globalSessionId = "werwr23m423423423423423424";
     this.resourceName = "/channel/widgetConfigurations/header";

  }
}
