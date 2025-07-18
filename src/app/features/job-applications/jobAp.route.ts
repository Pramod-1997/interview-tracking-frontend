import { Routes } from "@angular/router";
import { JoblistComponent } from "./joblist/joblist.component";
import { CompanyComponent } from "./company/company.component";
import { AddjobComponent } from "./addjob/addjob.component";
import { ViewjobapComponent } from "./viewjobap/viewjobap.component";
import { QuestionsComponent } from "./questions/questions.component";
import { ConversationComponent } from "./conversation/conversation.component";


export const jobApRoute: Routes = [
  { path: '', component: JoblistComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'add-job', component: AddjobComponent },
  { path: 'view-jobapp', component: ViewjobapComponent },
  { path: 'question', component: QuestionsComponent },
   { path: 'conversation', component: ConversationComponent },
]