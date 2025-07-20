import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { sharedImports } from '../../../shared/shared-imports';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuestionService } from '../../../core/services/question/question.service';

@Component({
  selector: 'app-addquestion',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './addquestion.component.html',
  styleUrl: './addquestion.component.scss'
})
export class AddquestionComponent {
   readonly dialog = inject(MatDialog);
form: FormGroup;
 statusList = ['pending']
  subjectList:any=[]
      topicList:any = []


  constructor(private fb: FormBuilder,
     private questionService: QuestionService,
      public dialogRef: MatDialogRef<AddquestionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
  ) {
console.log(data);

    this.subjectList = data.subject
this.topicList = data.topic

    this.form = this.fb.group({
      questionText: [null, [Validators.required]],
      subjectId:  [null, [Validators.required]],
      topicId: [null, [Validators.required]],
    } )

  }

   closeDialog(): void {
    this.dialogRef.close();
  }

  submitData(){

    if(this.form.invalid){
      return ;
    }

    console.log(this.form.value);
    
      this.questionService.addQuestion(this.form.value).subscribe({
      next: (resp) => {
         this.dialogRef.close();
        console.log('add completed')
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })

  }

}
