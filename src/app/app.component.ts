import { Component } from '@angular/core';
import { DataTransferService } from './services/data-transfer.service';
import { HttpResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: DataTransferService, private messageService: MessageService) { }

  downloadExcel() {
    this.dataService.getAllRecords().subscribe({
      next: (response: HttpResponse<Blob>) => {
        const fileBlob = response.body;
        const fileName = response.headers.get('Content-Disposition')?.split("=")[1];
        this.saveBlobAsFile(fileBlob, fileName);
      }, error: () => {
        this.openSnackBar('error', 'Report not downloaded')
      }
    });
  }

  saveBlobAsFile(blob: Blob | null, fileName: string | undefined) {
    if (blob && fileName) {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.openSnackBar('success', 'Report downloaded sucessfully');
    } else {
      this.openSnackBar('error', 'Report not downloaded')
    }
  }

  openSnackBar(severity: string, message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'global', severity: severity, detail: message
    });
  }

}
