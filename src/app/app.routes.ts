import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path:'',
    loadChildren:()=> import('../app/features/job-applications/jobAp.route').then(l=>l.jobApRoute)
    }
];
