import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private messageService: MessageService) { }

  openSnackBar(severity: string, message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'global', severity: severity, detail: message
    });
  }

}
