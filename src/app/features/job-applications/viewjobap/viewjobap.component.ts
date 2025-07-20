import { Component, inject } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { MatDialog } from '@angular/material/dialog';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddrecuiterComponent } from '../addrecuiter/addrecuiter.component';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { AddquestionComponent } from '../addquestion/addquestion.component';
import { QuestionsComponent } from '../questions/questions.component';
import { ConversationComponent } from '../conversation/conversation.component';
import { AddconversationComponent } from '../addconversation/addconversation.component';
import { CompanyService } from '../../../core/services/company/company.service';
import { JobapService } from '../../../core/services/jobAp/jobap.service';

@Component({
  selector: 'app-viewjobap',
  standalone: true,
  imports: [sharedImports,QuestionsComponent, ConversationComponent],
  templateUrl: './viewjobap.component.html',
  styleUrl: './viewjobap.component.scss'
})
export class ViewjobapComponent {
 readonly dialog = inject(MatDialog);
    statusList = ['pending']
     form: FormGroup;
     jobId:any = '68738b3a71dff52a77a7190a';
     jobap:any;
     
     

      constructor(private fb: FormBuilder,
         private companyService: CompanyService,
         private jobapService:JobapService
      ) {
    
        this.form = this.fb.group({
          companyId: [null, [Validators.required]],
          position: [null, [Validators.required]],
          salary: [null, [Validators.required]],
          jd: [null],
          notes: [null],
          status: [null, [Validators.required]],
        } )

        this.getCompanyEmp()
        this.getJobbyId();
    
      }
   
    


  openDialog(): void {
    const dialogRef = this.dialog.open(AddrecuiterComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

   openDialog2(): void {
    const dialogRef = this.dialog.open(AddemployeeComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

  
   openDialog3(): void {
    const dialogRef = this.dialog.open(AddquestionComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

    openDialog4(): void {
    const dialogRef = this.dialog.open(AddcompanyComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

   openDialog5(): void {
    const dialogRef = this.dialog.open(AddconversationComponent, {
    width: '900px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    
    });
  }

  getCompanyEmp() {

  
const companyId = "685fadacce92bf206b65b141"
 

    this.companyService.getCompanyEmp(companyId).subscribe({
      next: (resp) => {
       
        console.log(resp)
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
  }

   getJobbyId(){
        this.jobapService.getJobbyId(this.jobId).subscribe({
          next: (resp)=>{
            console.log(resp.body);
            this.jobap = resp.body;

            this.form.patchValue({
              companyId:this.jobap.companyId.name,
                position:this.jobap.position,
                  salary:this.jobap.salary,
                    Status:this.jobap.Status,
                      jd:this.jobap.jd,
                       notes:this.jobap.notes,
            })
          },
           error: (err) => console.error('Request failed:', err),
          complete: () => console.log('Request complete')
        })
      }

 
}
