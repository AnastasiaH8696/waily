import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyCheckInComponent } from './daily-check-in/daily-check-in.component';
import { HistoryCheckInsComponent } from './history-check-ins/history-check-ins.component';

const routes: Routes = [
  { path: 'daily', component: DailyCheckInComponent },
  { path: 'history', component: HistoryCheckInsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
