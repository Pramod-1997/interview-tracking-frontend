import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { sharedImports } from '../../../shared/shared-imports';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addquestion',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './addquestion.component.html',
  styleUrl: './addquestion.component.scss'
})
export class AddquestionComponent {
form: FormGroup;
 statusList = ['pending']
 readonly dialogRef = inject(MatDialogRef<AddquestionComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      interviewRoundId: [null, [Validators.required]],
      questionText: [null, [Validators.required]],
      answerSummary: [null, [Validators.required]],
      topicId: [null]
    } )

  }

   onNoClick(): void {
    this.dialogRef.close();
  }

  submitData(){

    console.log(this.form.value);
    

  }

}
