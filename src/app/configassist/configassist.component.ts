import { Component, Input } from '@angular/core';
import { Config } from './config';

interface Country {
  name?: string,
  code?: string
}

interface CompResult {
  name?: string,
  result?: Array<boolean>;
}

@Component({
  selector: 'app-configassist',
  templateUrl: './configassist.component.html',
  styleUrls: ['./configassist.component.scss']
})

export class ConfigassistComponent {
  value!: string;
  value1!: string;
  
  @Input()
  selectedCountry: Country | undefined;

  services: any[];
  selectedValues1: string | undefined;
  selectedValues2: string | undefined;
  selectedValues3: string | undefined;

  stringJson: any;
  stringJson2: any;
  stringObject: any;
  stringObject2: any;

  featureConfig: any;
  featureConfig2: any;
  uceConfig: any;
  upointConfig: any;
  compResult = new Array();
  headers = new Array();


  json1:any;
  json2:any;


  configurations = [{
    "feature_keys": {
      "Feature_IS_NAVIAGATION_ENABLED": true,
      "Feature_IS_Worklife_NAVIAGATION_ENABLED": false,
      "This_Key_is_Preset_only_config": true
    },
    "expr_uce": {
      "Expr_uce_IS_NAVIAGATION_ENABLED": true,
      "Expr_uce_IS_Worklife_NAVIAGATION_ENABLED": false
    },
    "expr_upoint": {
      "expr_upoint_IS_NAVIAGATION_ENABLED": true,
      "expr_upoint_IS_Worklife_NAVIAGATION_ENABLED": false
    },
  }
  ];

  configurations2 = [{
    "feature_keys": {
      "Feature_IS_NAVIAGATION_ENABLED": false,
      "Feature_IS_Worklife_NAVIAGATION_ENABLED": true,
      "This_Key_is_Preset_only_config1": false
    },
    "expr_uce": {
      "Expr_uce_IS_NAVIAGATION_ENABLED": true,
      "Expr_uce_IS_Worklife_NAVIAGATION_ENABLED": false
    },
    "expr_upoint": {
      "expr_upoint_IS_NAVIAGATION_ENABLED": true,
      "expr_upoint_IS_Worklife_NAVIAGATION_ENABLED": false
    },
  }
  ];

  constructor() {
    this.services = [
      { name: 'Thrive header service', resourceName: '/channel/widgetConfigurations/thriveheader' },
      { name: 'Thrive Foooter service', resourceName: '/channel/widgetConfigurations/thrivefooter' },
      { name: 'Promotion service', resourceName: '/channel/widgetConfigurations/promotion' }
    ];
  }

  ngOnInit() {
    //Headers
    this.headers.push("Key");
    this.headers.push("QA:QC");

    var JSONInPrettyFormat = JSON.stringify(this.configurations, undefined, 4);
    this.value = JSONInPrettyFormat;
    //this.process(this.configurations,this.configurations2);
  }

  processDynamicInput() {
    this.process(JSON.parse(this.value), JSON.parse(this.value1));
  }

  process(configurations: any, configurations2: any) {
    this.compResult=[];
        // Convert String object to JSON
        let stringJson = JSON.stringify(configurations);
        let stringJson2 = JSON.stringify(configurations2);
    
        // ConvertjSON to an object
        let stringObject = JSON.parse(stringJson);
        let stringObject2 = JSON.parse(stringJson2);

        let featureConfig = Object.entries(stringObject[0].feature_keys);
        let featureConfig2 = Object.entries(stringObject2[0].feature_keys);
    
        this.uceConfig = Object.entries(stringObject[0].expr_uce);
        this.upointConfig = Object.entries(stringObject[0].expr_upoint);
        this.computerComparsionResult(featureConfig, featureConfig2);
  }

  computerComparsionResult(featureConfig: [string, unknown][], featureConfig2: [string, unknown][]) {

    let map = new Map(featureConfig);
    let keys = [...map.keys()];

    let map2 = new Map(featureConfig2);
    let keys2 = [...map2.keys()];

    this.collectKeys(keys, keys2);

    // console.log(" Keys ", keys);
    for (let key of keys) {
      const finalOut = { "key": key, "value": map.get(key) + ":" + map2.get(key) };
      this.compResult.push(finalOut);
    }
     // console.log('final -------------->', this.compResult);
  }

  collectKeys(keys: any[], keys2: any) {
    for (let key of keys2) {
      if (keys.includes(key)) {
        console.log(key, "Already present");
      } else {
        keys.push(key);
      }
    }
  }

  processSelectedResource() {
    console.log(" print methods is called on click", this.selectedCountry);
  }

  computerComparsionResult_v0() {

    let map = new Map(this.featureConfig);
    let keys = [...map.keys()];

    let map2 = new Map(this.featureConfig2);
    let keys2 = [...map2.keys()];

    for (let key of keys2) {
      if (keys.includes(key)) {
        console.log(key, "Already present");
      } else {
        keys.push(key);
      }
    }
    // console.log(" Keys ", keys);
    for (let key of keys) {
      const finalOut = { "key": key, "value": map.get(key) + ":" + map2.get(key) };
      this.compResult.push(finalOut);
    }

    console.log('final -------------->', this.compResult);
  }
  

}
