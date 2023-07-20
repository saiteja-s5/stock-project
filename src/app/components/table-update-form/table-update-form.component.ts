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
  cashAvailablePreviously = 0;
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
        if (this.isCashUpdate) {
          this.cashAvailablePreviously = this.miscRecords.cashAvailableForInvesting;
        } else if (this.isStockUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.stockTableUpdatedOn);
        } else if (this.isMutualFundUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.mutualFundTableUpdatedOn);
        } else if (this.isFundUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.fundTableUpdatedOn);
        } else if (this.isDividendUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.dividendTableUpdatedOn);
        } else if (this.isProfitLossUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.profitLossTableUpdatedOn);
        } else if (this.isGoldUpdate) {
          this.lastUpdatedDate = new Date(this.miscRecords.goldTableUpdatedOn);
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.openSnackBar('error', 'Last update date not fetched')
      }
    });
    this.tableForm = this.formBuilder.group({
      miscId: [Utility.miscTableKey],
      cashAvailableForInvesting: [this.cashAvailablePreviously],
      stockTableUpdatedOn: [],
      mutualFundTableUpdatedOn: [],
      fundTableUpdatedOn: [],
      dividendTableUpdatedOn: [],
      profitLossTableUpdatedOn: [],
      goldTableUpdatedOn: [],
    });
  }

  onFormSubmit() {
    if (this.isCashUpdate && this.tableForm.value.cashAvailableForInvesting <= 0) {
      this.openSnackBar('warn', 'Cash Available entered is invalid');
    } else {
      this.isLoading = true;
      if (this.isCashUpdate) {
        const tempCash = this.tableForm.value.cashAvailableForInvesting;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          cashAvailableForInvesting: tempCash
        });
      }
      else if (this.isStockUpdate) {
        const tempStockDate = this.tableForm.value.stockTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          stockTableUpdatedOn: Utility.formatDate(tempStockDate)
        });
      } else if (this.isMutualFundUpdate) {
        const tempMutualFundDate = this.tableForm.value.mutualFundTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          mutualFundTableUpdatedOn: Utility.formatDate(tempMutualFundDate)
        });
      } else if (this.isFundUpdate) {
        const tempFundDate = this.tableForm.value.fundTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          fundTableUpdatedOn: Utility.formatDate(tempFundDate)
        });
      } else if (this.isDividendUpdate) {
        const tempDividendDate = this.tableForm.value.dividendTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          dividendTableUpdatedOn: Utility.formatDate(tempDividendDate)
        });
      } else if (this.isProfitLossUpdate) {
        const tempProfitLossDate = this.tableForm.value.profitLossTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          profitLossTableUpdatedOn: Utility.formatDate(tempProfitLossDate)
        });
      } else if (this.isGoldUpdate) {
        const tempGoldDate = this.tableForm.value.goldTableUpdatedOn;
        this.tableForm.setValue(this.miscRecords);
        this.tableForm.patchValue({
          goldTableUpdatedOn: Utility.formatDate(tempGoldDate)
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
