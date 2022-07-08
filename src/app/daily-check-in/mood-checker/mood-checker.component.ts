import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mood-checker',
  templateUrl: './mood-checker.component.html',
  styleUrls: ['./mood-checker.component.css']
})
export class MoodCheckerComponent implements OnInit {
  moods = this._formBuilder.group({
    happy: false,
    sad: false,
    calm: false,
    depressed: false,
    angry: false,
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
