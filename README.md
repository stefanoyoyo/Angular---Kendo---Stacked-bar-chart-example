# angular-ln8oz8

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ln8oz8)

# COME FUNZIONA LO STACKED BAR CHART 
Occorre creare un elemento <kendo-chart-series> per ogni serie che si vuole 
visualizzare sul grafico, dove una serie è Yn. 
**ESEMPIO:** serie 1 = Y1, serie 2 = Y2, ecc..
Se voglio visualizzare Y1 ed Y2 sul grafico (cioè due serie)
devo creare due elementi di tipo <kendo-chart-series>.

# DATI ASSOCIATI AD OGNI <kendo-chart-series>
Il valore ennesimo dell'array associato a [data]
viene posizionato nella serie ennesima. 
**ESEMPIO:** [1,2,3]
Qui 1 va nella prima serie (Y1), 2 va nella seconda (Y2) ecc..

# COME FUNZIONANO GLI STACK 
Gli stack sono delle sotto-serie all'interno della serie. 
Stack indicica che i valori in [data] devono essere disposti
nel primo o nel secondo gruppo. 

