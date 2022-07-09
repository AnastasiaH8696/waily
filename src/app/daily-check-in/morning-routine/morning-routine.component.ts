import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morning-routine',
  templateUrl: './morning-routine.component.html',
  styleUrls: ['./morning-routine.component.css']
})
export class MorningRoutineComponent implements OnInit {

  typesOfShoes: string[] = ['Meditation', 'Yoga', 'Gratitude', 'Reading'];

  constructor() { }

  ngOnInit(): void {
  }

}
