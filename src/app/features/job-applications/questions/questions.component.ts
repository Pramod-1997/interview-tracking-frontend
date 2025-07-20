import { Component, inject, Input } from '@angular/core';
import { sharedImports } from '../../../shared/shared-imports';
import { AddcompanyComponent } from '../addcompany/addcompany.component';
import { MatDialog } from '@angular/material/dialog';
import { QuestionService } from '../../../core/services/question/question.service';
import { forkJoin } from 'rxjs';
import { AddquestionComponent } from '../addquestion/addquestion.component';
import { AddtopicComponent } from '../addtopic/addtopic.component';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [sharedImports],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
   readonly dialog = inject(MatDialog);

   @Input() Id?: any; // Optional

    displayedColumns: string[] = [
      // 'SlNO', 
      'question','Subjcet', 'Topic'];
  dataSource:any = []
  subjectList:any=[]
  topicList:any=[]

   constructor(private questionService:QuestionService){
  
    }
  
    ngOnInit(): void {
      this.getAll();
    }


     openDialog(): void {
        const dialogRef = this.dialog.open(AddquestionComponent, {
        width: '900px',
        data:{
          topic:this.topicList,
          subject:this.subjectList
        }
        });
    
        dialogRef.afterClosed().subscribe((result:any) => {
          if(result){
        //    this.getAll();
          }
        console.log(result);
        
        });
      }

        openDialog2(): void {
        const dialogRef = this.dialog.open(AddquestionComponent, {
        width: '900px',
        });
    
        dialogRef.afterClosed().subscribe((result:any) => {
          if(result){
        //    this.getAll();
          }
        console.log(result);
        
        });
      }

        openDialog3(): void {
        const dialogRef = this.dialog.open(AddtopicComponent, {
        width: '900px',
        
        });
    
        dialogRef.afterClosed().subscribe((result:any) => {
          if(result){
        //    this.getAll();
          }
        console.log(result);
        
        });
      }

        getAll(){
           forkJoin({
    questions: this.questionService.getQuestions(),
    subjects: this.questionService.getSubject(),
    topics: this.questionService.getTopic()
  }).subscribe({
      next: (results)=>{
this.dataSource = results.questions.body;
      this.subjectList = results.subjects.body;
      this.topicList = results.topics.body;
      },
       error: (err) => console.error('Request failed:', err),
      complete: () => console.log('Request complete')
    })
  }



}
