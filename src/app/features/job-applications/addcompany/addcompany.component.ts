import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sharedImports } from '../../../shared/shared-imports';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from '../../../core/services/company/company.service';

@Component({
  selector: 'app-addcompany',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './addcompany.component.html',
  styleUrl: './addcompany.component.scss'
})
export class AddcompanyComponent {

  form: FormGroup;
  statusList = ['pending']
  // readonly data = inject<any>(MAT_DIALOG_DATA);

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    public dialogRef: MatDialogRef<AddcompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      website: [null, [Validators.required]],
      location: [null, [Validators.required]],
      industry: [null],
    })

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitData() {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    this.companyService.addCompany(this.form.value).subscribe({
      next: (resp) => {
        this.dialogRef.close(true);
        console.log('add completed')
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
