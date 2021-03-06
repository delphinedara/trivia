import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {  
  public questions: Question[] = [{
  text: 'Florence Nightingale became known as \"the Lady With the Lamp\" during which war?',
  answers: [{
    correct: false,
    text: 'American Civil War'
  },
  {
    correct: false,
    text: 'World War I'
  },
  {
    correct: true,
    text: 'Crimean War'
  },
  {
    correct: false,
    text: 'World War II'
  }
  ]
},
{
  text: 'In a quarter-mile race, which animal can be expected to win?',
  answers: [
    {
      correct: false,
      text: 'Lion'
    },
    {
      correct: true,
      text: 'Pronghorn Antelope'
    },
    {
      correct: false,
      text: 'Quarter Horse'
    },
    {
      correct: false,
      text: 'Giraffe'
    }
  ]
}
];

public correctAnswers =0;


  constructor() { }

  ngOnInit(): void {
  }

  public onQuestionAnswered(isCorrect: boolean): void {
    if(isCorrect) {
      this.correctAnswers++;
    }
  }

}
