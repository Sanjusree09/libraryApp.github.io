import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { LibrarianPanelComponent } from './librarianPanel/librarianPanel.component';
import { MemberRegisterComponent } from './memberRegister/memberRegister.component';
import { MemberPanelComponent } from './memberPanel/memberPanel.component';
import { AdminRegisterComponent } from './adminRegister/adminRegister.component';


export const appRoutes: Route[] = [
    {path:'dashboard', component:DashboardComponent},
    {path:'admin', component:AdminComponent},
    {path:'member', component:MemberComponent},
    {path:'librarianPanel', component:LibrarianPanelComponent},
    {path:'memberRegister', component:MemberRegisterComponent},
    {path:'memberPanel', component:MemberPanelComponent},
    {path:'adminRegister', component:AdminRegisterComponent},
    

];
