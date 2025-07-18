import { Component, inject } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { MatDialog } from '@angular/material/dialog';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-addjob',
  standalone: true,
  imports: [sharedImports,NgFor],
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.scss'
})
export class AddjobComponent {

   readonly dialog = inject(MatDialog);
    statusList = ['pending']
     form: FormGroup;
        jobStatus = ['notice', 'applied', 'get call from recruiter', 'interview', 'offered', 'joined', 'rejected']
        companyList = []


      constructor(private fb: FormBuilder) {
    
        this.form = this.fb.group({
          companyId: [null, [Validators.required]],
          position: [null, [Validators.required]],
          salary: [null, [Validators.required]],
          jd: [null],
          notes: [null],
          status: [null, [Validators.required]],
        } )
    
      }
   
    
      submitData(){
        console.log(this.form.value); 
      }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcompanyComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

}
