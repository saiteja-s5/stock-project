import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { AutoCompleteEvent } from 'src/app/models/auto-complete.model';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-profit-loss-form',
  templateUrl: './profit-loss-form.component.html',
  styleUrls: ['./profit-loss-form.component.css']
})
export class ProfitLossFormComponent {

  profitLossForm!: FormGroup;
  stocks!: CompanyNameDropdown[];
  filteredStocks!: CompanyNameDropdown[];
  startDate = Utility.stockStartDate;
  today = Utility.today;
  formFieldWidth = Utility.formFieldWidth;
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
    this.profitLossForm = this.formBuilder.group({
      stockName: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      bought: this.formBuilder.group({
        boughtDate: ['', Validators.required],
        boughtPrice: ['', [Validators.required, Validators.min(0.01)]]
      }),
      sold: this.formBuilder.group({
        soldDate: ['', Validators.required],
        soldPrice: ['', [Validators.required, Validators.min(0.01)]]
      })
    });
  }

  onFormSubmit() {
    if (this.profitLossForm.valid) {
      this.isLoading = true;
      this.profitLossForm.patchValue({
        stockName: this.profitLossForm.value.stockName.companySymbol,
      });
      (this.profitLossForm.controls['bought'] as FormGroup).controls['boughtDate'].setValue(Utility.formatDate(this.profitLossForm.value.bought.boughtDate));
      (this.profitLossForm.controls['sold'] as FormGroup).controls['soldDate'].setValue(Utility.formatDate(this.profitLossForm.value.sold.soldDate));
      this.dataTransferService.addProfitLoss(this.profitLossForm.value).subscribe({
        next: response => {
          this.isLoading = false;
          this.openSnackBar('success', 'Profit/Loss added sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('error', 'Profit/Loss not added');
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
