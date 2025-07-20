import { Component, inject, OnInit } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { MatDialog } from '@angular/material/dialog';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { JobapService } from '../../../core/services/jobAp/jobap.service';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../../../core/services/company/company.service';

@Component({
  selector: 'app-addjob',
  standalone: true,
  imports: [sharedImports,NgFor,RouterLink],
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.scss'
})
export class AddjobComponent implements OnInit {

   readonly dialog = inject(MatDialog);
    statusList = ['pending']
     form: FormGroup;
        jobStatus = ['notice', 'applied', 'get call from recruiter', 'interview', 'offered', 'joined', 'rejected']
        companyList:any = []


      constructor(private fb: FormBuilder,
        private jobapService:JobapService,
         private companyService: CompanyService,

      ) {
    
        this.form = this.fb.group({
          companyId: [null, [Validators.required]],
          position: [null, [Validators.required]],
          salary: [null, [Validators.required]],
          jd: [null],
          notes: [null],
          status: [null, [Validators.required]],
        } )
    
      }

       ngOnInit(): void {
    this.getAll();
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

  getAll(){
    this.jobapService.getAll().subscribe({
      next: (resp)=>{
this.companyList =resp.body;
      },
       error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
  }



  // closeDialog() {
  //   this.dialogRef.close();
  // }


}
