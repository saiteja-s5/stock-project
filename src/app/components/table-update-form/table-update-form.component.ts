import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MiscellaneousRecord } from 'src/app/models/miscellaneous-record.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Utility } from 'src/app/utilities/utility';

@Component({
  selector: 'app-table-update-form',
  templateUrl: './table-update-form.component.html',
  styleUrls: ['./table-update-form.component.css']
})
export class TableUpdateFormComponent {

  tableForm!: FormGroup;
  miscRecords!: MiscellaneousRecord;
  lastUpdatedDate!: Date;
  isCashUpdate = false;
  isStockUpdate = false;
  isMutualFundUpdate = false;
  isFundUpdate = false;
  isDividendUpdate = false;
  isProfitLossUpdate = false;
  isGoldUpdate = false;
  today = Utility.today;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private dataTransferService: DataTransferService, private messageService: MessageService, public modal: DynamicDialogRef,
    public config: DynamicDialogConfig) {
    this.isCashUpdate = this.config.data.isCashUpdate;
    this.isStockUpdate = this.config.data.isStockUpdate;
    this.isMutualFundUpdate = this.config.data.isMutualFundUpdate;
    this.isFundUpdate = this.config.data.isFundUpdate;
    this.isDividendUpdate = this.config.data.isDividendUpdate;
    this.isProfitLossUpdate = this.config.data.isProfitLossUpdate;
    this.isGoldUpdate = this.config.data.isGoldUpdate;
  }

  ngOnInit() {
    this.isLoading = true;
    this.dataTransferService.getMiscellaneousRecords().subscribe({
      next: record => {
        this.miscRecords = record;
        this.isLoading = false;
        if (this.isStockUpdate) {
          this.lastUpdatedDate = this.miscRecords.stockTableUpdatedOn;
        } else if (this.isMutualFundUpdate) {
          this.lastUpdatedDate = this.miscRecords.mutualFundTableUpdatedOn;
        } else if (this.isFundUpdate) {
          this.lastUpdatedDate = this.miscRecords.fundTableUpdatedOn;
        } else if (this.isDividendUpdate) {
          this.lastUpdatedDate = this.miscRecords.dividendTableUpdatedOn;
        } else if (this.isProfitLossUpdate) {
          this.lastUpdatedDate = this.miscRecords.profitLossTableUpdatedOn;
        } else if (this.isGoldUpdate) {
          this.lastUpdatedDate = this.miscRecords.goldTableUpdatedOn;
        }
      },
      error: () => {
        this.isLoading = false;
        this.openSnackBar('error', 'Last update date not fetched')
      }
    });
    this.tableForm = this.formBuilder.group({
      cashAvailableForInvesting: [''],
      stockTableUpdatedOn: [this.lastUpdatedDate],
      mutualFundTableUpdatedOn: [this.lastUpdatedDate],
      fundTableUpdatedOn: [this.lastUpdatedDate],
      dividendTableUpdatedOn: [this.lastUpdatedDate],
      profitLossTableUpdatedOn: [this.lastUpdatedDate],
      goldTableUpdatedOn: [this.lastUpdatedDate],
    });
  }

  onFormSubmit() {
    if (this.isCashUpdate && this.tableForm.value.availableForInvestment <= 0) {
      this.openSnackBar('warn', 'Cash Available entered is invalid');
    } else {
      this.isLoading = true;
      this.tableForm.setValue(this.miscRecords);
      if (this.isCashUpdate) {
        this.tableForm.patchValue({
          cashAvailableForInvesting: this.tableForm.value.cashAvailableForInvesting
        });
      }
      else if (this.isStockUpdate) {
        this.tableForm.patchValue({
          stockTableUpdatedOn: Utility.formatDate(this.tableForm.value.stockTableUpdatedOn)
        });
      } else if (this.isMutualFundUpdate) {
        this.tableForm.patchValue({
          mutualFundTableUpdatedOn: Utility.formatDate(this.tableForm.value.mutualFundTableUpdatedOn)
        });
      } else if (this.isFundUpdate) {
        this.tableForm.patchValue({
          fundTableUpdatedOn: Utility.formatDate(this.tableForm.value.fundTableUpdatedOn)
        });
      } else if (this.isDividendUpdate) {
        this.tableForm.patchValue({
          dividendTableUpdatedOn: Utility.formatDate(this.tableForm.value.dividendTableUpdatedOn)
        });
      } else if (this.isProfitLossUpdate) {
        this.tableForm.patchValue({
          profitLossTableUpdatedOn: Utility.formatDate(this.tableForm.value.profitLossTableUpdatedOn)
        });
      } else if (this.isGoldUpdate) {
        this.tableForm.patchValue({
          goldTableUpdatedOn: Utility.formatDate(this.tableForm.value.goldTableUpdatedOn)
        });
      }
      this.dataTransferService.updateMiscellaneousRecord(this.tableForm.value).subscribe({
        next: response => {
          this.isLoading = false;
          this.openSnackBar('success', 'Table updated sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('error', 'Table not updated');
          this.modal.close();
        }
      });
    }
  }

  closeModal() {
    this.modal.close();
    this.openSnackBar('warn', 'Table update cancelled');
  }

  openSnackBar(severity: string, message: string) {
    this.messageService.clear();
    this.messageService.add({
      key: 'global', severity: severity, detail: message
    });
  }

}
