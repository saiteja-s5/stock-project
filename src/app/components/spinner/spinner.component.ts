import { Component } from '@angular/core';
import { Utility } from 'src/app/utilities/Utility';

@Component({
  selector: 'app-spinner',
  template: `
    <mat-spinner [diameter]="spinnerDiameter" [strokeWidth]="spinnerStrokeWidth"></mat-spinner>
`,
  styles: [
  ]
})
export class SpinnerComponent {
  spinnerDiameter = Utility.spinnerDiameter;
  spinnerStrokeWidth = Utility.spinnerStrokeWidth; 
}
