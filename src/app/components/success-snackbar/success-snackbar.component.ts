import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success-snackbar',
  template: `
      <div class="item">Record added Sucessfully</div>
  `,
  styles: [
    '.item{ height:20px }',
  ]
})
export class SuccessSnackbarComponent {
}
