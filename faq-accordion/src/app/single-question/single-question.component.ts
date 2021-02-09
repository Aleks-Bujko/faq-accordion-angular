import { Component, OnInit } from '@angular/core';
import { QuestionDatabase } from '../question-database';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.sass']
})
export class SingleQuestionComponent implements OnInit {


  questions = QuestionDatabase;

  constructor() { }

  ngOnInit(): void {
  }

}
