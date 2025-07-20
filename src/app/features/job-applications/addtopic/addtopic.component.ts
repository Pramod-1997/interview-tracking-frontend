import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sharedImports } from '../../../shared/shared-imports';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuestionService } from '../../../core/services/question/question.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-addtopic',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './addtopic.component.html',
  styleUrl: './addtopic.component.scss'
})
export class AddtopicComponent implements OnInit {

   form: FormGroup;
   statusList = []
     subjectList:any=[]
      topicList:any = []

  constructor(private fb: FormBuilder,
    private questionService: QuestionService,
    public dialogRef: MatDialogRef<AddtopicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
console.log(data);


    this.form = this.fb.group({
      topic: [null, [Validators.required]],
        subject: [null, [Validators.required]],
          subjectId: [null, [Validators.required]],
            topicId: [null, [Validators.required]],
    })

  }

  ngOnInit(): void {
    this.getAll()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTopic(){
   if (this.form.get('topic')?.valid) {

       let payload = {
        name :this.form.get('topic')?.value
      }
     this.questionService.addTopic(payload).subscribe({
      next: (resp) => {
        console.log('add completed')
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
    }
  }

   addSubject(){

    if (this.form.get('subject')?.valid) {
       let payload = {
        name :this.form.get('subject')?.value
      }
     this.questionService.addSubject(payload).subscribe({
      next: (resp) => {
        console.log('add completed')
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
    }
  }

   mapSubjectTopic(){
      if (this.form.get('topicId')?.valid && this.form.get('subjectId')?.valid) {
       let payload = {
        subjectId :this.form.get('subjectId')?.value,
         topicId :this.form.get('topicId')?.value
      }
      
     this.questionService.mapTopic(payload).subscribe({
      next: (resp) => {
        console.log('add completed')
      },
      error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
    }
  }


  submitData() {

    if (this.form.get('topic')?.valid) {
     
    }

    console.log(this.form.value);

    this.questionService.addTopic(this.form.value).subscribe({
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

   getAll(){
             forkJoin({
      questions: this.questionService.getQuestions(),
      subjects: this.questionService.getSubject(),
      topics: this.questionService.getTopic()
    }).subscribe({
        next: (results)=>{
        this.subjectList = results.subjects.body;
        this.topicList = results.topics.body;
        },
         error: (err) => console.error('Request failed:', err),
        complete: () => console.log('Request complete')
      })
    }

}
