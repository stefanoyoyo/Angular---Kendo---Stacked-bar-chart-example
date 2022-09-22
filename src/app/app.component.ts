import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <kendo-chart>
        <kendo-chart-series>
          <!--blue (prima serie, cioè valori di Y1)                            -->
          <kendo-chart-series-item type="bar" [data]="[1, 2, 4, 5, 6]" [stack]="{ group: 'a' }">
          </kendo-chart-series-item>
          <!--Yellow (seconda serie, cioè valori di Y2)                                        -->
          <kendo-chart-series-item type="bar" [data]="[1, 1, 3]" [stack]="{ group: 'a' }">
          </kendo-chart-series-item>
          <!--Green (terza serie, cioè valori di Y3)                                         -->
          <kendo-chart-series-item type="bar" [data]="[1, 1, 2]" [stack]="{ group: 'b' }">
          </kendo-chart-series-item>
        </kendo-chart-series> 
      </kendo-chart>
    `,
})
export class AppComponent {}

/**
 * 
 * Per ogni x(nth) c'è il valore della serie Y(nth)
 * QUINDI SEMPLICEMENTE: 
 *  • uno stacked bar chart è un bar chart con più serie 
 *    NORMALISSIMO, nulla di strano, solo che le serie 
 *    possono essere visualizzare a stack e non per 
 *    forza una di fianco all'altra. 
 *    -> non esiste uno stacked bar chart senza serie!
 * 
 *  X | Y1  Y2  Y3
 * -----------------
 *  0 | 1   1   1
 *  1 | 2   1   1
 *  2 | 4   3   2
 *  3 | 5  //   //
 *  4 | 6  //   //
 *   
 * 
 */