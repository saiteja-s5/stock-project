import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utility } from 'src/app/utilities/utility';
import { CompanyNameDropdown } from 'src/app/models/company-name-dropdown.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { AutoCompleteEvent } from 'src/app/models/auto-complete.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-dividend-form',
  templateUrl: './dividend-form.component.html',
  styleUrls: ['./dividend-form.component.css']
})
export class DividendFormComponent {

  dividendForm!: FormGroup;
  companies!: CompanyNameDropdown[];
  filteredCompanies!: CompanyNameDropdown[];
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
        this.companies = companies;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.openSnackBar('error', 'Company dropdown not loaded')
      }
    });
    this.dividendForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      creditedDate: ['', Validators.required],
      creditedAmount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onFormSubmit() {
    if (this.dividendForm.valid) {
      this.isLoading = true;
      this.dividendForm.patchValue({
        companyName: this.dividendForm.value.companyName.companySymbol,
        creditedDate: Utility.formatDate(this.dividendForm.value.creditedDate)
      });
      this.dataTransferService.addDividend(this.dividendForm.value).subscribe({
        next: response => {
          this.isLoading = false;
          this.openSnackBar('success', 'Dividend added sucessfully');
          this.modal.close();
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('error', 'Dividend not added');
          this.modal.close();
        }
      });
    } else {
      this.openSnackBar('warn', 'Enter all the fields correctly');
    }
  }

  filterCompany(event: AutoCompleteEvent) {
    let filtered: CompanyNameDropdown[] = [];
    let query = event.query;
    for (let i = 0; i < (this.companies as CompanyNameDropdown[]).length; i++) {
      let company = (this.companies as CompanyNameDropdown[])[i];
      if (company.companyName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(company);
      }
    }
    this.filteredCompanies = filtered;
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
