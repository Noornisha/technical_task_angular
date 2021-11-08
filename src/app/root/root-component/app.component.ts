import { Component } from '@angular/core';
import { GlobalService, RequestServices } from 'src/app/shared/services';

import *  as  data from '../../../assets/settings.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private global: GlobalService,
    private requestService: RequestServices
  ) {

  }
  title = 'userAssessment';
  fruits = [{ name: 'mango' }, { name: 'Orange' }]
  ngOnInit() {
    this.getScaleTypes();
  }
  getScaleTypes() {
    this.global.settings = (data as any).default;
    console.log(this.global.settings)
  }
}
