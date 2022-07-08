import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyCheckInComponent } from './daily-check-in/daily-check-in.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HistoryCheckInsComponent } from './history-check-ins/history-check-ins.component';
import { MoodCheckerComponent } from './daily-check-in/mood-checker/mood-checker.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyCheckInComponent,
    HistoryCheckInsComponent,
    MoodCheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
