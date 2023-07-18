import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';
import { AutoCompleteEvent } from 'src/app/models/auto-complete.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent {

  stockForm!: FormGroup;
  stocks!: CompanyNameDropdown[];
  filteredStocks!: CompanyNameDropdown[];
  startDate = Utility.stockStartDate;
  today = Utility.today;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService, private messageService: MessageService, public modal: DynamicDialogRef) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.dataTransferService.getCompanyNameDropDowns().subscribe({
      next: companies => {
        this.stocks = companies;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.openSnackBar('error', 'Stock dropdown not loaded')
      }
    });
    this.stockForm = this.formBuilder.group({
      stockName: ['', Validators.required],
      investmentDate: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      buyPrice: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onFormSubmit() {
    if (this.stockForm.valid) {
      this.isLoading = true;
      this.stockForm.patchValue({
        stockName: this.stockForm.value.stockName.companySymbol,
        investmentDate: Utility.formatDate(this.stockForm.value.investmentDate)
      });
      this.dataTransferService.addStock(this.stockForm.value).subscribe({
        next: response => {
          this.isLoading = false;
          this.openSnackBar('success', 'Stock added sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('error', 'Stock not added');
          this.modal.close();
        }
      });
    } else {
      this.openSnackBar('warn', 'Enter all the fields correctly');
    }
  }

  filterStock(event: AutoCompleteEvent) {
    let filtered: CompanyNameDropdown[] = [];
    let query = event.query;
    for (let i = 0; i < (this.stocks as CompanyNameDropdown[]).length; i++) {
      let stock = (this.stocks as CompanyNameDropdown[])[i];
      if (stock.companyName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(stock);
      }
    }
    this.filteredStocks = filtered;
  }

  closeModal() {
    this.modal.close();
    this.openSnackBar('warn', 'Last transaction cancelled');
  }

  openSnackBar(severity: string, message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'global', severity: severity, detail: message
    });
  }

}
