import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { ImageDetailComponent } from "../app/image-detail/image-detail.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'image/:date', component: ImageDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
