import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart>
        <kendo-chart-series>
          <!--blue (Y1)-->
          <kendo-chart-series-item type="bar" [data]="[1, 2, 3]" >
          </kendo-chart-series-item>
          <!--Yellow (Y2)-->
          <kendo-chart-series-item type="bar" [data]="[1, 1, 3]" >
          </kendo-chart-series-item>
          <!--Green (Y3)-->
          <kendo-chart-series-item type="bar" [data]="[1, 1, 2]" >
          </kendo-chart-series-item>
        </kendo-chart-series> 
      </kendo-chart>
    `,
})
export class AppComponent {}
