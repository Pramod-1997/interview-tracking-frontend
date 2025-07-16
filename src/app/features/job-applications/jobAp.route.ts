import { Routes } from "@angular/router";
import { JoblistComponent } from "./joblist/joblist.component";
import { CompanyComponent } from "./company/company.component";
import { AddjobComponent } from "./addjob/addjob.component";


export const  jobApRoute:Routes =[
    {path:'', component:JoblistComponent },
     {path:'company', component:CompanyComponent },
       {path:'add-job', component:AddjobComponent }
]