import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { sharedImports } from '../../../shared/shared-imports';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addrecuiter',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './addrecuiter.component.html',
  styleUrl: './addrecuiter.component.scss'
})
export class AddrecuiterComponent {

   form: FormGroup;
   statusList = ['pending']
   readonly dialogRef = inject(MatDialogRef<AddrecuiterComponent>);
    readonly data = inject<any>(MAT_DIALOG_DATA);
  
    constructor(private fb: FormBuilder) {
  
      this.form = this.fb.group({
        name: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phone: [null, [Validators.required]],
        companyId: [null],
        linkedIn: [null, [Validators.required]],
        notes: [null],
      } )
  
    }
  
     onNoClick(): void {
      this.dialogRef.close();
    }
  
    submitData(){
  
      console.log(this.form.value);
      
  
    }

}
