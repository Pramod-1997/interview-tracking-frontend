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
     jobId:any;
     
     

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
}
